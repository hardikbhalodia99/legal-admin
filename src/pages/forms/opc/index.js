"use client";
import React from "react";

/* NEXTJS IMPORTS */
import Head from "next/head";

/* MATERIAL TAILWIND COMPONENTS */
import {
  Card,
  CardBody,
  Tab,
  TabsHeader,
  TabsBody,
  Tabs,
  TabPanel,
} from "@/src/components/core/mui-tailwind";

/* TAB COMPONENTS */
import CompanyDetails from "@/src/components/forms/companyDetails";
import OfficeDetails from "@/src/components/forms/officeDetails";
import PartnerDetails from "@/src/components/forms/partnerDetails";
import NomineeDetails from "@/src/components/forms/nomineeDetails";

/* ICONS */
import {
  BriefcaseIcon,
  HomeModernIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const OPCForms = () => {
  return (
    <section className="py-5 px-5 xl:px-10 lg:px-10 h-full xl:h-[calc(100vh-68px)] lg:h-[calc(100vh-68px)] md:h-full overflow-auto overflow-x-hidden scrollbar-hidden">
      {/* PAGE TITLE */}
      <Head>
        <title>Form | One Person Company</title>
      </Head>

      <div className="container">
        <h1 className="text-2xl font-sfpro-bold text-primary-black">
          One Person Company Registration Form
        </h1>

        {/* FORM STEPS */}
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
                          Company Details
                        </h5>
                        <p className="text-[12px] text-[#808080] font-mabry-regular">
                          Tell us about your company
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
                          Office Details
                        </h5>
                        <p className="text-[12px] text-[#808080] font-mabry-regular">
                          Tell us about your office
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="nominee-details"
                value="nominee-details"
                className="p-0 block rounded-md mb-2"
              >
                <Card className="shadow-none border-2 border-bright-gray rounded-md w-full block">
                  <CardBody className="py-3 px-4 w-full">
                    <div className="flex items-center justify-start">
                      <div className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center">
                        <ShieldCheckIcon
                          className="text-[#101727] w-4 h-4"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="text-left ml-3">
                        <div>
                          <h5 className="text-[14px] font-mabry-bold text-[#101727]">
                            Nominee Details
                          </h5>
                          <p className="text-[12px] text-[#808080] font-mabry-regular">
                            Tell us about your nominee
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="partner-details"
                value="partner-details"
                className="p-0 block rounded-md mb-2"
              >
                <Card className="shadow-none border-2 border-bright-gray rounded-md w-full block">
                  <CardBody className="py-3 px-4 w-full">
                    <div className="flex items-center justify-start">
                      <div className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center">
                        <UserGroupIcon
                          className="text-[#101727] w-4 h-4"
                          strokeWidth={2}
                        />
                      </div>
                      <div className="text-left ml-3">
                        <div>
                          <h5 className="text-[14px] font-mabry-bold text-[#101727]">
                            Director Details
                          </h5>
                          <p className="text-[12px] text-[#808080] font-mabry-regular">
                            Tell us about your partners
                          </p>
                        </div>
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
                <CompanyDetails formType="one-person-company" />
              </TabPanel>

              {/* OFFICE DETAILS */}
              <TabPanel
                key="office-details"
                value="office-details"
                className="px-0 py-1 h-full"
              >
                <OfficeDetails />
              </TabPanel>

              {/* NOMINEE DETAILS */}
              <TabPanel
                key="nominee-details"
                value="nominee-details"
                className="px-0 py-1 h-full"
              >
                <NomineeDetails />
              </TabPanel>

              {/* PARTNER DETAILS */}
              <TabPanel
                key="partner-details"
                value="partner-details"
                className="px-0 py-1 h-full"
              >
                <PartnerDetails formType="one-person-company" />
              </TabPanel>
            </TabsBody>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default OPCForms;
