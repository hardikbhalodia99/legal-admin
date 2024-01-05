import ReactModal from "react-modal"

const PaymentLoadingModal = ({ isOpen, title, description, width, height }) => {
  return (
    <ReactModal
      style={{ overlay: { zIndex: 100 } }}
      className={`max-w-[656px] outline-none z-[999] rounded-2xl  w-full mx-auto absolute top-1/4 bottom-1/2 right-0 left-0 ${width}`}
      isOpen={isOpen}
    >
      <div
        className={` text-dark px-14   flex flex-col text-center justify-center w-full h-[348px] shadow-btn rounded-3xl ${height}`}
        style={{ background: "linear-gradient(289.85deg, #B8FFEC -7.29%, #FFFFFF 118.12%)" }}
      >
        <img src={`https://cdn.images.climes.io/brandkit/Projects/bounding_climes.gif`} className="w-44 h-auto mx-auto" />
        <p className="text-xl leading-6  ">{title} </p>
        <p className="text-base leading-6 tracking-[0.01em] mt-5">{description}</p>
      </div>
    </ReactModal>
  )
}

export default PaymentLoadingModal
