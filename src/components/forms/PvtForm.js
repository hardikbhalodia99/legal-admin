"use client";
import React, { useState } from "react";

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
  Button
} from "@/src/components/core/mui-tailwind";

/* TAB COMPONENTS */
import CompanyDetails from "@/src/components/forms/CompanyDetails";
import OfficeDetails from "@/src/components/forms/OfficeDetails";
import PartnerDetails from "@/src/components/forms/Directors/index";

/* ICONS */
import {
  BriefcaseIcon,
  HomeModernIcon,
  UserGroupIcon,
  PencilSquareIcon
} from "@heroicons/react/24/outline";
import { NoSymbolIcon } from "@heroicons/react/24/solid";

const PVTForms = ({ formData, formFilled, client_id }) => {

  const clientId = client_id ? client_id : "";
  const [companyDetails, setCompanyDetails] = useState(formData && formData.companyDetails ? formData.companyDetails : {})
  const [officeDetails, setOfficeDetails] = useState(formData && formData.officeDetails ? formData.officeDetails : {})
  const [directorDetails, setDirectorDetails] = useState(formData && formData.directorDetails ? formData.directorDetails : [])

  const [enableEditing, setEnableEditing] = useState(false);

  const faceName = "Director"
  return (
    <section className="py-5  h-full xl:h-[calc(100vh-68px)] lg:h-[calc(100vh-68px)] md:h-full overflow-auto overflow-x-hidden scrollbar-hidden">
      {/* PAGE TITLE */}
      <Head>
        <title>Form | Private Limited Registration</title>
      </Head>

      <div className="container">
        {/* <h1 className="text-2xl font-sfpro-bold text-primary-black">
          Private Limited Registration Form
        </h1>
        <Button>Edit</Button> */}

        <div className="border-b border-b-[#DDDDE6] py-5 px-5 flex items-center justify-between pb-5 mb-3">
          <h2 className="text-2xl font-sfpro-bold text-black">
            Private Limited Registration Form
          </h2>
          <Button onClick={() => { setEnableEditing(!enableEditing) }} className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black py-1 flex">
            {" "} {enableEditing ? <><NoSymbolIcon className=" w-4 h-4 mr-2"
              strokeWidth={2} /> Disable</> : <><PencilSquareIcon className=" w-4 h-4 mr-2"
                strokeWidth={2} /> Enable</>}
          </Button>
        </div>

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
                            {faceName} Details
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
                <CompanyDetails editable={enableEditing} clientId={clientId} companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} />
              </TabPanel>

              {/* OFFICE DETAILS */}
              <TabPanel
                key="office-details"
                value="office-details"
                className="px-0 py-1 h-full"
              >
                <OfficeDetails editable={enableEditing} clientId={clientId} officeDetails={officeDetails} setOfficeDetails={setOfficeDetails} />
              </TabPanel>

              {/* PARTNER DETAILS */}
              <TabPanel
                key="partner-details"
                value="partner-details"
                className="px-0 py-1 h-full"
              >
                <PartnerDetails editable={enableEditing} clientId={clientId} formType="pvt" directorsDetails={directorDetails} setDirectorsDetails={setDirectorDetails} faceName={faceName} />
              </TabPanel>
            </TabsBody>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default PVTForms;
