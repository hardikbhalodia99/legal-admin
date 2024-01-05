"use client";
import { useState } from "react";

/* MATERIAL UI COMPONENTS */
import { Card, CardBody, Button } from "@/src/components/core/mui-tailwind";
import InputField from "@/src/components/core/input";
import TextareaField from "@/src/components/core/textarea";
 
const CompanyDetails = (props) => {
  /* COMPANY DETAILS VARIABLES */
  const [companyEmail, setCompanyEmail] = useState("shahdarsh364@gmail.com");
  const [nameOne, setNameOne] = useState("SwiftEdge Partners LLP");
  const [nameTwo, setNameTwo] = useState("NexusWave Solutions LLP");
  const [nameThree, setNameThree] = useState("StellarVista Ventures LLP");
  const [nameFour, setNameFour] = useState("QuantumHorizon Group LLP");
  const [companyObjective, setCompanyObjective] = useState(
    "At TrendAura Creations LLP, we are more than just a clothing company – we are the embodiment of style, comfort, and creativity. Established with a passion for fashion, our LLP is dedicated to crafting clothing that reflects individuality, empowers confidence, and sets trends in the ever-evolving world of fashion."
  );

  return (
    <Card className="shadow-md border border-bright-gray rounded-md">
      <CardBody className="p-5 xl:p-8 lg:p-8 md:p-5">
        <form>
          <div className="form-group">
            <InputField
              type="email"
              label="Company Email Address"
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <div className="mb-6">
              <p className="font-mabry-bold text-base text-primary-black">
                Four Company Names in the order of priority
              </p>
              <p className="font-mabry-regular text-sm text-[#575762]">
                {props.formType === "private-limited-registration"
                  ? "Only one unique name will be allocated depending upon availaibility of name"
                  : props.formType === "one-person-company"
                  ? "Only one unique name will be allocated depending upon availaibility of name"
                  : "Only one unique name will be allocated for Incorporation depending upon availaibility of name"}
              </p>
            </div>
            <div className="block xl:flex lg:flex items-center gap-5">
              <div className="form-group w-full">
                <InputField
                  type="text"
                  label={
                    props.formType === "private-limited-registration"
                      ? "Priority Name 1"
                      : props.formType === "one-person-company"
                      ? "OPC Name 1"
                      : "LLP Name 1"
                  }
                  value={nameOne}
                  onChange={(e) => setNameOne(e.target.value)}
                />
              </div>
              <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                <InputField
                  type="text"
                  label={
                    props.formType === "private-limited-registration"
                      ? "Priority Name 2"
                      : props.formType === "one-person-company"
                      ? "OPC Name 2"
                      : "LLP Name 2"
                  }
                  value={nameTwo}
                  onChange={(e) => setNameTwo(e.target.value)}
                />
              </div>
            </div>
            <div className="block xl:flex lg:flex items-center gap-5 mt-6">
              <div className="form-group w-full">
                <InputField
                  type="text"
                  label={
                    props.formType === "private-limited-registration"
                      ? "Priority Name 3"
                      : props.formType === "one-person-company"
                      ? "OPC Name 3"
                      : "LLP Name 3"
                  }
                  value={nameThree}
                  onChange={(e) => setNameThree(e.target.value)}
                />
              </div>
              <div className="form-group w-full mt-5 xl:mt-0 lg:mt-0">
                <InputField
                  type="text"
                  label={
                    props.formType === "private-limited-registration"
                      ? "Priority Name 4"
                      : props.formType === "one-person-company"
                      ? "OPC Name 4"
                      : "LLP Name 4"
                  }
                  value={nameFour}
                  onChange={(e) => setNameFour(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group mt-6">
              <TextareaField
                type="text"
                label={
                  props.formType === "private-limited-registration"
                    ? "Main objective of the company"
                    : props.formType === "one-person-company"
                    ? "Main objective of the OPC"
                    : "Main objective of the LLP"
                }
                value={companyObjective}
                onChange={(e) => setCompanyObjective(e.target.value)}
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

export default CompanyDetails;