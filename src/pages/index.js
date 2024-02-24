import Head from 'next/head';
import React from 'react';

import withAuthUserTokenSSR from '../lib/auth/appwrite/withAuthUserTokenSSR';
import { DataCard, StatCard } from '../components/others/card';

import { AreaChartComponent, PieChartComponent } from '../components/others/graphs';

import TransactionsTable from '../components/Transactions';
import { Button } from "@/src/components/core/mui-tailwind";

const Dashboard = () => {

  return (
    <section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
      {/* PAGE TITLE */}
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="container">
        <h1 className="text-2xl font-sfpro-bold text-primary-black mb-3">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DataCard title="Total Sales" value="$10,000" icon="💸" />
          <DataCard title="Orders" value="150" icon="📦" />
          <DataCard title="Visitors" value="5,000" icon="👥" />
          <DataCard title=" Total Users" value="500" icon="👥" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          <div className='rounded-lg shadow-md bg-white'>
            <AreaChartComponent />
          </div>
          <div className='rounded-lg shadow-md bg-white'>
            <PieChartComponent />
          </div>
          <div className='rounded-lg shadow-md bg-white'>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 bg-white rounded-lg">
              <StatCard />
              <StatCard />
              <StatCard />
              <StatCard />
            </div>
          </div>
        </div>
        <div className='rounded-lg shadow-md bg-white px-10 mt-10'>
          <div className="border-b border-b-[#DDDDE6] py-5 px-5 flex items-center justify-between pb-5 mb-3">
            <h2 className="text-[18px] font-mabry-bold text-black">
              View All Recent Transactions
            </h2>
            <Button className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black py-1">
              Save Details
            </Button>
          </div>
          <TransactionsTable />
        </div>


      </div>
    </section>
  );
}

export const getServerSideProps = withAuthUserTokenSSR({})(async (context) => {

  const { user, token } = context;

  if (user && user.$id) {

  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/sign-in"
      }
    }
  }
})

export default Dashboard