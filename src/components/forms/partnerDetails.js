"use client";
import { useState } from "react";
import ImageUploading from "react-images-uploading";

/* NEXTJS IMPORTS */
import Image from "next/image";

/* MATERIAL UI COMPONENTS */
import { Card, CardBody, Button } from "@/src/components/core/mui-tailwind";
import InputField from "@/src/components/core/input";
import SelectField from "@/src/components/core/select";

/* ICONS */
import { PlusIcon, UserIcon, UserPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

const PartnerDetails = (props) => {
  
  const partnerData = {
    partnerName: "Hardik Bhalodia",
    partnerEmail: "hardikbhalodia99@gmail.com",
    partnerPhone: "9574094129",
    partnerShareRatio: "50%",
    partnerContribution: "10%",
    currentOccupation: "Business",
    citizenshipStatus: "Indian",
    dinNumber: "DIN22657484",
    stayDuration: "5 years",
    directorAddress:
      "TF 10/11, The Petal Trillium, Vasna Bhaili Road, Vadodara",
    passportPhoto: [],
    panCardPhoto: [],
    idProofPhoto: [],
    residenceProofPhoto: [],
    aadharCardPhoto: [],
    additionalDocs: [],
  };

  const [partnersList, setPartnersList] = useState([partnerData]);

  const handleDetailsChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...partnersList];
    list[index][name] = value;
    setPartnersList(list);
  };

  const handleSelectChange = (e, index) => {
    const { name, value } = e;
    const list = [...partnersList];
    list[index][name] = value;
    setPartnersList(list);
  };

  const handleImageChange = (imageList, index) => {
    console.log(index + " - " + imageList);
  };

  /* ADD PARTNERS */
  const handleAddPartners = () => {
    setPartnersList([...partnersList, partnerData]);
  };

  /* REMOVE PARTNERS */
  const handleRemovePartners = (index) => {
    const list = [...partnersList];
    list.splice(index, 1);
    setPartnersList(list);
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 mb-3 gap-y-4 gap-x-4">
        {partnersList.map((partner, index) => (
          <Card
            key={index}
            className="shadow-none border-2 border-bright-gray rounded-md w-full block cursor-pointer"
          >
            <CardBody className="py-3 px-4 w-full relative">
              <div className="flex items-center justify-start">
                <div className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center">
                  <UserIcon
                    className="text-[#101727] w-4 h-4"
                    strokeWidth={2}
                  />
                </div>
                <div className="text-left ml-3">
                  <h5 className="text-[14px] font-mabry-bold text-[#101727]">
                    {props.formType === "private-limited-registration" ||
                    props.formType === "one-person-company"
                      ? "Director"
                      : "Partner"}{" "}
                    {index + 1}
                  </h5>
                  <p className="text-[12px] text-[#808080] font-mabry-regular">
                    Fill the details of the{" "}
                    {props.formType === "private-limited-registration" ||
                    props.formType === "one-person-company"
                      ? "director"
                      : "partner"}
                  </p>
                </div>
              </div>
              {partnersList.length > 1 && index + 1 !== 1 && (
                <Button
                  className="bg-white shadow-none hover:shadow-none rounded-full p-2 hover:bg-black hover:bg-opacity-5 !absolute top-1 right-1"
                  onClick={() => handleRemovePartners(index)}
                >
                  <XMarkIcon
                    className="w-[14px] h-[14px] text-[#101727]"
                    strokeWidth={2}
                  />
                </Button>
              )}
            </CardBody>
          </Card>
        ))}

        <Card
          className="shadow-none border-2 border-bright-gray rounded-md w-full block cursor-pointer hover:bg-[#101727] hover:bg-opacity-[0.03]"
          onClick={handleAddPartners}
        >
          <CardBody className="py-3 px-4 w-full">
            <div className="flex items-center justify-start">
              <div className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center">
                <UserPlusIcon
                  className="text-[#101727] w-4 h-4"
                  strokeWidth={2}
                />
              </div>
              <div className="text-left ml-3">
                <h5 className="text-[14px] font-mabry-bold text-[#101727]">
                  Add{" "}
                  {props.formType === "private-limited-registration" ||
                  props.formType === "one-person-company"
                    ? "director"
                    : "partner"}
                </h5>
                <p className="text-[12px] text-[#808080] font-mabry-regular">
                  Click here to add{" "}
                  {props.formType === "private-limited-registration"
                    ? "director"
                    : "partner"}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {partnersList.map((partner, index) => (
        <Card
          key={index}
          className="shadow-md border border-bright-gray rounded-md mb-4"
        >
          <CardBody className="p-0">
            <div className="border-b border-b-[#DDDDE6] py-3 px-5 flex items-center justify-between">
              <h2 className="text-[18px] font-mabry-bold text-black">
                {props.formType === "private-limited-registration" ||
                props.formType === "one-person-company"
                  ? "Director"
                  : "Partner"}{" "}
                {index + 1}
              </h2>
              <Button className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black py-1">
                Save Details
              </Button>
            </div>
            <form>
              <div className="p-5 xl:p-8 lg:p-8 md:p-5">
                <div className="form-group">
                  <InputField
                    type="text"
                    label={
                      props.formType === "private-limited-registration" ||
                      props.formType === "one-person-company"
                        ? "Director Name"
                        : "Partner Name"
                    }
                    value={partner.partnerName}
                    onChange={(e) => handleDetailsChange(e, index)}
                  />
                </div>
                <div className="block xl:flex lg:flex items-center mt-6 gap-5">
                  <div className="form-group w-full">
                    <InputField
                      type="email"
                      label="Email Address"
                      value={partner.partnerEmail}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                  <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                    <InputField
                      type="text"
                      label="Phone"
                      value={partner.partnerPhone}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                </div>
                <div className="block xl:flex lg:flex items-center mt-6 gap-5">
                  <div className="form-group w-full">
                    <InputField
                      type="text"
                      label={
                        props.formType === "private-limited-registration" ||
                        props.formType === "one-person-company"
                          ? "Profit sharing ratio of this director"
                          : "Profit sharing ratio of this partner"
                      }
                      value={partner.partnerShareRatio}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                  <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                    <InputField
                      type="text"
                      label={
                        props.formType === "private-limited-registration"
                          ? "Amount of shareholding"
                          : props.formType === "one-person-company"
                          ? "Amount of capital"
                          : "Partner contribution"
                      }
                      value={partner.partnerContribution}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                </div>
                <div className="block xl:flex lg:flex items-center mt-6 gap-5">
                  <div className="form-group w-full">
                    <SelectField
                      label="Current Occupation"
                      options={[
                        "Business",
                        "Professional",
                        "Home Maker",
                        "Student",
                        "Private Service",
                        "Government Service",
                      ]}
                      value={partner.currentOccupation}
                      onChange={(e) => handleSelectChange(e, index)}
                    />
                  </div>
                  <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                    <SelectField
                      label="Citizenship Status"
                      options={["Indian", "NRI", "Foreign Citizen"]}
                      value={partner.citizenshipStatus}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                </div>
                <div
                  className={`${
                    props.formType === "one-person-company"
                      ? "hidden"
                      : "block xl:flex lg:flex"
                  } items-center mt-6 gap-5`}
                >
                  <div className="form-group w-full">
                    <InputField
                      type="text"
                      label="DIN Number"
                      value={partner.dinNumber}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                  <div className="form-group w-full">
                    <InputField
                      type="text"
                      label="Duration of stay at present address given as address proof"
                      value={partner.stayDuration}
                      onChange={(e) => handleDetailsChange(e, index)}
                    />
                  </div>
                </div>
                <div className="form-group mt-6">
                  <InputField
                    type="text"
                    label={
                      props.formType === "private-limited-registration"
                        ? "Address of director"
                        : "Address of partner"
                    }
                    value={partner.directorAddress}
                    onChange={(e) => handleDetailsChange(e, index)}
                  />
                </div>
                <div className="mt-6">
                  <div className="mb-6 bg-[#F5F5FA] rounded-md py-2 px-4">
                    <p className="font-mabry-bold text-base text-primary-black">
                      Mandatory Documents
                    </p>
                    <p className="font-mabry-regular text-sm text-[#575762]">
                      Upload the documents as mentioned to proceed further
                    </p>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="form-group w-full">
                      <p className="text-sm text-[#575762] font-mabry-medium">
                        Passport size photograph
                      </p>
                      <ImageUploading
                        value={partner.passportPhoto}
                        onChange={(imageList) =>
                          handleImageChange(imageList, index)
                        }
                        maxNumber={3}
                        dataURLKey="data_url"
                      >
                        {({ imageList, onImageUpload, onImageRemove }) => (
                          <div className="mt-2 flex items-center gap-6">
                            <div
                              className={`${
                                imageList.length === 0 ? "block" : "hidden"
                              } w-[130px] h-[130px] border-dashed border border-[#C1C1CD] rounded-xl flex items-center justify-center cursor-pointer hover:border-primary`}
                              onClick={onImageUpload}
                            >
                              <div className="text-center">
                                <div className="h-[30px] w-[30px] rounded-3xl bg-primary flex items-center justify-center mx-auto">
                                  <PlusIcon
                                    className="text-white w-4 h-4"
                                    strokeWidth={2}
                                  />
                                </div>
                                <h5 className="text-sm text-primary-black font-mabry-medium mt-[5px]">
                                  Add image
                                </h5>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (500kb max)
                                </p>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (PNG/JPG/JPEG)
                                </p>
                              </div>
                            </div>

                            {imageList.map((image, index) => (
                              <div key={index} className="flex items-center">
                                <Image
                                  src={image["data_url"]}
                                  className="w-[130px] h-[130px] rounded-full"
                                  alt="Company Logo"
                                />
                                <Button
                                  className="bg-white border border-primary-black rounded-3xl text-primary-black shadow-none ml-5 font-mabry-medium hover:shadow-none hover:bg-primary-black hover:text-white"
                                  onClick={onImageRemove}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                    <div className="form-group w-full">
                      <p className="text-sm text-[#575762] font-mabry-medium">
                        PAN card
                      </p>
                      <ImageUploading
                        value={partner.panCardPhoto}
                        onChange={(imageList) =>
                          handleImageChange(imageList, index)
                        }
                        maxNumber={3}
                        dataURLKey="data_url"
                      >
                        {({ imageList, onImageUpload, onImageRemove }) => (
                          <div className="mt-2 flex items-center gap-6">
                            <div
                              className={`${
                                imageList.length === 0 ? "block" : "hidden"
                              } w-[130px] h-[130px] border-dashed border border-[#C1C1CD] rounded-xl flex items-center justify-center cursor-pointer hover:border-primary`}
                              onClick={onImageUpload}
                            >
                              <div className="text-center">
                                <div className="h-[30px] w-[30px] rounded-3xl bg-primary flex items-center justify-center mx-auto">
                                  <PlusIcon
                                    className="text-white w-4 h-4"
                                    strokeWidth={2}
                                  />
                                </div>
                                <h5 className="text-sm text-primary-black font-mabry-medium mt-[5px]">
                                  Add image
                                </h5>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (500kb max)
                                </p>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (PNG/JPG/JPEG)
                                </p>
                              </div>
                            </div>

                            {imageList.map((image, index) => (
                              <div key={index} className="flex items-center">
                                <Image
                                  src={image["data_url"]}
                                  className="w-[130px] h-[130px] rounded-full"
                                  alt="Company Logo"
                                />
                                <Button
                                  className="bg-white border border-primary-black rounded-3xl text-primary-black shadow-none ml-5 font-mabry-medium hover:shadow-none hover:bg-primary-black hover:text-white"
                                  onClick={onImageRemove}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="form-group w-full">
                      <p className="text-sm text-[#575762] font-mabry-medium">
                        ID Proof: Passport/Driving License/Voter ID Card
                      </p>
                      <ImageUploading
                        value={partner.idProofPhoto}
                        onChange={(imageList) =>
                          handleImageChange(imageList, index)
                        }
                        maxNumber={3}
                        dataURLKey="data_url"
                      >
                        {({ imageList, onImageUpload, onImageRemove }) => (
                          <div className="mt-2 flex items-center gap-6">
                            <div
                              className={`${
                                imageList.length === 0 ? "block" : "hidden"
                              } w-[130px] h-[130px] border-dashed border border-[#C1C1CD] rounded-xl flex items-center justify-center cursor-pointer hover:border-primary`}
                              onClick={onImageUpload}
                            >
                              <div className="text-center">
                                <div className="h-[30px] w-[30px] rounded-3xl bg-primary flex items-center justify-center mx-auto">
                                  <PlusIcon
                                    className="text-white w-4 h-4"
                                    strokeWidth={2}
                                  />
                                </div>
                                <h5 className="text-sm text-primary-black font-mabry-medium mt-[5px]">
                                  Add image
                                </h5>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (500kb max)
                                </p>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (PNG/JPG/JPEG)
                                </p>
                              </div>
                            </div>

                            {imageList.map((image, index) => (
                              <div key={index} className="flex items-center">
                                <Image
                                  src={image["data_url"]}
                                  className="w-[130px] h-[130px] rounded-full"
                                  alt="Company Logo"
                                />
                                <Button
                                  className="bg-white border border-primary-black rounded-3xl text-primary-black shadow-none ml-5 font-mabry-medium hover:shadow-none hover:bg-primary-black hover:text-white"
                                  onClick={onImageRemove}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                    <div className="form-group w-full">
                      <p className="text-sm text-[#575762] font-mabry-medium">
                        Proof of Residence: Bank Statement/Electricity or
                        Telephone Bill
                      </p>
                      <ImageUploading
                        value={partner.residenceProofPhoto}
                        onChange={(imageList) =>
                          handleImageChange(imageList, index)
                        }
                        maxNumber={3}
                        dataURLKey="data_url"
                      >
                        {({ imageList, onImageUpload, onImageRemove }) => (
                          <div className="mt-2 flex items-center gap-6">
                            <div
                              className={`${
                                imageList.length === 0 ? "block" : "hidden"
                              } w-[130px] h-[130px] border-dashed border border-[#C1C1CD] rounded-xl flex items-center justify-center cursor-pointer hover:border-primary`}
                              onClick={onImageUpload}
                            >
                              <div className="text-center">
                                <div className="h-[30px] w-[30px] rounded-3xl bg-primary flex items-center justify-center mx-auto">
                                  <PlusIcon
                                    className="text-white w-4 h-4"
                                    strokeWidth={2}
                                  />
                                </div>
                                <h5 className="text-sm text-primary-black font-mabry-medium mt-[5px]">
                                  Add image
                                </h5>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (500kb max)
                                </p>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (PNG/JPG/JPEG)
                                </p>
                              </div>
                            </div>

                            {imageList.map((image, index) => (
                              <div key={index} className="flex items-center">
                                <Image
                                  src={image["data_url"]}
                                  className="w-[130px] h-[130px] rounded-full"
                                  alt="Company Logo"
                                />
                                <Button
                                  className="bg-white border border-primary-black rounded-3xl text-primary-black shadow-none ml-5 font-mabry-medium hover:shadow-none hover:bg-primary-black hover:text-white"
                                  onClick={onImageRemove}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="form-group w-full">
                      <p className="text-sm text-[#575762] font-mabry-medium">
                        Aadhar Card
                      </p>
                      <ImageUploading
                        value={partner.aadharCardPhoto}
                        onChange={(imageList) =>
                          handleImageChange(imageList, index)
                        }
                        maxNumber={3}
                        dataURLKey="data_url"
                      >
                        {({ imageList, onImageUpload, onImageRemove }) => (
                          <div className="mt-2 flex items-center gap-6">
                            <div
                              className={`${
                                imageList.length === 0 ? "block" : "hidden"
                              } w-[130px] h-[130px] border-dashed border border-[#C1C1CD] rounded-xl flex items-center justify-center cursor-pointer hover:border-primary`}
                              onClick={onImageUpload}
                            >
                              <div className="text-center">
                                <div className="h-[30px] w-[30px] rounded-3xl bg-primary flex items-center justify-center mx-auto">
                                  <PlusIcon
                                    className="text-white w-4 h-4"
                                    strokeWidth={2}
                                  />
                                </div>
                                <h5 className="text-sm text-primary-black font-mabry-medium mt-[5px]">
                                  Add image
                                </h5>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (500kb max)
                                </p>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (PNG/JPG/JPEG)
                                </p>
                              </div>
                            </div>

                            {imageList.map((image, index) => (
                              <div key={index} className="flex items-center">
                                <Image
                                  src={image["data_url"]}
                                  className="w-[130px] h-[130px] rounded-full"
                                  alt="Company Logo"
                                />
                                <Button
                                  className="bg-white border border-primary-black rounded-3xl text-primary-black shadow-none ml-5 font-mabry-medium hover:shadow-none hover:bg-primary-black hover:text-white"
                                  onClick={onImageRemove}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                    <div className="form-group w-full">
                      <p className="text-sm text-[#575762] font-mabry-medium">
                        Additional Docs
                      </p>
                      <ImageUploading
                        value={partner.additionalDocs}
                        onChange={(imageList) =>
                          handleImageChange(imageList, index)
                        }
                        maxNumber={3}
                        dataURLKey="data_url"
                      >
                        {({ imageList, onImageUpload, onImageRemove }) => (
                          <div className="mt-2 flex items-center gap-6">
                            <div
                              className={`${
                                imageList.length === 0 ? "block" : "hidden"
                              } w-[130px] h-[130px] border-dashed border border-[#C1C1CD] rounded-xl flex items-center justify-center cursor-pointer hover:border-primary`}
                              onClick={onImageUpload}
                            >
                              <div className="text-center">
                                <div className="h-[30px] w-[30px] rounded-3xl bg-primary flex items-center justify-center mx-auto">
                                  <PlusIcon
                                    className="text-white w-4 h-4"
                                    strokeWidth={2}
                                  />
                                </div>
                                <h5 className="text-sm text-primary-black font-mabry-medium mt-[5px]">
                                  Add image
                                </h5>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (500kb max)
                                </p>
                                <p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
                                  (PNG/JPG/JPEG)
                                </p>
                              </div>
                            </div>

                            {imageList.map((image, index) => (
                              <div key={index} className="flex items-center">
                                <Image
                                  src={image["data_url"]}
                                  className="w-[130px] h-[130px] rounded-full"
                                  alt="Company Logo"
                                />
                                <Button
                                  className="bg-white border border-primary-black rounded-3xl text-primary-black shadow-none ml-5 font-mabry-medium hover:shadow-none hover:bg-primary-black hover:text-white"
                                  onClick={onImageRemove}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default PartnerDetails;
