"use client";
import React from "react";

/* NEXTJS COMPONENTS */
import Head from "next/head";

import withAuthUserTokenSSR from "../lib/auth/appwrite/withAuthUserTokenSSR";
import SignInComponent from "../components/sign-in";

const AuthLogin = () => {
  return (
    <section className="login p-5">
      {/* META TAGS */}
      <Head>
        <title>Login to your account</title>
      </Head>

      {/* UI COMPONENT */}
      <SignInComponent />
    </section>
  );
};

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

  const { user,token} = context;

  if(user && user.$id){
    return {
      redirect : {
        permanent : false,
        destination : "/"
      }
    }
  }
})

export default AuthLogin;
