import React, { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { loadRazorpay } from "../../utils/index"
import { useRouter } from "next/router"
import { SERVER_BASE_URL } from "@/src/utils/constants"
import SuccessModal from "../core/modal/SuccessModal"
import PaymentLoadingModal from "../core/modal/PaymentLoadingModal"

export default function Payment({ onComplete, amount, metadata,successData,paymentType }) {
  const [loading, setLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState("not-created")
  const [paymentOrderId, setPaymentOrderId] = useState("")
  const [showSuccessModal,setShowSuccessModal] = useState(false)  
  const router = useRouter()
  useEffect(() => {
    async function startRazorpay() {
      if (process.env.REACT_APP_ENV !== "prod") {
        console.log("status", paymentStatus)
      }
      if (paymentStatus === "initiated") {
        await loadRazorpay()
        let payload = {
          amount: amount,
          name: metadata.name,
          email: metadata.email,
          organization_id : metadata.organization_id
        }

        let prefill = {
          email: metadata.email,
          name: metadata.name,
          contact : metadata.phone
        }

        let notes = {
          type : paymentType,
          organization_id : metadata.organization_id,
          products : metadata.productsList
        }
       
        const response = await axios.post(`${SERVER_BASE_URL}/payment/create-order`, payload)
        setPaymentStatus("created")
        const razorpayOrderId = response.data["razorpay_order_id"]
        const razorpayKey = response.data["razorpay_key"]
        setPaymentOrderId(razorpayOrderId)
        const options = {
          key: razorpayKey,
          name: "Legal Stuff",
          image: "https://cdn.images.climes.io/climes-icon-purple.png",
          order_id: razorpayOrderId,
          handler: async function (response) {
            setPaymentStatus("pending")

            const data = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              organization_id : metadata.organization_id
            }
            const result = await axios.post(`${SERVER_BASE_URL}/payment/success`, data)
            console.log("%c 🍧 result", "color:#b03734", result)
          },
          modal: {
            ondismiss: function () {
              setPaymentStatus("not-created")
              
              onComplete()
            },
          },
           prefill: prefill,
          notes: notes,
          readonly: {
            email: true,
            contact : true
          },
          theme: {
            color: "#8940C9",
          },
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.on("payment.failed", function (response) {
          setPaymentStatus("failed")
        })
        paymentObject.open()
      }
    }
    startRazorpay()
  }, [paymentStatus])

  const checkStatus = async () => {
    setLoading(true)
    let statusPayload = {
      razorpay_order_id : paymentOrderId,
      organization_id : metadata.organization_id
    }
    const response = await axios.post(`${SERVER_BASE_URL}/payment/status`,statusPayload)

    if (response.data.payment_received) {
      
      setPaymentStatus("success")
      setShowSuccessModal(true)
      toast.success("Payment successful!")
      setLoading(false)
      try {
        setTimeout(() => {
          onComplete()
          router.reload()
        }, 6000)
      } catch (err) {
        console.log(err)
      }
    } else {
      setPaymentStatus("pending")
      setTimeout(async () => {
        await checkStatus()
      }, 5000)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (paymentStatus === "pending") {
      checkStatus()
    }
  }, [paymentStatus])

  useEffect(() => {
    if (
  
      amount &&
      paymentStatus === "not-created"
    ) {
      handleRazorpay()
    }
  }, [])

  const handleRazorpay = async () => {
    setPaymentStatus("initiated")
  }

  return (
    <>
      <SuccessModal     
        isOpen={showSuccessModal && successData}
        height={"h-64"}
        width={"max-w-[540px]"}
        title={successData.title}
        description={successData.description}
      />
      <PaymentLoadingModal
        isOpen={loading}
        title="Processing payment..."
        description="Please wait! It may take upto 2 minutes for verification of payment."
      />
    </>
  )
}

