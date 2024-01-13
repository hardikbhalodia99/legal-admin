import Head from "next/head";
import React from "react";
import withAuthUserTokenSSR from "@/src/lib/auth/appwrite/withAuthUserTokenSSR";
import { getForm } from "../api/form/get-form";
import PVTForms from "@/src/components/forms/PvtForm";

export default function PvtFormData({formData,formFilled}) {
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>User Management</title>
				</Head>

				<PVTForms formData={formData} formFilled={formFilled}/>
			</section>
		</div>
	);
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

  const { user,token} = context;
	const cookie = context.req.cookies;
	console.log("%c 🥃 cookie", "color:#3f7cff", cookie);



	const data = await getForm({
		cookie : cookie,
		token : token,
		client_id : context.params.client_id,
		slug : "pvt-ltd"
	})
	console.log("%c 🍷 data", "color:#4fff4B", data);
  if(user && user.$id){
		return {
			props : {
				formFilled: data.formFilled,
				formData: data.formData,
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