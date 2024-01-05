"use client";

/* NEXTJS IMPORTS */
import Head from "next/head";

/* MATERIAL TAILWIND COMPONENTS */
import { Tab, TabsHeader, TabsBody, Tabs, TabPanel, Card, CardBody, Button } from "@/src/components/core/mui-tailwind";

/* COMPONENTS */
import FileBox from "@/src/components/others/file-box";

/* ICONS */
import { DocumentIcon, FolderIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  /* ALL FILES */
  const AllFiles = () => {
    return (
      <Card className="shadow-md border border-bright-gray rounded-md">
        <CardBody className="p-0">
          <div className="border-b border-b-[#DDDDE6] py-3 px-5 flex items-center justify-between">
            <h2 className="text-[18px] font-mabry-bold text-black">
              Documents collected in the form
            </h2>
            <Button className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black py-2">
              Upload files
            </Button>
          </div>
          <div className="p-5 xl:p-5 lg:p-5 md:p-5">
            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-5">
              <div className="col-span-1">
                <FileBox
                  fileType="PDF"
                  fileName="Aadhar_Hardik_Director_1.pdf"
                  fileSize="10.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="JPG"
                  fileName="Aadhar_Hardik_Director_2.jpg"
                  fileSize="1.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="PNG"
                  fileName="PAN_Hardik_Director_1.pdf"
                  fileSize="5.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="DOCS"
                  fileName="Ownership_Proof.pdf"
                  fileSize="8.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  /* DOCUMENTS RECEIVED */
  const DocumentsReceived = () => {
    return (
      <Card className="shadow-md border border-bright-gray rounded-md">
        <CardBody className="p-0">
          <div className="border-b border-b-[#DDDDE6] py-3 px-5 flex items-center justify-between">
            <h2 className="text-[18px] font-mabry-bold text-black">
              Documents received from the Chartered Accountants
            </h2>
            <Button className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black py-2">
              Upload files
            </Button>
          </div>
          <div className="p-5 xl:p-5 lg:p-5 md:p-5">
            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-5">
              <div className="col-span-1">
                <FileBox
                  fileType="PDF"
                  fileName="Aadhar_Hardik_Director_1.pdf"
                  fileSize="10.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="JPG"
                  fileName="Aadhar_Hardik_Director_2.jpg"
                  fileSize="1.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="PNG"
                  fileName="PAN_Hardik_Director_1.pdf"
                  fileSize="5.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="DOCS"
                  fileName="Ownership_Proof.pdf"
                  fileSize="8.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  /* PERMANENT DOCUMENTS */
  const PermanentDocuments = () => {
    return (
      <Card className="shadow-md border border-bright-gray rounded-md">
        <CardBody className="p-0">
          <div className="border-b border-b-[#DDDDE6] py-3 px-5 flex items-center justify-between">
            <h2 className="text-[18px] font-mabry-bold text-black">
              Permanent Documents of the company
            </h2>
            <Button className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black py-2">
              Upload files
            </Button>
          </div>
          <div className="p-5 xl:p-5 lg:p-5 md:p-5">
            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 gap-5">
              <div className="col-span-1">
                <FileBox
                  fileType="PDF"
                  fileName="Aadhar_Hardik_Director_1.pdf"
                  fileSize="10.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="JPG"
                  fileName="Aadhar_Hardik_Director_2.jpg"
                  fileSize="1.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="PNG"
                  fileName="PAN_Hardik_Director_1.pdf"
                  fileSize="5.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
              <div className="col-span-1">
                <FileBox
                  fileType="DOCS"
                  fileName="Ownership_Proof.pdf"
                  fileSize="8.65 MB"
                  fileUploadDate="24 July 2021, 12:56 PM"
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <section className="py-5 px-10 h-[calc(100vh-65px)] overflow-auto overflow-x-hidden">
      {/* PAGE TITLE */}
      <Head>
        <title>File Manager</title>
      </Head>

      <div className="container">
        <h1 className="text-2xl font-sfpro-bold text-primary-black">
          File Manager
        </h1>

        {/* TABS */}
        <Tabs value="all-files">
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 mt-5 w-full gap-0 xl:gap-5 lg:gap-5">
            {/* TABS SIDEBAR */}
            <TabsHeader
              className="block bg-white border-2 border-bright-gray p-0"
              indicatorProps={{
                className: "bg-black bg-opacity-5 shadow-none",
              }}
            >
              <div className="p-3">
                <Tab
                  key="all-files"
                  value="all-files"
                  className="p-2 px-3 block rounded-md mb-2"
                >
                  <div className="flex items-center justify-start">
                    <FolderIcon
                      className="w-4 h-4 text-[#575762]"
                      strokeWidth={2}
                    />
                    <div className="text-left ml-2">
                      <h5 className="text-[14px] font-mabry-medium text-[#101727]">
                        All Files
                      </h5>
                    </div>
                  </div>
                </Tab>
                <Tab
                  key="documents-received"
                  value="documents-received"
                  className="p-2 px-3 block rounded-md mb-2"
                >
                  <div className="flex items-center justify-start">
                    <DocumentIcon
                      className="w-4 h-4 text-[#575762]"
                      strokeWidth={2}
                    />
                    <div className="text-left ml-2">
                      <h5 className="text-[14px] font-mabry-medium text-[#101727]">
                        Documents Received
                      </h5>
                    </div>
                  </div>
                </Tab>
                <Tab
                  key="permanent-files"
                  value="permanent-files"
                  className="p-2 px-3 block rounded-md"
                >
                  <div className="flex items-center justify-start">
                    <LockClosedIcon
                      className="w-4 h-4 text-[#575762]"
                      strokeWidth={2}
                    />
                    <div className="text-left ml-2">
                      <h5 className="text-[14px] font-mabry-medium text-[#101727]">
                        Permanent Files
                      </h5>
                    </div>
                  </div>
                </Tab>
              </div>
            </TabsHeader>

            {/* TABS BODY */}
            <TabsBody className="col-span-4">
              {/* ALL FILES */}
              <TabPanel
                key="all-files"
                value="all-files"
                className="px-0 py-1 h-full"
              >
                <AllFiles />
              </TabPanel>

              {/* DOCUMENTS RECEIVED */}
              <TabPanel
                key="documents-received"
                value="documents-received"
                className="px-0 py-1 h-full"
              >
                <DocumentsReceived />
              </TabPanel>

              {/* PERMANENT FILES */}
              <TabPanel
                key="permanent-files"
                value="permanent-files"
                className="px-0 py-1 h-full"
              >
                <PermanentDocuments />
              </TabPanel>
            </TabsBody>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Dashboard;
