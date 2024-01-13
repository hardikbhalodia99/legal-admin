import Head from "next/head";
import React from "react";
import withAuthUserTokenSSR from "@/src/lib/auth/appwrite/withAuthUserTokenSSR";

export default function PvtFormData() {
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>User Management</title>
				</Head>

				
			</section>
		</div>
	);
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

  const { user,token} = context;
	const cookie = context.req.cookies;
	console.log("%c 🥃 cookie", "color:#3f7cff", cookie);

	const data = await getEmployees({
		cookie : cookie,
		token : token
	})
  if(user && user.$id){
		return {
			props : {
				employees : data.employees
			}
		}
  }else{
		return {
      redirect : {
        permanent : false,
        destination : "/sign-in"
      }
    }
  }
})