import React, { useContext, useEffect, useState } from "react";
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

export function AddEmployeeModal({ open, handleOpen, selectedEmployee, setData }) {
	console.log("%c 🌮 selectedEmployee", "color:#ea7e5c", selectedEmployee);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("+91");
	const [type, setType] = useState("EMPLOYEE");
	const [password, setPassword] = useState("");
	const [updatedPassword, setUpdatePassword] = useState("");

	const [editStatus, setEditStatus] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	const [loading, setLoading] = useState(false);
	const [statusChangeLoading, setStatusChangeLoading] = useState(false);
	const [changePasswordLoading, setChangePasswordLoading] = useState(false);
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
					name, email, phone, password, type
				}
				const response = await axios.post("/api/employee/create", payload, {
					headers: {
						Authorization: authToken
					}

				})
				if (response) {
					const response = await axios.get("/api/employee/get-employees", {
						headers: {
							Authorization: authToken
						}
					})
					setData(response?.data?.data?.employees)
				}
				console.log("%c 🍑 response", "color:#f5ce50", response);
				handleOpen(false)
				toast.success("Employee has been added successfully")
			} else {
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
				}

				const payload = {
					name, email, phone, employee_id: selectedEmployee?.employee_id
				}
				const response = await axios.put("/api/employee/update-details", payload, {
					headers: {
						Authorization: authToken
					}

				})
				if (response) {
					const response = await axios.get("/api/employee/get-employees", {
						headers: {
							Authorization: authToken
						}
					})
					setData(response?.data?.data?.employees)
				}
				console.log("%c 🍑 response", "color:#f5ce50", response);
				handleOpen(false)
				toast.success("Employee has been added successfully")
			}

			setLoading(false);
		} catch (error) {
			console.log("%c 🥤 error", "color:#4fff4B", error);
			setLoading(false);
		}
	}
	async function handleStatusChange(status) {
		try {
			setStatusChangeLoading(true);
			if (selectedEmployee) {
				const payload = {
					status, employee_id: selectedEmployee?.employee_id
				}
				const response = await axios.put("/api/employee/update-status", payload, {
					headers: {
						Authorization: authToken
					}

				})
				if (response) {
					const response = await axios.get("/api/employee/get-employees", {
						headers: {
							Authorization: authToken
						}
					})
					setData(response?.data?.data?.employees)
				}
				console.log("%c 🍑 response", "color:#f5ce50", response);
				handleOpen(false)
				toast.success("Employee has been added successfully")
			} else {
			}

			setStatusChangeLoading(false);
		} catch (error) {
			console.log("%c 🥤 error", "color:#4fff4B", error);
			setStatusChangeLoading(false);
		}
	}
	async function handlePasswordChange() {
		try {
			setChangePasswordLoading(true);
			if (selectedEmployee) {
				if (
					!updatedPassword ||
					updatedPassword.trim() === "" ||
					updatedPassword.length < 10
				) {
					toast.error("Please enter a password of atleast 10 characters");
					setErrorMessage("Please enter a password of atleast 10 characters")
					return;
				}
				const payload = {
					password: updatedPassword, employee_id: selectedEmployee?.employee_id
				}
				const response = await axios.put("/api/employee/update-password", payload, {
					headers: {
						Authorization: authToken
					}

				})
				if (response) {
					const response = await axios.get("/api/employee/get-employees", {
						headers: {
							Authorization: authToken
						}
					})
					setData(response?.data?.data?.employees)
				}
				console.log("%c 🍑 response", "color:#f5ce50", response);
				setUpdatePassword("")
				handleOpen(false)
				toast.success("Employee has been added successfully")
			} else {
			}

			setChangePasswordLoading(false);
		} catch (error) {
			console.log("%c 🥤 error", "color:#4fff4B", error);
			setChangePasswordLoading(false);
		}
	}

	useEffect(() => {
		if (selectedEmployee) {
			setEmail(selectedEmployee?.employee_email)
			setName(selectedEmployee?.employee_name)
			setPhone(selectedEmployee?.employee_phone)
			setType(selectedEmployee?.employee_type)
			setEditStatus(true)
		} else {
			setEmail("")
			setName("")
			setPhone("+91")
			setType("EMPLOYEE")
			setEditStatus(false)
		}
	}, [selectedEmployee])
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
								{editStatus ? "Update" : "Add"} Employee
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
						{!editStatus && (<Input
							label="Email"
							className={"w-full"}
							value={email}
							onChange={(value) => setEmail(value)}
						/>)}

						<div className="flex flex-row gap-3">
							{editStatus ? (<Input
								label="Email"
								className={"w-full"}
								value={email}
								disabled={editStatus}
								onChange={(value) => setEmail(value)}
							/>) : (<Input
								label="Password"
								className={"w-full"}
								value={password}
								onChange={(value) => setPassword(value)}
								type="password"
							/>)}

							<SelectField
								label="Function"
								className={"w-full "}
								options={["ADMIN", "EMPLOYEE"]}
								value={type}
								disabled={editStatus}
								onChange={(value) => {
									setName(value);
								}}
							/>
						</div>
						<div>
							<div className="text-red-500 ml-9 mb-5">
								{errorMessage}
							</div>
							{editStatus && (<div className="flex justify-center"><div className=" ">
								<Button
									onClick={() => handleSubmit()}
									loading={loading}
									type="primary"
									size="medium"
									className={'w-96'}
									full
									label={"Update "}
								/>
							</div><div className="   ">
									<Button
										onClick={() => {
											handleStatusChange(selectedEmployee?.disabled === 1 ? "enable" : "disable")
										}}
										loading={statusChangeLoading}
										disabled={statusChangeLoading}
										type={selectedEmployee?.disabled === 1 ? "success" : "caution"}
										size="medium"
										className={'mx-2'}
										label={selectedEmployee?.disabled === 1 ? "Enable" : "Disable"}
									/>
								</div></div>)}
						</div>

						{/* UPDATE PASSWORD */}
						{editStatus && (<div>
							<hr className="pb-5" />
							<Typography
								className="mb font-normal"
								variant="paragraph"
								color="gray"
							>
								Reset Password
							</Typography>
							<Input
								label="Update Password"
								className={" w-80 float-left"}
								value={updatedPassword}
								onChange={(value) => setUpdatePassword(value)}
							/>
							<Button
								onClick={() => handlePasswordChange()}
								loading={changePasswordLoading}
								type="primary"
								size="medium"
								className={'mt-3 mx-2'}

								label={"Save"}
							/>
						</div>)}




					</CardBody>

					{!editStatus && (<CardFooter className="pt-0">
						<Button
							onClick={() => handleSubmit()}
							loading={loading}
							type="primary"
							size="medium"
							full
							label={"Save"}
						/>
					</CardFooter>)}
				</Card>
			</Dialog>
		</>
	);
}
