"use client"
import { useEffect, useState } from "react";

/* NEXTJS IMPORTS */
import Image from "next/image";

/* MATERIAL TAILWIND COMPONENTS */
import { Button, Card, CardBody } from "@/src/components/core/mui-tailwind";
import InputField from "@/src/components/core/input";

/* USER DEFINED COMPONENTS */
import LoadingSpinner from "@/src/components/others/loading-spinner";

/* IMAGES */
import Logo from "@/public/images/logos/dummy-logo.png";
import RazorpayLogo from "@/public/images/logos/razorpay-logo.svg";


/* ICONS */
import CounterButtons from "../../core/counter";
import Payment from "../../payment/Payment";
import { validateEmail } from "@/src/utils";
import { toast } from "react-toastify";

const PvtLtdCheckoutPage = ({productData}) => {
    const [directorsCount, setDirectorsCount] = useState(0);
    const [gstRegistrationCount, setGSTRegistrationCount] = useState(1);
    const [msmeRegistrationCount, setMSMERegistrationCount] = useState(1);
    const [rocComplianceCount, setROCComplianceCount] = useState(1);
    const [totalAmount,setTotalAmount] = useState(0);
    const [subTotalAmount,setSubTotalAmount] = useState(0)

    const [firstName, setFirstName] = useState("Hardik"); 
    const [lastName, setLastName] = useState("Bhalodia");    
    const [phoneNumber, setPhoneNumber] = useState("6355129211");
    const [emailAddress, setEmailAddress] = useState("hardikbhalodia999@gmail.com");
    const [showPayment,setShowPayment] = useState(false);

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const [pvtPrice,setPvtPrice] = useState(productData && productData['pvt-ltd'] && productData['pvt-ltd'].product_price ? productData['pvt-ltd'].product_price : 0)
    const [directorPrice,setDirectorPrice] = useState(productData && productData['pvt-directors'] && productData['pvt-directors'].product_price ? productData['pvt-directors'].product_price : 0)
    const [gstPrice,setGstPrice] = useState(productData && productData['gst'] && productData['gst'].product_price ? productData['gst'].product_price : 0)
    const [msmePrice,setMsmePrice] = useState(productData && productData['msme'] && productData['msme'].product_price ? productData['msme'].product_price : 0)
    const [rocPrice,setRocPrice] = useState(productData && productData['roc'] && productData['roc'].product_price ? productData['roc'].product_price : 0)
    const [productsList,setProductsList] = useState({})

    useEffect(() => {
      let directorTotal = directorPrice * directorsCount;
      let gstTotal = gstPrice * gstRegistrationCount;
      let msmeTotal = msmePrice * msmeRegistrationCount;
      let rocTotal = rocPrice * rocComplianceCount;
      let privateTotal = pvtPrice;
      let tempList = {
        "pvt-directors": directorsCount,
        gst: gstRegistrationCount,
        msme: msmeRegistrationCount,
        roc: rocComplianceCount,
      };
      setProductsList(tempList);
      let subtotal = directorTotal + gstTotal + msmeTotal + rocTotal;
      setSubTotalAmount(subtotal);
      let totalAmount =
        directorTotal + gstTotal + msmeTotal + rocTotal + privateTotal;
      setTotalAmount(totalAmount);
    }, [
      directorsCount,
      gstRegistrationCount,
      msmeRegistrationCount,
      rocComplianceCount,
      pvtPrice,
      directorPrice,
      gstPrice,
      msmePrice,
      rocPrice,
    ]);

    const handleSubmit = () => {
      if (!firstName) {
        toast.error("Please enter your first name");
        return;
      }

      if (!lastName) {
        toast.error("Please enter your last name");
        return;
      }

      if (!emailAddress) {
        toast.error("Please enter your email address");
        return;
      }

      if (!phoneNumber) {
        toast.error("Please enter your phone number");
        return;
      }

      if (!validateEmail(emailAddress)) {
        toast.error("Please enter a valid email address");
        return;
      }
      setShowPayment(true);
    };

    const CheckoutDetails = () => {
      return (
        <div className="col-span-2 min-h-max xl:min-h-[calc(100vh-40px)] lg:xl:min-h-[calc(100vh-40px)] flex items-center">
          <div className="w-full xl:w-9/12 lg:w-9/12 md:w-full mx-auto">
            <Image src={Logo} className="w-16 h-16" alt="Company Logo" />
            <h1 className="text-3xl font-sfpro-bold text-black mt-5">
              Billing Details
            </h1>
            <p className="mt-2 text-[#808080] font-mabry-medium text-[15px]">
              Enter your billing details for a seamless transaction experience.
            </p>
            <form className="mt-6">
              <div className="block xl:flex lg:flex items-center gap-8">
                <div className="form-group w-full">
                  <InputField
                    required={true}
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group w-full">
                  <InputField
                    required={true}
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group w-full mt-6">
                <InputField
                  type="number"
                  required={true}
                  label="Phone number"
                  value={phoneNumber}
                  onChange={(e) => {setPhoneNumber(e.target.value)}}
                  
                />
              </div>
              <div className="form-group w-full mt-6">
                <InputField
                  type="email"
                  required={true}
                  label="Email address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
            </form>
            <div className="w-full mt-6 xl:mt-14 lg:mt-14 text-center">
              <p className="text-black font-mabry-bold text-sm">
                Secure payments by
              </p>
              <Image
                src={RazorpayLogo}
                className="w-56 h-auto mt-2 mx-auto"
                alt="Secure payments by Razorpay"
              />
            </div>
          </div>
        </div>
      );
    }

    const CartDetails = () => {
      return (
        <div className="col-span-2 rounded-xl payment-banner min-h-[calc(100vh-40px)] mt-10 xl:mt-0 lg:mt-0">
          <div className="w-full h-full bg-black bg-opacity-70 rounded-xl backdrop-blur-md p-5 xl:p-10 lg:p-10 flex items-center">
            <div className="w-full">
              <Card className="rounded-xl shadow-xl">
                <CardBody className="px-4 xl:px-8 lg:px-8">
                  <h1 className="font-bold text-[24px] text-black font-sfpro-bold">
                    {productData &&
                    productData["pvt-ltd"] &&
                    productData["pvt-ltd"].product_name
                      ? productData["pvt-ltd"].product_name
                      : ""}
                  </h1>
                  <div className="mt-5">
                    {/* TABLE HEADING */}
                    <div className="flex items-center gap-5">
                      <div className="w-3/5">
                        <h4 className="text-base xl:text-[18px] lg:text-[18px] font-mabry-bold text-black">
                          Add Ons
                        </h4>
                      </div>
                      <div className="w-1/5">
                        <h4 className="text-base xl:text-[18px] lg:text-[18px] font-mabry-bold text-black">
                          Quantity
                        </h4>
                      </div>
                      <div className="w-1/5 text-end xl:text-left lg:text-left">
                        <h4 className="text-base xl:text-[18px] lg:text-[18px] font-mabry-bold text-black">
                          Total
                        </h4>
                      </div>
                    </div>

                    {/* ADDITIONAL DIRECTORS */}
                    <div className="flex items-center gap-5 mt-5">
                      <div className="w-3/5">
                        <h5 className="text-base font-mabry-medium text-black">
                          {productData &&
                          productData["pvt-directors"] &&
                          productData["pvt-directors"].product_name
                            ? productData["pvt-directors"].product_name
                            : ""}
                        </h5>
                        <p className="text-sm font-mabry-regular text-[#808080]">
                          Two directors are already included, select only if
                          more than two directors are required.
                        </p>
                      </div>
                      <div className="w-1/5">
                        <CounterButtons
                          count={directorsCount}
                          setCount={setDirectorsCount}
                          max={16}
                          min={0}
                        />
                      </div>
                      <div className="w-1/5 text-end xl:text-left lg:text-left">
                        <h5 className="text-base font-mabry-medium text-black">
                          ₹ {directorsCount * directorPrice}
                        </h5>
                      </div>
                    </div>

                    {/* GST REGISTRATION */}
                    <div className="flex items-center gap-5 mt-5">
                      <div className="w-3/5">
                        <h5 className="text-base font-mabry-medium text-black">
                          {productData &&
                          productData["gst"] &&
                          productData["gst"].product_name
                            ? productData["gst"].product_name
                            : ""}
                        </h5>
                        <p className="text-sm font-mabry-regular text-[#808080]">
                          ₹ {gstPrice}
                        </p>
                      </div>
                      <div className="w-1/5">
                        <CounterButtons
                          count={gstRegistrationCount}
                          setCount={setGSTRegistrationCount}
                          min={0}
                          max={1}
                        />
                      </div>
                      <div className="w-1/5 text-end xl:text-left lg:text-left">
                        <h5 className="text-base font-mabry-medium text-black">
                          ₹ {gstRegistrationCount * gstPrice}
                        </h5>
                      </div>
                    </div>

                    {/* MSME REGISTRATION */}
                    <div className="flex items-center gap-5 mt-5">
                      <div className="w-3/5">
                        <h5 className="text-base font-mabry-medium text-black">
                          {productData &&
                          productData["msme"] &&
                          productData["msme"].product_name
                            ? productData["msme"].product_name
                            : ""}
                        </h5>
                        <p className="text-sm font-mabry-regular text-[#808080]">
                          ₹ {msmePrice}
                        </p>
                      </div>
                      <div className="w-1/5">
                        <CounterButtons
                          count={msmeRegistrationCount}
                          setCount={setMSMERegistrationCount}
                          min={0}
                          max={1}
                        />
                      </div>
                      <div className="w-1/5 text-end xl:text-left lg:text-left">
                        <h5 className="text-base font-mabry-medium text-black">
                          ₹ {msmeRegistrationCount * msmePrice}
                        </h5>
                      </div>
                    </div>

                    {/* NEW COMPANY ROC COMPLIANCE */}
                    <div className="flex items-center gap-5 mt-5">
                      <div className="w-3/5">
                        <h5 className="text-base font-mabry-medium text-black">
                          {productData &&
                          productData["roc"] &&
                          productData["roc"].product_name
                            ? productData["roc"].product_name
                            : ""}
                        </h5>
                        <p className="text-sm font-mabry-regular text-[#808080]">
                          ₹ {rocPrice}
                        </p>
                      </div>
                      <div className="w-1/5">
                        <CounterButtons
                          count={rocComplianceCount}
                          setCount={setROCComplianceCount}
                          min={0}
                          max={1}
                        />
                      </div>
                      <div className="w-1/5 text-end xl:text-left lg:text-left">
                        <h5 className="text-base font-mabry-medium text-black">
                          ₹ {rocComplianceCount * rocPrice}
                        </h5>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="rounded-xl shadow-xl mt-5">
                <CardBody className="px-4 xl:px-8 lg:px-8">
                  <h1 className="font-bold text-[24px] text-black font-sfpro-bold">
                    Order Summary
                  </h1>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <h5 className="text-base font-mabry-medium text-black">
                        {productData &&
                        productData["pvt-ltd"] &&
                        productData["pvt-ltd"].product_name
                          ? productData["pvt-ltd"].product_name
                          : ""}
                      </h5>
                      <h5 className="text-base font-mabry-bold text-black">
                        ₹ {pvtPrice}
                      </h5>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <h5 className="text-base font-mabry-medium text-black">
                        Add Ons
                      </h5>
                      <h5 className="text-base font-mabry-bold text-black">
                        ₹ {subTotalAmount}
                      </h5>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <h5 className="text-xl font-mabry-bold text-black">
                        Total
                      </h5>
                      <h5 className="text-xl font-mabry-bold text-black">
                        ₹ {totalAmount}
                      </h5>
                    </div>
                  </div>
                  <Button
                    className="mt-6 normal-case font-medium font-mabry-medium bg-[#101727] text-white rounded-lg text-sm py-[10px] px-4 border-2 border-[#101727] hover:bg-opacity-80 transition-all duration-300 ease-out hover:shadow-none flex items-center gap-3"
                    onClick={handleSubmit}
                  >
                    {showPayment ? <LoadingSpinner /> : null}
                    Proceed with Payment
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4">
          <CheckoutDetails />
          <CartDetails />

          {showPayment && (
            <Payment
              amount={totalAmount}
              successData={{
                title : "Payment Successful",
                description : "Your payment has been received successfully.Please check your inbox for Dashboard Login Credentials"
              }}
              metadata={{
                name: firstName + lastName,
                email: emailAddress,
                phone : phoneNumber,
                organization_id:
                  productData &&
                  productData["pvt-ltd"] &&
                  productData["pvt-ltd"].organization_id
                    ? productData["pvt-ltd"].organization_id
                    : "",
                productsList: productsList,
              }}
              paymentType={"pvt-ltd"}
              onComplete={() => {
                setShowPayment(false);
              }}
            />
          )}
        </div>
      </div>
    );
};

export default PvtLtdCheckoutPage;