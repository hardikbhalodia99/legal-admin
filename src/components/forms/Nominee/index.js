"use client";
import React, { useState } from "react";
import {
	Card,
	CardBody,
	Tab,
	TabsHeader,
	TabsBody,
	Tabs,
	TabPanel,
} from "@/src/components/core/mui-tailwind";

import { UserIcon } from "@heroicons/react/24/outline";
import IndividualNominee from "./IndividualNominee";

const MultipleNominees = ({
	clientId,
	formType,
	nomineeDetails,
	faceName
}) => {
	console.log("%c 🍫 nomineeDetails", "color:#fca650", nomineeDetails);
	const [selectedNominee, setSelectedNominee] = useState(0);

	return (
		<Tabs value="hello">
			<TabsHeader
				className="block bg-transparent p-0 h-auto"
				indicatorProps={{
					className: "bg-transparent border-2 border-[#808080] ",
				}}
			>
				<div className="grid grid-cols-4  w-full gap-0 xl:gap-5 lg:gap-5">
					{nomineeDetails.map((data, index) => {
						return (
							<>
								<Tab
									key={"company-details" + index}
									value={"company-details" + index}
									className="p-0 block rounded-md mb-2 h-full "
									onClick={() => setSelectedNominee(index)}
								>
									<Card className="shadow-none border-2 border-bright-gray rounded-md w-full block">
										<CardBody className="py-3 px-4 w-full">
											<div className="flex items-center justify-start">
												<div className="w-[30px] h-[30px] border border-gray-300 rounded-full flex items-center justify-center">
													<UserIcon
														className="text-[#101727] w-4 h-4"
														strokeWidth={2}
													/>
												</div>
												<div className="text-left ml-3">
													<h5 className="text-[14px] font-mabry-bold text-[#101727]">
														{faceName}{" "}
														{index + 1}
													</h5>
													<p className="text-[12px] text-[#808080] font-mabry-regular">
														Fill the details of the{" "}
														{faceName ? faceName.toLowerCase() : ""}
													</p>
												</div>
											</div>
										</CardBody>
									</Card>
								</Tab>
							</>
						);
					})}
				</div>
			</TabsHeader>

			{/* TABS BODY */}
			<TabsBody className="col-span-4">
				{nomineeDetails.map((data, index) => {
					return (
						<>
							<TabPanel
								key={"company-details" + index}
								value={"company-details" + index}
								className="px-0 py-1 h-full"
							>
								<IndividualNominee
									clientId={clientId}
									formType={formType}
									index={selectedNominee}
									nomineeDetails={nomineeDetails.find((details) => details.nominee_number - 1 === index)}
									faceName={faceName}
								/>
							</TabPanel>
						</>
					);
				})}
			</TabsBody>
		</Tabs>
	);
};

export default MultipleNominees;
