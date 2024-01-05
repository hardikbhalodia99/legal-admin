import React, { useContext, useState } from "react";
import {
	Dialog,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Checkbox,
} from "@material-tailwind/react";
import Button from "../../core/button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import SelectField from "../../core/select";
import { toast } from "react-toastify";
import { validateEmail } from "@/src/utils";
import Input from "../../core/input";
import { AuthContext } from "@/src/lib/auth/appwrite/useAuthUser";
import axios from "axios";

export function AddEmployeeModal({ open, handleOpen, selectedEmployee }) {
	console.log("%c 🌮 selectedEmployee", "color:#ea7e5c", selectedEmployee);
	const [name, setName] = useState(
		selectedEmployee ? selectedEmployee.employee_name : ""
	);
	const [email, setEmail] = useState(
		selectedEmployee ? selectedEmployee.employee_email : ""
	);
	const [phone, setPhone] = useState(
		selectedEmployee ? selectedEmployee.employee_phone : "+91"
	);
	const [type, setType] = useState(
		selectedEmployee ? selectedEmployee.employee_type : "EMPLOYEE"
	);
	const [password, setPassword] = useState("");
	const [errorMessage,setErrorMessage] = useState("")
	const [loading, setLoading] = useState(false);
	const { authToken, authUser } = useContext(AuthContext) 

	async function handleSubmit() {
		try {
			setLoading(true);
			if (!selectedEmployee) {
				if (!name || name.trim() === "") {
					toast.error("Please enter name of employee");
					setErrorMessage("Please enter name of employee")
					return;
				} else if (!email || email.trim() === "") {
					toast.error("Please enter email of employee");
					setErrorMessage("Please enter email of employee")
					return;
				} else if (!validateEmail(email)) {
					toast.error("Please enter email of employee");
					setErrorMessage("Please enter email of employee")
					return;
				} else if (!phone || phone.trim() === "" || phone.length !== 13) {
					toast.error(
						"Please enter phone of employee correctly along with +91"
					);
					setErrorMessage("Please enter phone of employee correctly along with +91")
					return;
				} else if (!["ADMIN", "EMPLOYEE"].includes(type)) {
					toast.error("Please enter function of employee");
					setErrorMessage("Please enter function of employee")
					return;
				} else if (
					!password ||
					password.trim() === "" ||
					password.length < 10
				) {
					toast.error("Please enter a password of atleast 10 characters");
					setErrorMessage("Please enter a password of atleast 10 characters")
					return;
				}

				const payload = {
					name,email,phone,password,type
				}
				const response = await axios.post("/api/employee/create",payload,{
					headers : {
						Authorization : authToken
					}
					
				}) 
				console.log("%c 🍑 response", "color:#f5ce50", response);
				handleOpen()
				toast.success("Employee has been added successfully")
			} else {
			}

			setLoading(false);
		} catch (error) {
			console.log("%c 🥤 error", "color:#4fff4B", error);
			setLoading(false);
		}
	}
	return (
		<>
			<Dialog
				size="md"
				open={open}
				handler={handleOpen}
				className="bg-transparent shadow-none !-z-10"
			>
				<Card className="mx-auto w-full   ">
					<CardBody className="flex flex-col gap-4">
						<div className="flex flex-row justify-between">
							<Typography variant="h4" color="blue-gray">
								Add Employee
							</Typography>
							<XMarkIcon
								className="w-6 h-6 hover:cursor-pointer"
								onClick={handleOpen}
							/>
						</div>
						<Typography
							className="mb-3 -mt-4 font-normal"
							variant="paragraph"
							color="gray"
						>
							Enter your employee details.
						</Typography>
						<div className="flex flex-row gap-3">
							<Input
								label="Name"
								className={"w-full"}
								value={name}
								onChange={(value) => setName(value)}
							/>

							<Input
								label="Phone"
								className={"w-full"}
								value={phone}
								onChange={(value) => setPhone(value)}
							/>
						</div>
						<Input
							label="Email"
							className={"w-full"}
							value={email}
							onChange={(value) => setEmail(value)}
						/>
						<div className="flex flex-row gap-3">
							<Input
								label="Password"
								className={"w-full"}
								value={password}
								onChange={(value) => setPassword(value)}
								type="password"
							/>
							<SelectField
								label="Function"
								className={"w-full"}
								options={["ADMIN", "EMPLOYEE"]}
								value={type}
								disabled={!!selectedEmployee}
								onChange={(value) => {
									setName(value);
								}}
							/>
						</div>
					</CardBody>
					<div className="text-red-500 ml-9 mb-5">
						{errorMessage}
					</div>
					<CardFooter className="pt-0">
						<Button
							onClick={()=>handleSubmit()}
							loading={loading}
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
