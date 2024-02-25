"use client";
import { useState, useCallback, useContext } from "react";

/* NEXTJS IMPORTS */
import Image from "next/image";

/* MATERIAL UI COMPONENTS */
import { Card, CardBody } from "@/src/components/core/mui-tailwind";
import InputField from "@/src/components/core/input";

/* ICONS */
import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../core/button";
import { toast } from "react-toastify";
import axios from "axios";
import { InputFile } from "../core/InputFile";
import { AuthContext } from "@/src/lib/auth/appwrite/useAuthUser";

const OfficeDetails = ({ clientId, officeDetails, setOfficeDetails }) => {
  const [ownerName, setOwnerName] = useState(officeDetails && officeDetails.owner_name ? officeDetails.owner_name : "");
  const [officeAddress, setOfficeAddress] = useState(officeDetails && officeDetails.address ? officeDetails.address : "");
  const [city, setCity] = useState(officeDetails && officeDetails.city ? officeDetails.city : "");
  const [state, setState] = useState(officeDetails && officeDetails.state ? officeDetails.state : "");
  const [country, setCountry] = useState(officeDetails && officeDetails.country ? officeDetails.country : "");
  const [pinCode, setPinCode] = useState(officeDetails && officeDetails.pin_code ? officeDetails.pin_code : "");
  const [addressProof, setAddressProof] = useState(officeDetails && officeDetails.documents && officeDetails.documents.address_proof_link ? { link: officeDetails.documents.address_proof_link } : null);
  const [stationName, setStationName] = useState(officeDetails && officeDetails.police_station_name ? officeDetails.police_station_name : "");
  const [stationAddress, setStationAddress] = useState(officeDetails && officeDetails.police_station_address ? officeDetails.police_station_address : "");
  const [loading, setLoading] = useState(false)
  const [uploadLoading, setUploadLoading] = useState(false)
  const { authToken, authUser } = useContext(AuthContext)

  async function handleSubmit() {
    try {

      if (!ownerName || ownerName.trim() === "") {
        toast.error("Please enter a valid email")
        return
      } else if (!officeAddress || officeAddress.trim() === "") {
        toast.error("Please enter priority 1 company name")
        return
      } else if (!city || city.trim() === "") {
        toast.error("Please enter priority 2 company name")
        return
      } else if (!state || state.trim() === "") {
        toast.error("Please enter priority 3 company name")
        return
      } else if (!country || country.trim() === "") {
        toast.error("Please enter priority 4 company name")
        return
      } else if (!pinCode || pinCode.trim() === "") {
        toast.error("Please enter company objective")
        return
      } else if (!stationName || stationName.trim() === "") {
        toast.error("Please enter priority 4 company name")
        return
      } else if (!stationAddress || stationAddress.trim() === "") {
        toast.error("Please enter company objective")
        return
      }

      setLoading(true)
      const payload = {
        office_details: {
          owner_name: ownerName,
          address: officeAddress,
          city: city,
          state: state,
          country: country,
          pin_code: pinCode,
          police_station_name: stationName,
          police_station_address: stationAddress,
        },
        client_id: clientId
      }

      console.log("payload", payload)
      const response = await axios.put("/api/form/office-details", payload, {
        headers: {
          Authorization: authToken
        }
      })

      setOfficeDetails({
        owner_name: ownerName,
        address: officeAddress,
        city: city,
        state: state,
        country: country,
        pin_code: pinCode,
        police_station_name: stationName,
        police_station_address: stationAddress,
      })

      toast.success("Office Details have been saved successfully!")
      setLoading(false)
    } catch (error) {
      console.log("%c 🌭 error", "color:#b03734", error);
      setLoading(false)
    }
  }

  async function uploadDocument({ document, setDocument, image_slug }) {
    if (document && document.base64) {
      try {

        setUploadLoading(true)
        const payload = {
          upload_location: "company",
          image_slug: image_slug,
          content_type: document.type,
          image_base64: document.base64
        }

        const response = await axios.post("/api/form/upload-document", payload, {
          headers: {
            Authorization: authToken
          }
        })

        setDocument({
          link: response.data.url
        })

        toast.success("Document have been uploaded successfully!")
        setUploadLoading(false)
      } catch (error) {
        console.log("%c 🌭 error", "color:#b03734", error);
        setUploadLoading(false)
      }
    } else {
      toast.error("Failed to upload document.")
    }
  }

  return (
    <Card className="shadow-md border border-bright-gray rounded-md">
      <CardBody className="p-5 xl:p-8 lg:p-8 md:p-5">
        <form>
          <div className="form-group">
            <InputField
              type="text"
              label="Name of the owner or lessee of the premises"
              value={ownerName}
              onChange={(value) => setOwnerName(value)}
            />
          </div>
          <div className="form-group mt-6">
            <InputField
              type="text"
              label="Office Address"
              value={officeAddress}
              onChange={(value) => setOfficeAddress(value)}
            />
          </div>
          <div className="block xl:flex lg:flex items-center gap-5 mt-6">
            <div className="form-group w-full">
              <InputField
                type="text"
                label="City"
                value={city}
                onChange={(value) => setCity(value)}
              />
            </div>
            <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
              <InputField
                type="text"
                label="State"
                value={state}
                onChange={(value) => setState(value)}
              />
            </div>
          </div>
          <div className="block xl:flex lg:flex items-center gap-5 mt-6">
            <div className="form-group w-full">
              <InputField
                type="text"
                label="Country"
                value={country}
                onChange={(value) => setCountry(value)}
              />
            </div>
            <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
              <InputField
                type="text"
                label="Pin Code"
                value={pinCode}
                onChange={(value) => setPinCode(value)}
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
            <InputFile
              buttonLabel={"Upload"}
              onButtonClick={() => {
                uploadDocument({
                  document: addressProof,
                  image_slug: "address_proof_link",
                  setDocument: setAddressProof
                })
              }}
              uploadLoading={uploadLoading}
              value={addressProof}
              setValue={setAddressProof}
            />

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
                onChange={(value) => setStationName(value)}
              />
            </div>
            <div className="form-group mt-6">
              <InputField
                type="text"
                label="Police Station Address"
                value={stationAddress}
                onChange={(value) => setStationAddress(value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            <Button
              label={"Save Details"}
              onClick={handleSubmit}
              loading={loading}
            />

          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default OfficeDetails;
