import ReactModal from "react-modal"

const SuccessModal = ({ isOpen, onClose, title, description, width, height }) => {
  return (
    <ReactModal
      style={{ overlay: { zIndex: 100 } }}
      className={`max-w-[656px] outline-none z-[999] w-full mx-auto absolute top-1/4 bottom-1/2 right-0 left-0 ${width}`}
      isOpen={isOpen}
    >
      {/* {onClose && 
        <CloseIcon className="absolute right-4 top-4" onClose={onClose} />
      } */}
      <div
        className={` text-dark px-14 py-14 gap-4 flex flex-col text-center justify-center w-full h-[348px] shadow-btn rounded-3xl ${height}`}
        style={{ background: "linear-gradient(289.85deg, #B8FFEC -7.29%, #FFFFFF 118.12%)" }}
      >
        <svg
          className="w-24 h-24 mx-auto"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
            <path fill="#D9D9D9" d="M0 0h20v20H0z" />
          </mask>
          <g>
            <path
              d="m8.83 13.83 5.88-5.87-1.17-1.17-4.7 4.7-2.38-2.37-1.17 1.17 3.54 3.54Zm1.17 4.5a8.4 8.4 0 0 1-7.68-5.08A8.11 8.11 0 0 1 1.67 10a8.41 8.41 0 0 1 5.08-7.68A8.12 8.12 0 0 1 10 1.67a8.42 8.42 0 0 1 7.68 5.08c.43 1.01.65 2.1.65 3.25a8.4 8.4 0 0 1-5.08 7.68 8.1 8.1 0 0 1-3.25.65Z"
              fill="#008862"
            />
          </g>
        </svg>
        <p className="text-xl leading-7 ">{title} </p>
        <p className="text-base leading-6 tracking-[0.01em] whitespace-pre-line">{description}</p>
      </div>
    </ReactModal>
  )
}

export default SuccessModal
