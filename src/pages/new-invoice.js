import React from "react";
import NewInvoice from "../components/NewInvoice";
import Head from "next/head";

export default function new_invoice() {
    return (
        <section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
            <Head>
                <title>Invoice Management</title>
            </Head>

            <NewInvoice />
        </section>
    );
}
