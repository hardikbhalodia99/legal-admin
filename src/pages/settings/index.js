import {
  Button,
  Card,
  CardBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Head from "next/head";
import { FaUserCircle } from "react-icons/fa";
import InputField from "@/src/components/core/input";

const Settings = () => {
  return (
    <section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
      {/* PAGE TITLE */}
      <Head>
        <title>Settings</title>
      </Head>

      <div className="container">
        <Tabs value="General Settings">
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 gap-y-5 gap-0 xl:gap-5 lg:gap-5">
            <div className="col-span-1">
              <TabsHeader
                className="p-0 bg-transparent shadow-none w-full block"
                indicatorProps={{
                  className: "bg-black bg-opacity-10 shadow-none text-black",
                }}
              >
                <Card className="bg-white border border-[#E5E5E5] rounded-lg w-full h-full shadow-none">
                  <CardBody className="px-5 py-0">
                    <div className="py-5 pb-3 border-b border-[#E5E5E5]">
                      <div className="flex items-center gap-2">
                        <FaUserCircle className="w-5 h-5 text-[#777]" />
                        <h5 className="text-sm font-mabry-regular text-[#777]">
                          User Settings
                        </h5>
                      </div>
                      <div className="mt-3">
                        <Tab
                          key="General settings"
                          value="General settings"
                          className="text-base font-mabry-medium px-5 py-3 justify-start"
                          activeClassName="tab-active"
                        >
                          General settings
                        </Tab>
                        <Tab
                          key="Payment settings"
                          value="Payment settings"
                          className="text-base font-mabry-medium px-5 py-3 justify-start"
                          activeClassName="tab-active"
                        >
                          Payment settings
                        </Tab>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </TabsHeader>
            </div>
            <div className="col-span-4">
              <TabsBody className="shadow-none">
                <TabPanel
                  key="General settings"
                  value="General settings"
                  className="p-0 shadow-none rounded-lg"
                >
                  <Card className="bg-white border border-[#E5E5E5] rounded-lg w-full shadow-none">
                    <CardBody className="p-0">
                      <div className="block xl:flex lg:flex items-center justify-between border-b border-[#E5E5E5] dark:border-darkBorder p-5 py-3">
                        <div>
                          <h2 className="text-base font-mabry-medium text-black dark:text-white">
                            General Details
                          </h2>
                          <p className="text-sm font-mabry-regular dark:text-lightGreyText">
                            Update your photo and personal details here.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-5 xl:mt-0 lg:mt-0">
                          <Button className="w-full xl:w-auto lg:w-auto py-2 text-sm font-mabry-medium text-black bg-white border border-[#E5E5E5] shadow-none hover:shadow-none normal-case hover:bg-black hover:bg-opacity-5">
                            Cancel
                          </Button>
                          <Button className="w-full xl:w-auto lg:w-auto py-2 text-sm font-mabry-medium bg-black text-white shadow-none hover:shadow-none normal-case hover:bg-opacity-80">
                            Save details
                          </Button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-5">
                          <div className="form-group">
                            <label
                              htmlFor="profileName"
                              className="text-sm font-mabry-medium text-black dark:text-white"
                            >
                              Name
                            </label>
                            <InputField
                              type="text"
                              name="profileName"
                              id="profileName"
                              value="Darsh Shah"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="profileEmail"
                              className="text-sm font-mabry-medium text-black dark:text-white"
                            >
                              Email address{" "}
                            </label>
                            <InputField
                              type="email"
                              name="profileEmail"
                              id="profileEmail"
                              value="shahdarsh364@gmail.com"
                            />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="profilePhone"
                              className="text-sm font-mabry-medium text-black dark:text-white"
                            >
                              Phone
                            </label>
                            <InputField
                              type="email"
                              name="profilePhone"
                              id="profilePhone"
                              value="9574094129"
                            />
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </TabPanel>
                <TabPanel
                  key="Payment settings"
                  value="Payment settings"
                  className="p-0 shadow-none rounded-lg"
                >
                  <Card className="bg-white border border-[#E5E5E5] rounded-lg w-full shadow-none">
                    <CardBody className="p-0">
                      <div className="block xl:flex lg:flex items-center justify-between border-b border-[#E5E5E5] dark:border-darkBorder p-5 py-3">
                        <div>
                          <h2 className="text-base font-mabry-medium text-black dark:text-white">
                            Payment Details
                          </h2>
                          <p className="text-sm font-mabry-regular dark:text-lightGreyText">
                            Enter the API key and Secret Key here.
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-5 xl:mt-0 lg:mt-0">
                          <Button className="w-full xl:w-auto lg:w-auto py-2 text-sm font-mabry-medium text-black bg-white border border-[#E5E5E5] shadow-none hover:shadow-none normal-case hover:bg-black hover:bg-opacity-5">
                            Cancel
                          </Button>
                          <Button className="w-full xl:w-auto lg:w-auto py-2 text-sm font-mabry-medium bg-black text-white shadow-none hover:shadow-none normal-case hover:bg-opacity-80">
                            Save details
                          </Button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-5">
                          <div className="form-group">
                            <label
                              htmlFor="apiKey"
                              className="text-sm font-mabry-medium text-black dark:text-white"
                            >
                              API Key
                            </label>
                            <InputField type="text" name="apiKey" id="apiKey" />
                          </div>
                          <div className="form-group">
                            <label
                              htmlFor="secretKey"
                              className="text-sm font-mabry-medium text-black dark:text-white"
                            >
                              Secret Key
                            </label>
                            <InputField
                              type="text"
                              name="secretKey"
                              id="secretKey"
                            />
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </TabPanel>
              </TabsBody>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Settings;
