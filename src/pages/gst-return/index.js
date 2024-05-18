import Head from "next/head";
import React from "react";
import GstReturnComponent from "@/src/components/GstReturn";
import withAuthUserTokenSSR from "@/src/lib/auth/appwrite/withAuthUserTokenSSR";
import PageHeader from "@/src/components/core/PageHeader";

export default function GstReturn({ users }) {
	console.log("%c 🍣 users", "color:#ea7e5c", users);
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>GST Returns</title>
				</Head>
				<div className="container">
					<PageHeader title="GST Returns" description={"View all clients GST Returns"} />
					<GstReturnComponent data={[
						{
							name: "Hardik Bhalodia",
							phone: "6355129211",
							email: "hardik@gmail.com",
							company_name: "COMPANY 1",
							assigned_to: "hardik",
							createdAt: "27 Dec 2023"

						},
						{
							name: "Hittarth Solanki",
							phone: "7265849365",
							email: "hittarth911@gmail.com",
							company_name: "COMPANY 2",
							assigned_to: "hittarth",
							createdAt: "11 Jan 2024"
						}, {
							name: "Dhairya Solanki",
							phone: "8780813299",
							email: "dhairya@gmail.com",
							company_name: "COMPANY 3",
							assigned_to: "dhairya",
							createdAt: "09 Oct 2023"
						}, {
							name: "Darsh Shah",
							phone: "6355129212",
							email: "darsh@gmail.com",
							company_name: "COMPANY 4",
							assigned_to: "darsh",
							createdAt: "19 Aug 2023"
						}, {
							name: "Dhvanan Kotecha",
							phone: "6355129214",
							email: "dhvanan@gmail.com",
							company_name: "COMPANY 5",
							assigned_to: "dhvnana",
							createdAt: "1 Nov 2023"
						},
					]} />
				</div>
			</section>
		</div>
	);
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

	const { user, token } = context;
	const cookie = context.req.cookies;
	console.log("%c 🥃 cookie", "color:#3f7cff", cookie);

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