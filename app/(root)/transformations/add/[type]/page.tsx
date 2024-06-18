import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'

const AddTransformationTypePage = ({ params: { type }}:SearchParamProps) => {
  const transformation = transformationTypes[type];

  return (
    <Header 
    // Transfomation is a ts type which will take the type information from the index.d.ts file and "transform" it to whatever is listed meaning that it can be super dynamic and fast, rather than having to manually change everything or list it per page which is useful for a project where you have components that are imported and rendered across multiple different pages.
      title={transformation.title}
      subtitle={transformation.subTitle}
    />
  )
}

export default AddTransformationTypePage