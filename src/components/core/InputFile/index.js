/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Button from "../button";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import PdfIcon from "@/public/images/icons/pdf-icon.png";
import { toast } from "react-toastify";

export function InputFile({ disabled, value, setValue, buttonLabel, onButtonClick, id, uploadLoading }) {
	console.log("%c 🍑 value", "color:#e41a6a", value);

	const [fileData, setFileData] = useState("");
	const [extension, setExtenstion] = useState(null)

	function handleConversion() {
		let reader = new FileReader();
		reader.readAsDataURL(fileData);

		reader.onload = () => {
			let temp = {
				file: fileData,
				base64: reader.result,
				name: fileData.name,
				type: fileData.type,
				size: fileData.size,
			};
			setValue(temp);
		};
	}

	useEffect(() => {
		if (fileData && (!value || !value.link)) {
			handleConversion();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fileData]);

	useEffect(() => {
		if (value && value.link) {
			let linkSplitted = value.link.split(".");
			setExtenstion(linkSplitted[linkSplitted.length - 1])
		}
	}, [value])
	return (
		<div className="relative flex w-full max-w-[24rem]">
			<input
				type="file"
				disabled={disabled}
				onChange={(e) => {
					console.log("%c 🍬 e.target", "color:#42b983", e.target);
					if (e.target.files.length > 0) {
						if (e.target.files[0].size > 500000) {
							toast.error("File size must be less than 500kb")
							return
						}
						if (!["application/pdf", "image/jpeg", "image/jpg", "image/png"].includes(e.target.files[0].type)) {
							toast.error("Please upload PNG/JPG/JPEG/PDF file types only")
							return
						}
						console.log("%c 🍋 e.target.files[0].size", "color:#f5ce50", e.target.files[0].size);
						setFileData(e.target.files[0]);
					} else {
						setValue(null)
					}
				}}
				className="pr-20 hidden"
				containerProps={{
					className: "min-w-0",
				}}
				id={id ? id : "fileId"}
			/>

			{value && value.link && extension ? (<>



				{extension === "pdf" ? (<>
					<a target="_blank" href={value.link} rel="noopener noreferrer">

						<div className="flex items-center justify-center flex-col gap-2 w-[160px] h-[160px] border-dashed border border-[#C1C1CD] rounded-xl">
							<Image
								src={PdfIcon}
								className="w-[100px] h-[100px] rounded-xl"
								alt="Company Logo"
								t
							/>
							<div>View File</div>

						</div>

					</a>

				</>) : (<>
					<a target="_blank" href={value.link} rel="noopener noreferrer">
						<div className="flex items-center justify-center flex-col gap-2 w-[160px] h-[160px] border-dashed border border-[#C1C1CD] rounded-xl">
							<img
								src={value.link}
								className="w-[100px] h-[100px] rounded-xl"
								alt="Company Logo"
							/>
							<div>View File</div>

						</div>

					</a>
				</>)}



			</>) : (<>

				<div className="mt-2 flex items-center gap-6">
					{value && value.base64 ? (
						<>
							<div className="flex items-center justify-center flex-col gap-2 w-[280px] h-[230px] border-dashed border border-[#C1C1CD] rounded-xl">

								{value.type && value.type.includes("image") ? (<>

									<img
										src={value.base64}
										className="w-[130px] h-[130px] rounded-xl"
										alt="Company Logo"
									/>

								</>) : (<>
									<Image
										src={PdfIcon}
										className="w-[130px] h-[130px] rounded-xl"
										alt="Company Logo"
									/>
									<div className="w-fit h-6 ml-5 overflow-hidden">{value.name}</div>
								</>)}
								<div className="flex flex-row gap-5">

									<Button
										size="small"
										type="secondary"
										disabled={!value || uploadLoading}
										label={buttonLabel ? buttonLabel : "Upload"}
										onClick={onButtonClick}
										loading={uploadLoading}
									/>
									{!uploadLoading ? <>
										<Button
											onClick={() => { setFileData(null); setValue(null) }}
											label="Remove"
										/>
									</> : null}
								</div>

							</div>
						</>
					) : (
						<>
							<div
								className={`w-[230px] h-[130px] border-dashed border border-[#C1C1CD] rounded-xl flex items-center justify-center cursor-pointer hover:border-primary-color`}
								onClick={() => {
									document.getElementById(id ? id : "fileId").click();
								}}
							>
								<div className="text-center">
									<div className="h-[30px] w-[30px] rounded-3xl bg-primary-color flex items-center justify-center mx-auto">
										<PlusCircleIcon
											className="text-white w-7 h-7"
											fill="#000"
											strokeWidth={2}
										/>
									</div>
									<h5 className="text-sm text-primary-black font-mabry-medium mt-[5px]">
										Add image
									</h5>
									<p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
										(500kb max)
									</p>
									<p className="text-[12px] text-[#7B7B8C] font-mabry-regular mt-[1px] text-center">
										(PNG/JPG/JPEG/PDF)
									</p>
								</div>
							</div>
						</>
					)}
				</div>
			</>)}

		</div>
	);
}
