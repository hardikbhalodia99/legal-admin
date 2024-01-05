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
import {
  PlusIcon
} from "@heroicons/react/24/outline";

const NomineeDetails = (props) => {
  const [nomineeName, setNomineeName] = useState("Darsh Shah");
  const [nomineeEmail, setNomineeEmail] = useState("darsh@roundtechsquare.com");
  const [nomineePhone, setNomineePhone] = useState("9574094129");
  const [currentOccupation, setCurrentOccupation] = useState("Business");
  const [citizenshipStatus, setCitizenshipStatus] = useState("Indian");
  const [nomineeAddress, setNomineeAddress] = useState("FF-6 Ankur Appartment, Umiya Nagar Duplex, Vadodara, 390024");
  const [designation, setDesignation] = useState("Business Partner");
  const [passportPhoto, setPassportPhoto] = useState([]);
  const [panCardPhoto, setPanCardPhoto] = useState([]);
  const [idProofPhoto, setIDProofPhoto] = useState([]);
  const [residenceProofPhoto, setResidenceProofPhoto] = useState([]);
  const [aadharCardPhoto, setAadharCardPhoto] = useState([]);
  const [additionalDocs, setAdditionalDocs] = useState([]);

  return (
    <Card className="shadow-md border border-bright-gray rounded-md mb-4">
      <CardBody className="p-0">
        <div className="border-b border-b-[#DDDDE6] py-3 px-5 flex items-center justify-between">
          <h2 className="text-[18px] font-mabry-bold text-black">
            Nominee Details
          </h2>
          <Button className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black py-1">
            Save Details
          </Button>
        </div>
        <form>
          <div className="p-5 xl:p-8 lg:p-8 md:p-5">
            <div className="block xl:flex lg:flex items-center gap-5">
              <div className="form-group w-full">
                <InputField
                  type="text"
                  label="Nominee Name"
                  value={nomineeName}
                  onChange={(e) => setNomineeName(e.target.value)}
                />
              </div>
              <div className="form-group w-full">
                <InputField
                  type="text"
                  label="Nominee Designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
            </div>
            <div className="block xl:flex lg:flex items-center mt-6 gap-5">
              <div className="form-group w-full">
                <InputField
                  type="email"
                  label="Email Address"
                  value={nomineeEmail}
                  onChange={(e) => setNomineeEmail(e.target.value)}
                />
              </div>
              <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                <InputField
                  type="text"
                  label="Phone"
                  value={nomineePhone}
                  onChange={(e) => setNomineePhone(e, index)}
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
                  value={currentOccupation}
                  onChange={(e) => setCurrentOccupation(e)}
                />
              </div>
              <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                <SelectField
                  label="Citizenship Status"
                  options={["Indian", "NRI", "Foreign Citizen"]}
                  value={citizenshipStatus}
                  onChange={(e) => setCitizenshipStatus(e)}
                />
              </div>
            </div>
            <div className="form-group mt-6">
              <InputField
                type="text"
                label="Address of nominee"
                value={nomineeAddress}
                onChange={(e) => setNomineeAddress(e.target.value)}
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
                    value={passportPhoto}
                    onChange={(imageList) =>
                      setPassportPhoto(imageList)
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
                    value={panCardPhoto}
                    onChange={(imageList) =>
                      setPanCardPhoto(imageList)
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
                    value={idProofPhoto}
                    onChange={(imageList) =>
                      setIDProofPhoto(imageList)
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
                    Proof of Residence: Bank Statement/Electricity or Telephone
                    Bill
                  </p>
                  <ImageUploading
                    value={residenceProofPhoto}
                    onChange={(imageList) =>
                      setResidenceProofPhoto(imageList)
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
                    value={aadharCardPhoto}
                    onChange={(imageList) =>
                      setAadharCardPhoto(imageList)
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
                    value={additionalDocs}
                    onChange={(imageList) =>
                      setAdditionalDocs(imageList)
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
  );
};

export default NomineeDetails;