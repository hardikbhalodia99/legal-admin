"use client";
import { useContext, useState } from "react";
import ImageUploading from "react-images-uploading";
import Image from "next/image";
import { Card, CardBody } from "@/src/components/core/mui-tailwind";
import InputField from "@/src/components/core/input";
import SelectField from "@/src/components/core/select";
import {PlusIcon} from "@heroicons/react/24/outline";
import Button from "../../core/button";
import { toast } from "react-toastify";
import axios from "axios";
import { validateEmail } from "@/src/utils";
import { AuthContext } from "@/src/lib/auth/appwrite/useAuthUser";
import { InputFile } from "../../core/InputFile";

const IndividualNominee = ({
	formType,
	nomineeDetails,
	index,
	faceName
}) => {
	const [currentNomineeDetails, setCurrentNomineeDetails] = useState(nomineeDetails ? nomineeDetails : {});
	console.log("%c 🥟 currentNomineeDetails", "color:#ffdd4d", currentNomineeDetails.nominee_id);
  const { authToken, authUser } = useContext(AuthContext) 
	const [loading,setLoading] = useState(false)

	const [nomineeImage,setNomineeImage] = useState(nomineeDetails && nomineeDetails.documents && nomineeDetails.documents.nominee_image  ? {link : nomineeDetails.documents.nominee_image} : null);
	const [nomineePan,setNomineePan] = useState(nomineeDetails && nomineeDetails.documents && nomineeDetails.documents.nominee_pan  ? {link : nomineeDetails.documents.nominee_pan} : null);
	const [nomineeIdProof,setNomineeIdProof] = useState(nomineeDetails && nomineeDetails.documents && nomineeDetails.documents.nominee_id_proof  ? {link : nomineeDetails.documents.nominee_id_proof} : null);
	const [nomineeResidence,setNomineeResidence] = useState(nomineeDetails && nomineeDetails.documents && nomineeDetails.documents.nominee_address_proof  ? {link : nomineeDetails.documents.nominee_address_proof} : null);
	const [nomineeAadhar,setNomineeAadhar] = useState(nomineeDetails && nomineeDetails.documents && nomineeDetails.documents.nominee_aadhar_card  ? {link : nomineeDetails.documents.nominee_aadhar_card} : null);
	const [nomineeAdditional,setNomineeAdditional] = useState(nomineeDetails && nomineeDetails.documents && nomineeDetails.documents.nominee_additional_docs  ? {link : nomineeDetails.documents.nominee_additional_docs} : null);

	const [nomineeImageLoading,setNomineeImageLoading] = useState(false);
	const [nomineePanLoading,setNomineePanLoading] = useState(false);
	const [nomineeIdProofLoading,setNomineeIdProofLoading] = useState(false);
	const [nomineeResidenceLoading,setNomineeResidenceLoading] = useState(false);
	const [nomineeAadharLoading,setNomineeAadharLoading] = useState(false);
	const [nomineeAdditionalLoading,setNomineeAdditionalLoading] = useState(false);

	async function handleSubmit(){
		try{
		
      if(!currentNomineeDetails.nominee_name || currentNomineeDetails.nominee_name.trim() === ""){
        toast.error("Please enter a valid name")
        return
      }else if(!currentNomineeDetails.nominee_email || currentNomineeDetails.nominee_email.trim() === ""){
        toast.error("Please enter a valid email")
        return
      }else if(!validateEmail(currentNomineeDetails.nominee_email)){
        toast.error("Please enter a valid email")
        return
      }else if(!currentNomineeDetails.nominee_phone || currentNomineeDetails.nominee_phone.trim() === ""){
        toast.error("Please enter a valid phone")
        return
      }else if(!currentNomineeDetails.current_occupation || currentNomineeDetails.current_occupation.trim() === ""){
        toast.error("Please enter a valid current occupation")
        return
      }else if(!currentNomineeDetails.citizenship || currentNomineeDetails.citizenship.trim() === ""){
        toast.error("Please enter a valid citizenship")
        return
      }else if(!currentNomineeDetails.nominee_address || currentNomineeDetails.nominee_address.trim() === ""){
        toast.error("Please enter a valid address")
        return
      }else if(!currentNomineeDetails.nominee_designation || currentNomineeDetails.nominee_designation.trim() === ""){
        toast.error("Please enter a valid nominee designation")
        return
      }else if(!currentNomineeDetails.nominee_city || currentNomineeDetails.nominee_city.trim() === ""){
        toast.error("Please enter a valid city")
        return
      }else if(!currentNomineeDetails.nominee_state || currentNomineeDetails.nominee_state.trim() === ""){
        toast.error("Please enter a valid state")
        return
      }else if(!currentNomineeDetails.nominee_pin_code || currentNomineeDetails.nominee_pin_code.trim() === ""){
        toast.error("Please enter a valid pincode")
        return
      }else if(!currentNomineeDetails.nominee_country || currentNomineeDetails.nominee_country.trim() === ""){
        toast.error("Please enter a valid country")
        return
      }

			setLoading(true)
      const payload = currentNomineeDetails

      const response = await axios.put("/api/forms/nominee",payload,{
				headers : {
					Authorization : authToken
        }
      })
			console.log("%c 🍉 response", "color:#4fff4B", response.data);

      

      toast.success(`Director ${index+1} Details have been saved successfully!`)
			setLoading(false)
    }catch(error){
      console.log("%c 🌭 error", "color:#b03734", error);
			setLoading(false)
    }
	}

	async function uploadDocument({document,setDocument,image_slug,setUploadLoading}){
    if(document && document.base64){
      try{

        setUploadLoading(true)
        const payload = {
          upload_location : "nominees",
          image_slug : image_slug,
          content_type : document.type,
          image_base64 : document.base64,
					user_id : currentNomineeDetails.nominee_id
        }
  
        const response = await axios.post("/api/forms/upload-document",payload,{
          headers : {
            Authorization : authToken
          }
        })
  
        setDocument({
          link : response.data.url
        })
  
        toast.success("Document have been uploaded successfully!")
        setUploadLoading(false)
      }catch(error){
        console.log("%c 🌭 error", "color:#b03734", error);
        setUploadLoading(false)
      }
    }else{
      toast.error("Failed to upload document.")
    }
  }

	return (
		<>
		{currentNomineeDetails && currentNomineeDetails.nominee_number ? (<>
			<Card className="shadow-md border border-bright-gray rounded-md mb-4">
				<CardBody className="p-0">
					<div className="border-b border-b-[#DDDDE6] py-3 px-5 flex items-center justify-between">
						<h2 className="text-[18px] font-mabry-bold text-black">
							{faceName}{" "}
								{index + 1}
						</h2>
						
					</div>
				
						<div className="p-5 xl:p-8 lg:p-8 md:p-5">
							<div className="form-group">
								<InputField
									type="text"
									label={"Name"}
									value={currentNomineeDetails.nominee_name}
									onChange={(value) => {
										let tempData = {...currentNomineeDetails}
										tempData.nominee_name = value
										setCurrentNomineeDetails(tempData)
									}}
								/>
							</div>
							<div className="block xl:flex lg:flex items-center mt-6 gap-5">
								<div className="form-group w-full">
									<InputField
										type="email"
										label="Email Address"
										value={currentNomineeDetails.nominee_email}
										onChange={(value) => {
											let tempData = {...currentNomineeDetails}
											tempData.nominee_email = value
											setCurrentNomineeDetails(tempData)
										}}
									/>
								</div>
								<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
									<InputField
										type="text"
										label="Phone"
										value={currentNomineeDetails.nominee_phone}
										onChange={(value) => {
											let tempData = {...currentNomineeDetails}
											tempData.nominee_phone = value
											setCurrentNomineeDetails(tempData)
										}}
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
										value={currentNomineeDetails.current_occupation}
										onChange={(value) => {
											let tempData = {...currentNomineeDetails}
											tempData.current_occupation = value
											setCurrentNomineeDetails(tempData)
										}}
									/>
								</div>
								<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
									<SelectField
										label="Citizenship Status"
										options={["Indian", "NRI", "Foreign Citizen"]}
										value={currentNomineeDetails.citizenship}
										onChange={(value) => {
											let tempData = {...currentNomineeDetails}
											tempData.citizenship = value
											setCurrentNomineeDetails(tempData)
										}}
									/>
								</div>
							</div>
				

				
									<div className="block xl:flex lg:flex items-center mt-6 gap-5">
								<div className="form-group w-full">
								<InputField
									type="text"
									label={"Address"}
									value={currentNomineeDetails.nominee_address}
									onChange={(value) => {
										let tempData = {...currentNomineeDetails}
										tempData.nominee_address = value
										setCurrentNomineeDetails(tempData)
									}}
								/>
								</div>
                <div className="form-group w-full">
								<InputField
									type="text"
									label={"Nominee Designation"}
									value={currentNomineeDetails.nominee_designation}
									onChange={(value) => {
										let tempData = {...currentNomineeDetails}
										tempData.nominee_designation = value
										setCurrentNomineeDetails(tempData)
									}}
								/>
									</div>
							</div>
							<div className="block xl:flex lg:flex items-center mt-6 gap-5">
								<div className="form-group w-full">
								<InputField
									type="text"
									label={"City"}
									value={currentNomineeDetails.nominee_city}
									onChange={(value) => {
										let tempData = {...currentNomineeDetails}
										tempData.nominee_city = value
										setCurrentNomineeDetails(tempData)
									}}
								/>
									</div>
								<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
								<InputField
									type="text"
									label={"State"}
									value={currentNomineeDetails.nominee_state}
									onChange={(value) => {
										let tempData = {...currentNomineeDetails}
										tempData.nominee_state = value
										setCurrentNomineeDetails(tempData)
									}}
								/>
								</div>
							</div>

							<div className="block xl:flex lg:flex items-center mt-6 gap-5">
								<div className="form-group w-full">
								<InputField
									type="text"
									label={"PinCode"}
									value={currentNomineeDetails.nominee_pin_code}
									onChange={(value) => {
										let tempData = {...currentNomineeDetails}
										tempData.nominee_pin_code = value
										setCurrentNomineeDetails(tempData)
									}}
								/>
									</div>
								<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
								<InputField
									type="text"
									label={"Country"}
									value={currentNomineeDetails.nominee_country}
									onChange={(value) => {
										let tempData = {...currentNomineeDetails}
										tempData.nominee_country = value
										setCurrentNomineeDetails(tempData)
									}}
								/>
								</div>
							</div>

						
							
							<Button 
								size="medium"
								label={"Save Details"}
								onClick={handleSubmit}
								className={"mt-5 flex justify-end"}
								loading={loading}
							/>
						
						</div>
				</CardBody>
			</Card>
			<Card className="shadow-md border border-bright-gray rounded-md mb-4">
					<CardBody className="p-0">
						<div className="mt-6 p-5 xl:p-8 lg:p-8 md:p-5">
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
									<InputFile 
										buttonLabel={"Upload"} 
										onButtonClick={() => {
											uploadDocument({
												document : nomineeImage,
												image_slug : "nominee_image",
												setDocument : setNomineeImage,
												setUploadLoading : setNomineeImageLoading
											})
										}} 
										uploadLoading={nomineeImageLoading}
										value={nomineeImage} 
										setValue={setNomineeImage}
										id={"nominee_image"+currentNomineeDetails.nominee_number}
									/>
								</div>
								<div className="form-group w-full">
									<p className="text-sm text-[#575762] font-mabry-medium">
										PAN card
									</p>
									<InputFile 
										buttonLabel={"Upload"} 
										onButtonClick={() => {
											uploadDocument({
												document : nomineePan,
												image_slug : "nominee_pan",
												setDocument : setNomineePan,
												setUploadLoading : setNomineePanLoading
											})
										}} 
										uploadLoading={nomineePanLoading}
										value={nomineePan} 
										setValue={setNomineePan}
										id={"nominee_pan"+currentNomineeDetails.nominee_number}
									/>
								</div>
							</div>
							<div className="flex items-center mt-6">
								<div className="form-group w-full">
									<p className="text-sm text-[#575762] font-mabry-medium">
										ID Proof: Passport/Driving License/Voter ID Card
									</p>
									<InputFile 
										buttonLabel={"Upload"} 
										onButtonClick={() => {
											uploadDocument({
												document : nomineeIdProof,
												image_slug : "nominee_id_proof",
												setDocument : setNomineeIdProof,
												setUploadLoading : setNomineeIdProofLoading
											})
										}} 
										uploadLoading={nomineeIdProofLoading}
										value={nomineeIdProof} 
										setValue={setNomineeIdProof}
										id={"nominee_id_proof"+currentNomineeDetails.nominee_number}
									/>
								</div>
								<div className="form-group w-full">
									<p className="text-sm text-[#575762] font-mabry-medium">
										Proof of Residence: Bank Statement/Electricity or
										Telephone Bill
									</p>
									<InputFile 
										buttonLabel={"Upload"} 
										onButtonClick={() => {
											uploadDocument({
												document : nomineeResidence,
												image_slug : "nominee_address_proof",
												setDocument : setNomineeResidence,
												setUploadLoading : setNomineeResidenceLoading
											})
										}} 
										uploadLoading={nomineeResidenceLoading}
										value={nomineeResidence} 
										setValue={setNomineeResidence}
										id={"nominee_address_proof"+currentNomineeDetails.nominee_number}
									/>
								</div>
							</div>
							<div className="flex items-center mt-6">
								<div className="form-group w-full">
									<p className="text-sm text-[#575762] font-mabry-medium">
										Aadhar Card
									</p>
									<InputFile 
										buttonLabel={"Upload"} 
										onButtonClick={() => {
											uploadDocument({
												document : nomineeAadhar,
												image_slug : "nominee_aadhar_card",
												setDocument : setNomineeAadhar,
												setUploadLoading : setNomineeAadharLoading
											})
										}} 
										uploadLoading={nomineeAadharLoading}
										value={nomineeAadhar} 
										setValue={setNomineeAadhar}
										id={"nominee_aadhar_card"+currentNomineeDetails.nominee_number}
									/>
								</div>
								<div className="form-group w-full">
									<p className="text-sm text-[#575762] font-mabry-medium">
										Additional Docs
									</p>
									<InputFile 
										buttonLabel={"Upload"} 
										onButtonClick={() => {
											uploadDocument({
												document : nomineeAdditional,
												image_slug : "nominee_additional_docs",
												setDocument : setNomineeAdditional,
												setUploadLoading : setNomineeAdditionalLoading
											})
										}} 
										uploadLoading={nomineeAdditionalLoading}
										value={nomineeAdditional} 
										setValue={setNomineeAdditional}
										id={"nominee_additional_docs"+currentNomineeDetails.nominee_number}
									/>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
		
		</>) : null}
		</>
	);
};

export default IndividualNominee;
