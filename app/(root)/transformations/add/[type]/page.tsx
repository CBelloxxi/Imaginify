// Transfomation is a ts type which will take the type information from the index.d.ts file and "transform" it to whatever is listed meaning that it can be super dynamic and fast, rather than having to manually change everything or list it per page which is useful for a project where you have components that are imported and rendered across multiple different pages.
// @ts-ignore

import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransformationForm from '@/components/shared/TransformationForm';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type }}:SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];
  const user = await getUserById(userId);

  if(!userId) redirect('/sign-in');

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <TransformationForm 
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  )
}

export default AddTransformationTypePage
