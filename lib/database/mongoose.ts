import { error } from 'console';
import mongoose, { Mongoose } from 'mongoose';

const { MongoClient, ServerApiVersion } = require('mongodb');
const MONGODB_URL = process.env.MONGODB_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose

if(!cached) {
  cached = (global as any).mongoose ={
    conn: null, promise: null
  }
}

export const connectToDatabase = async () => {
  if(cached.conn) return cached.conn;

  if(!MONGODB_URL) throw error('Missing MONGODB_URL stupid')

  cached.promise = 
  cached.promise || 
  mongoose.connect 
  (MONGODB_URL, {
    dbName: 'Imaginify', bufferCommands: false 
  })

  cached.conn = await cached.promise;

  return cached.conn;
}