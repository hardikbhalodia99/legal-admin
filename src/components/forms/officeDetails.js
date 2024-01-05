"use client";
import { useState } from "react";
import ImageUploading from "react-images-uploading";

/* NEXTJS IMPORTS */
import Image from "next/image";

/* MATERIAL UI COMPONENTS */
import { Card, CardBody, Button } from "@/src/components/core/mui-tailwind";
import InputField from "@/src/components/core/input";

/* ICONS */
import { PlusIcon } from "@heroicons/react/24/outline";

const OfficeDetails = () => {
  const [ownerName, setOwnerName] = useState("Darsh Shah");
  const [officeAddress, setOfficeAddress] = useState(
    "TF 10/11, The Petal Trillium, Vasna Bhaili Road"
  );
  const [city, setCity] = useState("Vadodara");
  const [state, setState] = useState("Gujarat");
  const [country, setCountry] = useState("India");
  const [pinCode, setPinCode] = useState("390001");
  const [addressProof, setAddressProof] = useState([]);
  const [stationName, setStationName] = useState("Vasna Police Station");
  const [stationAddress, setStationAddress] = useState(
    "75Q3+85P, Tandalja Rd, Patrakar Colony, Tandalja, Vadodara, Gujarat, 390012"
  );

  return (
    <Card className="shadow-md border border-bright-gray rounded-md">
      <CardBody className="p-5 xl:p-8 lg:p-8 md:p-5">
        <form>
          <div className="form-group">
            <InputField
              type="text"
              label="Name of the owner or lessee of the premises"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
            />
          </div>
          <div className="form-group mt-6">
            <InputField
              type="text"
              label="Office Address"
              value={officeAddress}
              onChange={(e) => setOfficeAddress(e.target.value)}
            />
          </div>
          <div className="block xl:flex lg:flex items-center gap-5 mt-6">
            <div className="form-group w-full">
              <InputField
                type="text"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
              <InputField
                type="text"
                label="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div className="block xl:flex lg:flex items-center gap-5 mt-6">
            <div className="form-group w-full">
              <InputField
                type="text"
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
              <InputField
                type="text"
                label="Pin Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-6">
            <p className="font-mabry-bold text-base text-primary-black">
              Address Proof of office{" "}
              <span className="font-mabry-regular text-[13px] text-[#575762]">
                (Latest Electricity/Mobile Bill)
              </span>
            </p>
            <ImageUploading
              value={addressProof}
              onChange={(imageList) => setAddressProof(imageList)}
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
                    <div>
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
          <div className="mt-6">
            <div className="mb-6 bg-[#F5F5FA] rounded-md py-2 px-4">
              <p className="font-mabry-bold text-base text-primary-black">
                Police Details
              </p>
              <p className="font-mabry-regular text-sm text-[#575762]">
                Enter details of the nearest police station to your office
              </p>
            </div>
            <div className="form-group">
              <InputField
                type="text"
                label="Police Station Name"
                value={stationName}
                onChange={(e) => setStationName(e.target.value)}
              />
            </div>
            <div className="form-group mt-6">
              <InputField
                type="text"
                label="Police Station Address"
                value={stationAddress}
                onChange={(e) => setStationAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            <Button className="shadow-none font-mabry-medium text-sm normal-case font-normal hover:shadow-none border-2 border-black hover:bg-white hover:text-black">
              Save Details
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default OfficeDetails;
