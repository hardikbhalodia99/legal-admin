import Head from "next/head";
import React from "react";
import OPCUsers from "@/src/components/OpcUsers";

export default function Users() {
	return (
		<div>
			<section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
				<Head>
					<title>OPC Clients</title>
				</Head>
				<div className="text-2xl">OPC Clients</div>
				<OPCUsers />
			</section>
		</div>
	);
}
