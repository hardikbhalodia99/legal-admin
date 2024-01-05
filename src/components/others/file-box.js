/* NEXTJS IMPORTS */
import Image from "next/image";

/* MATERIAL TAILWIND COMPONENTS */
import { Button, Card, CardBody } from "@/src/components/core/mui-tailwind";

/* ASSETS */
import PDFIcon from "@/public/images/icons/pdf-icon.png";
import DocsIcon from "@/public/images/icons/docs-icon.png";
import PNGIcon from "@/public/images/icons/png-icon.png";
import JPGIcon from "@/public/images/icons/jpg-icon.png";

/* ICONS */
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const FileBox = (props) => {
    return (
      <Card className="bg-white border border-[#DDDDE6] rounded-md shadow-none hover:shadow-none w-full">
        <CardBody className="p-2">
          <div className="bg-[#F5F6FA] w-full rounded-md py-8 flex items-center justify-center relative">
            <Image
              src={
                props.fileType === "PDF"
                  ? PDFIcon
                  : props.fileType === "DOCS"
                  ? DocsIcon
                  : props.fileType === "PNG"
                  ? PNGIcon
                  : JPGIcon
              }
              className="w-16 h-16"
              alt={props.fileType}
            />
            <Button className="bg-white p-2 shadow-sm hover:shadow-sm border border-[#E5E5E5] rounded-full !absolute top-2 right-2 hover:border-black">
              <ArrowDownTrayIcon className="w-4 h-4 text-black" />
            </Button>
          </div>
          <div className="p-2 py-3 pb-0">
            <h5
              className="text-sm font-mabry-medium text-black"
              style={{ overflowWrap: "anywhere" }}
            >
              {props.fileName}
            </h5>
            <p className="text-[12px] font-mabry-regular text-gray-500">
              {props.fileSize}
            </p>
            <p className="text-[12px] font-mabry-regular text-gray-500 mt-2">
              <span className="text-gray-800 font-mabry-medium">
                Uploaded on:
              </span>{" "}
              {props.fileUploadDate}
            </p>
          </div>
        </CardBody>
      </Card>
    );
};

export default FileBox;