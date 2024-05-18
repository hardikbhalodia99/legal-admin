import { Typography } from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";


import React from "react";

export default function CompanyDetailHeader({ title, description }) {
  return (
    <div className="bg-white pt-5 pb-5 px-5">
      <div className="block xl:flex lg:flex items-center gap-5">
        <div className="form-group w-full border-r-2">
          <Typography variant="h5" color="blue-gray">
            Stark Industries
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-sm">
            Company Id: 329
          </Typography>
        </div>
        <div className="form-group  w-full border-r-2">
          <a href="tel:+917265849365" className="flex ">
            <PhoneIcon className="w-5 h-5 mr-1 text-gray-800" />
            <Typography color="gray"  className="font-normal ">
              7265849365
            </Typography>
          </a>
          <a href="mailto:hittarth911@gmail.com" className="flex">
            <EnvelopeIcon className="w-5 h-5 mr-1 text-gray-800" />
            <Typography color="gray" className="font-normal">
              hittarth911@gmail.com
            </Typography>
          </a>
        </div>
        <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
          <Typography variant="h5" color="blue-gray">
            Alloted to
          </Typography>
          <div className=" flex">
            <span class="bg-gray-300 text-gray-800 text-xs font-medium me-2 mt-0.5 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-30">Hittarth Solanki</span>
            <span class="bg-gray-300 text-gray-800 text-xs font-medium me-2 mt-0.5 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-30">Hardik Bhalodia</span>
            <span class="bg-gray-300 text-gray-800 text-xs font-medium me-2 mt-0.5 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-30">Darsh Shah</span>
            <span class="bg-gray-300 text-gray-800 text-xs font-medium me-2 mt-0.5 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-30">Dhvanan Kotecha</span>
          </div>
        </div>
      </div>
    </div>

  );
}
