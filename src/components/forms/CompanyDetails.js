"use client";
import { useContext, useState } from "react";

/* MATERIAL UI COMPONENTS */
import { Card, CardBody } from "@/src/components/core/mui-tailwind";
import InputField from "@/src/components/core/input";
import TextareaField from "@/src/components/core/textarea";
import Button from "../core/button";
import { toast } from "react-toastify";
import { AuthContext } from "@/src/lib/auth/appwrite/useAuthUser";
import { validateEmail } from "@/src/utils";
import axios from "axios";

const CompanyDetails = ({ clientId, companyDetails, setCompanyDetails }) => {

  /* COMPANY DETAILS VARIABLES */
  const [companyEmail, setCompanyEmail] = useState(companyDetails && companyDetails.company_email ? companyDetails.company_email : "");
  const [nameOne, setNameOne] = useState(companyDetails && companyDetails.company_name_priority_1 ? companyDetails.company_name_priority_1 : "");
  const [nameTwo, setNameTwo] = useState(companyDetails && companyDetails.company_name_priority_2 ? companyDetails.company_name_priority_2 : "");
  const [nameThree, setNameThree] = useState(companyDetails && companyDetails.company_name_priority_3 ? companyDetails.company_name_priority_3 : "");
  const [nameFour, setNameFour] = useState(companyDetails && companyDetails.company_name_priority_4 ? companyDetails.company_name_priority_4 : "");
  const [companyObjective, setCompanyObjective] = useState(companyDetails && companyDetails.company_objective ? companyDetails.company_objective : "");
  const [loading, setLoading] = useState(false)
  const { authToken, authUser } = useContext(AuthContext)
  
  async function handleSubmit() {
    try {
      console.log("%c 🍰 companyEmail", "color:#42b983", companyEmail);
      console.log("%c 🌭 nameOne", "color:#b03734", nameOne);
      console.log("%c 🍎 nameTwo", "color:#b03734", nameTwo);
      console.log("%c 🥔 nameThree", "color:#93c0a4", nameThree);
      console.log("%c 🥥 nameFour", "color:#e41a6a", nameFour);
      console.log("%c 🍤 companyObjective", "color:#7f2b82", companyObjective);
      console.log("authToken", authToken)
      if (!companyEmail || companyEmail.trim() === "") {
        toast.error("Please enter a valid email")
        return
      } else if (!validateEmail(companyEmail)) {
        toast.error("Please enter a valid email")
        return
      } else if (!nameOne || nameOne.trim() === "") {
        toast.error("Please enter priority 1 company name")
        return
      } else if (!nameTwo || nameTwo.trim() === "") {
        toast.error("Please enter priority 2 company name")
        return
      } else if (!nameThree || nameThree.trim() === "") {
        toast.error("Please enter priority 3 company name")
        return
      } else if (!nameFour || nameFour.trim() === "") {
        toast.error("Please enter priority 4 company name")
        return
      } else if (!companyObjective || companyObjective.trim() === "") {
        toast.error("Please enter company objective")
        return
      }
      setLoading(true);
      console.log("clientId",clientId)
      const payload = {
        company_details: {
          company_email: companyEmail,
          company_name_priority_1: nameOne,
          company_name_priority_2: nameTwo,
          company_name_priority_3: nameThree,
          company_name_priority_4: nameFour,
          company_objective: companyObjective
        },
        client_id: clientId
      }

      const response = await axios.put("/api/form/company-details", payload, {
        headers: {
          Authorization: authToken
        }
      })

      setCompanyDetails({
        company_email: companyEmail,
        company_name_priority_1: nameOne,
        company_name_priority_2: nameTwo,
        company_name_priority_3: nameThree,
        company_name_priority_4: nameFour,
        company_objective: companyObjective
      })

      toast.success("Company Details have been saved successfully!")
      setLoading(false)
    } catch (error) {
      console.log("%c 🌭 error", "color:#b03734", error);
      toast.error("Server Error! Please try again later")
      setLoading(false)
    }
  }

  return (
    <Card className="shadow-md border border-bright-gray rounded-md">
      <CardBody className="p-5 xl:p-8 lg:p-8 md:p-5">
        <form>
          <div className="form-group">
            <InputField
              type="email"
              label="Company Email Address"
              value={companyEmail}
              onChange={(value) => setCompanyEmail(value)}
            />
          </div>
          <div className="mt-6">
            <div className="mb-6">
              <p className="font-mabry-bold text-base text-primary-black">
                Four Company Names in the order of priority
              </p>
              <p className="font-mabry-regular text-sm text-[#575762]">
                Only one unique name will be allocated depending upon availaibility of name
              </p>
            </div>
            <div className="block xl:flex lg:flex items-center gap-5">
              <div className="form-group w-full">
                <InputField
                  type="text"
                  label={"Priority Name 1"}
                  value={nameOne}
                  onChange={(value) => setNameOne(value)}
                />
              </div>
              <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                <InputField
                  type="text"
                  label={"Priority Name 2"}
                  value={nameTwo}
                  onChange={(value) => setNameTwo(value)}
                />
              </div>
            </div>
            <div className="block xl:flex lg:flex items-center gap-5 mt-6">
              <div className="form-group w-full">
                <InputField
                  type="text"
                  label={"Priority Name 3"}
                  value={nameThree}
                  onChange={(value) => setNameThree(value)}
                />
              </div>
              <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                <InputField
                  type="text"
                  label={"Priority Name 4"}
                  value={nameFour}
                  onChange={(value) => setNameFour(value)}
                />
              </div>
            </div>
            <div className="form-group mt-6">
              <TextareaField
                type="text"
                label={"Main objective of the company"}
                value={companyObjective}
                onChange={(e) => setCompanyObjective(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-end mt-6">
            <Button
              type="primary"
              label="Save Details"
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default CompanyDetails;