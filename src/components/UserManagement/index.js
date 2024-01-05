import { BriefcaseIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import Head from "next/head";
import React from "react";
import CompanyDetails from "../forms/companyDetails";
import OfficeDetails from "../forms/officeDetails";
import PartnerDetails from "../forms/partnerDetails";
import Employees from "./Employees/index";
import Clients from "./Clients";

export default function UserManagement({employees}) {
	return (
		<div>
			<div className="container">
				<h1 className="text-2xl font-sfpro-bold text-primary-black">
					User Management
				</h1>

        <Tabs value="company-details">
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 mt-5 w-full gap-0 xl:gap-5 lg:gap-5">
            {/* TABS HEADER */}
            <TabsHeader
              className="block bg-transparent p-0"
              indicatorProps={{
                className: "bg-transparent border-2 border-[#808080]",
              }}
            >
              <Tab
                key="company-details"
                value="company-details"
                className="p-0 block rounded-md mb-2"
              >
                <Card className="shadow-none border-2 border-bright-gray rounded-md w-full block">
                  <CardBody className="py-3 px-4 w-full">
                    <div className="flex items-center justify-start">
                      <div className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center">
                        <BriefcaseIcon
                          className="text-[#101727] w-4 h-4"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="text-left ml-3">
                        <h5 className="text-[14px] font-mabry-bold text-[#101727]">
                          Employees
                        </h5>
                        <p className="text-[12px] text-[#808080] font-mabry-regular">
                          Update employees details
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="office-details"
                value="office-details"
                className="p-0 block rounded-md mb-2"
              >
                <Card className="shadow-none border-2 border-bright-gray rounded-md w-full block">
                  <CardBody className="py-3 px-4 w-full">
                    <div className="flex items-center justify-start">
                      <div className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center">
                        <HomeModernIcon
                          className="text-[#101727] w-4 h-4"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="text-left ml-3">
                        <h5 className="text-[14px] font-mabry-bold text-[#101727]">
                          Clients
                        </h5>
                        <p className="text-[12px] text-[#808080] font-mabry-regular">
                          Update client details
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            
            </TabsHeader>

            {/* TABS BODY */}
            <TabsBody className="col-span-4">
              {/* COMPANY DETAILS */}
              <TabPanel
                key="company-details"
                value="company-details"
                className="px-0 py-1 h-full"
              >
                <Employees employees={employees}/>
              </TabPanel>

              {/* OFFICE DETAILS */}
              <TabPanel
                key="office-details"
                value="office-details"
                className="px-0 py-1 h-full"
              >
                <Clients />
              </TabPanel>

              
            </TabsBody>
          </div>
        </Tabs>
			</div>
		</div>
	);
}
