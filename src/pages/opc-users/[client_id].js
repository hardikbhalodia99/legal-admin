import Head from "next/head";
import React from "react";
import withAuthUserTokenSSR from "@/src/lib/auth/appwrite/withAuthUserTokenSSR";
import { getForm } from "../api/form/get-form";
import OPCForms from "@/src/components/forms/OpcForm";

export default function OPCFormData({ formData, formFilled, client_id }) {
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>User Management</title>
				</Head>

				<OPCForms client_id={client_id} formData={formData} formFilled={formFilled} />
			</section>
		</div>
	);
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

	const { user, token } = context;
	const cookie = context.req.cookies;
	// console.log("%c 🥃 cookie", "color:#3f7cff", cookie);



	const data = await getForm({
		cookie: cookie,
		token: token,
		client_id: context.params.client_id,
		slug: "opc"
	})
	console.log("%c 🍷 data", "color:#4fff4B", data);
	if (user && user.$id) {
		return {
			props: {
				formFilled: data.formFilled,
				formData: data.formData,
				client_id: context.params.client_id,
			}
		}
	} else {
		return {
			redirect: {
				permanent: false,
				destination: "/sign-in"
			}
		}
	}
})