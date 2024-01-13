import Head from 'next/head';
import React from 'react';
import withAuthUserTokenSSR from '../lib/auth/appwrite/withAuthUserTokenSSR';

const Dashboard = () => {
  return (
    <section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
      {/* PAGE TITLE */}
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="container">
        <h1 className="text-2xl font-sfpro-bold text-primary-black">
          Dashboard
        </h1>

        {/* FORM STEPS */}
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1"></div>
      </div>
    </section>
  );
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

  const { user,token} = context;

  if(user && user.$id){
    
  }else{
    return {
      redirect : {
        permanent : false,
        destination : "/sign-in"
      }
    }
  }
})

export default Dashboard