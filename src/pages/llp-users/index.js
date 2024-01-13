import Head from "next/head";
import React from "react";
import LLPUsers from "@/src/components/LlpUsers";

export default function Users() {
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>User Management</title>
				</Head>

				<LLPUsers />
			</section>
		</div>
	);
}