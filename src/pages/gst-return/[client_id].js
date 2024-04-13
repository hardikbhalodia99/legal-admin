import Head from "next/head";
import React from "react";
import withAuthUserTokenSSR from "@/src/lib/auth/appwrite/withAuthUserTokenSSR";
import PageHeader from "@/src/components/CompanyDetails";
export default function OPCFormData({ formData, formFilled, client_id }) {
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>Stark Industries</title>
				</Head>
				<div className="container">
					<PageHeader title={"HELLo"} />
				</div>



			</section>
		</div>
	);
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

	const { user, token } = context;
	const cookie = context.req.cookies;
	// console.log("%c 🥃 cookie", "color:#3f7cff", cookie);

	if (user && user.$id) {
		return {
			props: {

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