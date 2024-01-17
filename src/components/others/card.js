/* eslint-disable @next/next/no-img-element */
import React from "react";
/* ICONS */
import {
  ShoppingBagIcon
} from "@heroicons/react/24/outline";

export const DataCard = ({ title, value, icon, up, chart: ChartComponent }) => {
  return ( <div className="bg-white p-4 rounded-lg shadow-md">
  <div className="flex items-center">
    <div className=" bg-gray-300 text-black p-3 rounded-full mr-4">
      {icon}
    </div>
    <div>
      <p className="text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
</div>);
};

export const StatCard = () =>{
  return ( <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mr-10" >
  <div className="flex flex-col items-start pt-3 px-10 ">
    <small className="text-sm font-medium text-gray-900">Revenue</small>
    <p className="text-xl font-semibold text-gray-900">10,00,00,000</p>
  </div>
  <div className="flex flex-col items-end p-4 ">
    <ShoppingBagIcon className=" bg-gray-200 p-2 rounded mt-2 w-10" />
  </div>
</div>);
}
