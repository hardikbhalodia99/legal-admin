/* NEXTJS IMPORTS */
import Image from "next/image";

/* MATERIAL TAILWIND COMPONENTS */
import { Dialog, DialogBody, Button } from "@/src/components/core/mui-tailwind";

/* ASSETS */
import PaymentSuccessful from "@/public/images/icons/payment-successful.png";

const PaymentSuccessModal = (props) => {
  return (
    <Dialog
      open={true}
      size="xs"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      dismiss={{ outsidePress: false }}
      handler={props.handlerFn}
    >
      <DialogBody className="text-center p-10">
        <Image
          src={PaymentSuccessful}
          className="w-28 h-28 mx-auto"
          alt="Payment Successful"
        />
        <div className="mt-3">
          <h5 className="text-2xl font-sfpro-bold text-black">
            Payment successful
          </h5>
          <p className="text-base font-mabry-regular text-black mt-3">
            Your payment was successful! You can now continue using the
            dashboard.
          </p>
          <Button className="bg-black shadow-none hover:shadow-none font-normal text-sm font-mabry-regular tracking-wide text-white normal-case hover:bg-opacity-80 mt-5">
            Go to Dashboard
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}

export default PaymentSuccessModal
