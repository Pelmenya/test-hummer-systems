import React from 'react';
import EditProfile from './EditProfile';
import { useParams } from 'react-router-dom';


export const Page = () => {
    const params = useParams();
    const { id } = params;
  
  return (
    <>  
     <EditProfile userId={id}/> 
    </>
  )
}


export default Page;
