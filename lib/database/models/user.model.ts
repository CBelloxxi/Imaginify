import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  username: string;
  email: string;
  photo: string;
  height?: number;
  width?: number;
  firstName: string;
  lastName: string;
  planId?: string;
  creditBalance?: number;
}

const UserSchema = new Schema ({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true  },
  photo: { type: String, required: true },
  height: { type: Number },
  width: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
  planId: { type: String },
  creditBalance: { type: Number },
}) 

const User = models?.User || model('User', UserSchema);

export default User;