import React, { useState } from "react";
import {
	Dialog,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Checkbox,
} from "@material-tailwind/react";
import Button from "../../core/button";
import { XMarkIcon } from "@heroicons/react/24/outline";

export function AddEmployeeModal({ open, handleOpen }) {
  const [date,setDate] = useState()
	return (
		<>
			<Dialog
				size="md"
				open={open}
				handler={handleOpen}
				className="bg-transparent shadow-none"
			>
				<Card className="mx-auto w-full   ">
					<CardBody className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
						<Typography variant="h4" color="blue-gray">
							Add Client
						</Typography>
            <XMarkIcon className="w-6 h-6 hover:cursor-pointer" onClick={handleOpen}/>
            </div>
						<Typography
							className="mb-3 -mt-4 font-normal"
							variant="paragraph"
							color="gray"
						>
							Enter your employee details.
						</Typography>
						<div className="flex flex-row gap-3">
							
								<Input label="Name" size="lg" />

								<Input label="Phone" size="lg" />
						
						</div>
						<Input label="Email" size="lg" />
            <div className="flex flex-row gap-3">
            <Input label="Joining date" size="lg" type="date" />
						<Input label="Password" size="lg" />

            </div>
					
					
					</CardBody>
					<CardFooter className="pt-0">
						<Button
              type="primary"
              size="medium"
              full
              label={"Save"}
            />
					
					</CardFooter>
				</Card>
			</Dialog>
		</>
	);
}
