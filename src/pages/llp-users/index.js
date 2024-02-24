import Head from "next/head";
import React from "react";
import LLPUsersComponent from "@/src/components/LlpUsers";
import withAuthUserTokenSSR from "@/src/lib/auth/appwrite/withAuthUserTokenSSR";
import { getOrders } from "../api/orders/get-orders";
import PageHeader from "@/src/components/core/PageHeader";

export default function PvtUsers({ users }) {
	console.log("%c 🍣 users", "color:#ea7e5c", users);
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>User Management</title>
				</Head>
				<div className="container">
					<PageHeader title="Limited Liability Partnership Clients" description={"All your clients at one place"} />
					<LLPUsersComponent data={users} />
				</div>
			</section>
		</div>
	);
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

	const { user, token } = context;
	const cookie = context.req.cookies;
	console.log("%c 🥃 cookie", "color:#3f7cff", cookie);

	const data = await getOrders({
		cookie: cookie,
		token: token,
		slug: "llp"
	})
	if (user && user.$id) {
		return {
			props: {
				users: data.orders
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