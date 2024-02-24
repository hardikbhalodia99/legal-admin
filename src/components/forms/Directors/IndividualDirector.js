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

const IndividualDirector = ({
	formType,
	directorsDetails,
	index,
	faceName
}) => {
	const [currentDirectorDetails, setCurrentDirectorDetails] = useState(directorsDetails ? directorsDetails : {});
	console.log("%c 🍤 directorsDetails", "color:#f5ce50", directorsDetails);
  const { authToken, authUser } = useContext(AuthContext) 
	const [loading,setLoading] = useState(false)

	const [directorImage,setDirectorImage] = useState(directorsDetails && directorsDetails.documents && directorsDetails.documents.director_image  ? {link : directorsDetails.documents.director_image} : null);
	const [directorPan,setDirectorPan] = useState(directorsDetails && directorsDetails.documents && directorsDetails.documents.director_pan  ? {link : directorsDetails.documents.director_pan} : null);
	const [directorIdProof,setDirectorIdProof] = useState(directorsDetails && directorsDetails.documents && directorsDetails.documents.director_id_proof  ? {link : directorsDetails.documents.director_id_proof} : null);
	const [directorResidence,setDirectorResidence] = useState(directorsDetails && directorsDetails.documents && directorsDetails.documents.director_residence_proof  ? {link : directorsDetails.documents.director_residence_proof} : null);
	const [directorAadhar,setDirectorAadhar] = useState(directorsDetails && directorsDetails.documents && directorsDetails.documents.director_aadhar_card  ? {link : directorsDetails.documents.director_aadhar_card} : null);
	const [directorAdditional,setDirectorAdditional] = useState(directorsDetails && directorsDetails.documents && directorsDetails.documents.director_additional_docs  ? {link : directorsDetails.documents.director_additional_docs} : null);

	const [directorImageLoading,setDirectorImageLoading] = useState(false);
	const [directorPanLoading,setDirectorPanLoading] = useState(false);
	const [directorIdProofLoading,setDirectorIdProofLoading] = useState(false);
	const [directorResidenceLoading,setDirectorResidenceLoading] = useState(false);
	const [directorAadharLoading,setDirectorAadharLoading] = useState(false);
	const [directorAdditionalLoading,setDirectorAdditionalLoading] = useState(false);

	async function handleSubmit(){
		try{
		
      if(!currentDirectorDetails.director_name || currentDirectorDetails.director_name.trim() === ""){
        toast.error("Please enter a valid name")
        return
      }else if(!currentDirectorDetails.director_email || currentDirectorDetails.director_email.trim() === ""){
        toast.error("Please enter a valid email")
        return
      }else if(!validateEmail(currentDirectorDetails.director_email)){
        toast.error("Please enter a valid email")
        return
      }else if(!currentDirectorDetails.director_phone || currentDirectorDetails.director_phone.trim() === ""){
        toast.error("Please enter a valid phone")
        return
      }else if(!currentDirectorDetails.director_sharing_ratio || currentDirectorDetails.director_sharing_ratio.trim() === ""){
        toast.error("Please enter a valid sharing ratio")
        return
      }else if(!currentDirectorDetails.director_contribution || currentDirectorDetails.director_contribution.trim() === ""){
        toast.error("Please enter a valid contribution")
        return
      }else if(!currentDirectorDetails.current_occupation || currentDirectorDetails.current_occupation.trim() === ""){
        toast.error("Please enter a valid current occupation")
        return
      }else if(!currentDirectorDetails.citizenship || currentDirectorDetails.citizenship.trim() === ""){
        toast.error("Please enter a valid citizenship")
        return
      }else if(formType !== "opc" && (!currentDirectorDetails.din_number || currentDirectorDetails.din_number.trim() === "")){
        toast.error("Please enter a valid din number")
        return
      }else if(formType !== "opc" && (!currentDirectorDetails.duration_of_stay_number || currentDirectorDetails.duration_of_stay_number.trim() === "")){
        toast.error("Please enter a valid duration of stay")
        return
      }else if(formType !== "opc" && (!currentDirectorDetails.duration_of_stay_type || currentDirectorDetails.duration_of_stay_type.trim() === "")){
        toast.error("Please enter a valid duration of stay type")
        return
      }else if(!currentDirectorDetails.director_address || currentDirectorDetails.director_address.trim() === ""){
        toast.error("Please enter a valid address")
        return
      }else if(!currentDirectorDetails.director_city || currentDirectorDetails.director_city.trim() === ""){
        toast.error("Please enter a valid city")
        return
      }else if(!currentDirectorDetails.director_state || currentDirectorDetails.director_state.trim() === ""){
        toast.error("Please enter a valid state")
        return
      }else if(!currentDirectorDetails.director_pin_code || currentDirectorDetails.director_pin_code.trim() === ""){
        toast.error("Please enter a valid pincode")
        return
      }else if(!currentDirectorDetails.director_country || currentDirectorDetails.director_country.trim() === ""){
        toast.error("Please enter a valid country")
        return
      }

			setLoading(true)
      const payload = currentDirectorDetails

      const response = await axios.put("/api/forms/director",payload,{
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
          upload_location : "directors",
          image_slug : image_slug,
          content_type : document.type,
          image_base64 : document.base64,
					user_id : currentDirectorDetails.director_id
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
		{currentDirectorDetails && currentDirectorDetails.director_number ? (
			<>
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
										value={currentDirectorDetails.director_name}
										onChange={(value) => {
											let tempData = {...currentDirectorDetails}
											tempData.director_name = value
											setCurrentDirectorDetails(tempData)
										}}
									/>
								</div>
								<div className="block xl:flex lg:flex items-center mt-6 gap-5">
									<div className="form-group w-full">
										<InputField
											type="email"
											label="Email Address"
											value={currentDirectorDetails.director_email}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.director_email = value
												setCurrentDirectorDetails(tempData)
											}}
										/>
									</div>
									<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
										<InputField
											type="text"
											label="Phone"
											value={currentDirectorDetails.director_phone}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.director_phone = value
												setCurrentDirectorDetails(tempData)
											}}
										/>
									</div>
								</div>
								<div className="block xl:flex lg:flex items-center mt-6 gap-5">
									<div className="form-group w-full">
										<InputField
											type="text"
											label={"Profit Sharing Ratio"}
											value={currentDirectorDetails.director_sharing_ratio}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.director_sharing_ratio = value
												setCurrentDirectorDetails(tempData)
											}}
										/>
									</div>
									<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
										<InputField
											type="text"
											label={"Capital Contribution"}
											value={currentDirectorDetails.director_contribution}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.director_contribution = value
												setCurrentDirectorDetails(tempData)
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
											value={currentDirectorDetails.current_occupation}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.current_occupation = value
												setCurrentDirectorDetails(tempData)
											}}
										/>
									</div>
									<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
										<SelectField
											label="Citizenship Status"
											options={["Indian", "NRI", "Foreign Citizen"]}
											value={currentDirectorDetails.citizenship}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.citizenship = value
												setCurrentDirectorDetails(tempData)
											}}
										/>
									</div>
								</div>
								<div
									className={`${
										formType === "opc"
											? "hidden"
											: "block xl:flex lg:flex"
									} items-center mt-6 gap-5`}
								>
									<div className="form-group w-full">
										<InputField
											type="text"
											label="DIN Number"
											value={currentDirectorDetails.din_number}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.din_number = value
												setCurrentDirectorDetails(tempData)
											}}
										/>
									</div>
									<div className="form-group w-full">
										<InputField
											type="text"
											label="Duration of stay at present address given as address proof"
											value={currentDirectorDetails.duration_of_stay_number}
											onChange={(value) => {
												let tempData = {...currentDirectorDetails}
												tempData.duration_of_stay_number = value
												setCurrentDirectorDetails(tempData)
											}}
										/>
									</div>
								</div>

								<div className={`${
										formType === "opc"
											? "hidden"
											: "block xl:flex lg:flex"
									} items-center mt-6 gap-5`}>
									<div className="form-group w-full">
									<InputField
										type="text"
										label={"Stay Type"}
										value={currentDirectorDetails.duration_of_stay_type}
										onChange={(value) => {
											let tempData = {...currentDirectorDetails}
											tempData.duration_of_stay_type = value
											setCurrentDirectorDetails(tempData)
										}}
									/>
										</div>
										</div>
										<div className="block xl:flex lg:flex items-center mt-6 gap-5">
									<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
									<InputField
										type="text"
										label={"Address"}
										value={currentDirectorDetails.director_address}
										onChange={(value) => {
											let tempData = {...currentDirectorDetails}
											tempData.director_address = value
											setCurrentDirectorDetails(tempData)
										}}
									/>
									</div>
								</div>
								<div className="block xl:flex lg:flex items-center mt-6 gap-5">
									<div className="form-group w-full">
									<InputField
										type="text"
										label={"City"}
										value={currentDirectorDetails.director_city}
										onChange={(value) => {
											let tempData = {...currentDirectorDetails}
											tempData.director_city = value
											setCurrentDirectorDetails(tempData)
										}}
									/>
										</div>
									<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
									<InputField
										type="text"
										label={"State"}
										value={currentDirectorDetails.director_state}
										onChange={(value) => {
											let tempData = {...currentDirectorDetails}
											tempData.director_state = value
											setCurrentDirectorDetails(tempData)
										}}
									/>
									</div>
								</div>

								<div className="block xl:flex lg:flex items-center mt-6 gap-5">
									<div className="form-group w-full">
									<InputField
										type="text"
										label={"PinCode"}
										value={currentDirectorDetails.director_pin_code}
										onChange={(value) => {
											let tempData = {...currentDirectorDetails}
											tempData.director_pin_code = value
											setCurrentDirectorDetails(tempData)
										}}
									/>
										</div>
									<div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
									<InputField
										type="text"
										label={"Country"}
										value={currentDirectorDetails.director_country}
										onChange={(value) => {
											let tempData = {...currentDirectorDetails}
											tempData.director_country = value
											setCurrentDirectorDetails(tempData)
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
												document : directorImage,
												image_slug : "director_image",
												setDocument : setDirectorImage,
												setUploadLoading : setDirectorImageLoading
											})
										}} 
										uploadLoading={directorImageLoading}
										value={directorImage} 
										setValue={setDirectorImage}
										id={"director_image"+currentDirectorDetails.director_number}
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
												document : directorPan,
												image_slug : "director_pan",
												setDocument : setDirectorPan,
												setUploadLoading : setDirectorPanLoading
											})
										}} 
										uploadLoading={directorPanLoading}
										value={directorPan} 
										setValue={setDirectorPan}
										id={"director_pan"+currentDirectorDetails.director_number}
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
												document : directorIdProof,
												image_slug : "director_id_proof",
												setDocument : setDirectorIdProof,
												setUploadLoading : setDirectorIdProofLoading
											})
										}} 
										uploadLoading={directorIdProofLoading}
										value={directorIdProof} 
										setValue={setDirectorIdProof}
										id={"director_id_proof"+currentDirectorDetails.director_number}
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
												document : directorResidence,
												image_slug : "director_residence_proof",
												setDocument : setDirectorResidence,
												setUploadLoading : setDirectorResidenceLoading
											})
										}} 
										uploadLoading={directorResidenceLoading}
										value={directorResidence} 
										setValue={setDirectorResidence}
										id={"director_residence_proof"+currentDirectorDetails.director_number}
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
												document : directorAadhar,
												image_slug : "director_aadhar_card",
												setDocument : setDirectorAadhar,
												setUploadLoading : setDirectorAadharLoading
											})
										}} 
										uploadLoading={directorAadharLoading}
										value={directorAadhar} 
										setValue={setDirectorAadhar}
										id={"director_aadhar_card"+currentDirectorDetails.director_number}
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
												document : directorAdditional,
												image_slug : "director_additional_docs",
												setDocument : setDirectorAdditional,
												setUploadLoading : setDirectorAdditionalLoading
											})
										}} 
										uploadLoading={directorAdditionalLoading}
										value={directorAdditional} 
										setValue={setDirectorAdditional}
										id={"director_additional_docs"+currentDirectorDetails.director_number}
									/>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</>
		) : null}
		</>
	);
};

export default IndividualDirector;
