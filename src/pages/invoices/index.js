import React from "react";
import Head from "next/head";

import InvoiceComponent from "@/src/components/Invoice";
import PageHeader from "@/src/components/core/PageHeader";

export default function invoices() {
    return (
        <section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
            <Head>
                <title>Invoice</title>
            </Head>
            <div className="container">
                <PageHeader
                    title="Invoice"
                    description={"There are total 2 invoices"}
                />

                <InvoiceComponent />
            </div>
        </section>
    );
}