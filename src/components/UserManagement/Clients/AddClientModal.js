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

export function AddClientModal({
    open,
    handleOpen,
    selectedEmployee,
    setData,
}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("+91");
    const [date, setDate] = useState("");
    const [password, setPassword] = useState("");
    const [updatedPassword, setUpdatePassword] = useState("");

	const [loading, setLoading] = useState(false);
	async function handleSubmit() {
		try {
			setLoading (true);
			if (!selectedEmployee){
				if (!name || name.trim() === ""){
					toast.error("Please enter name of employee");
					setErrorMessage("Please enter name of employee")
					return;
				}else if (!email || email.trim() === "") {
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
				} else if (!date === "") {
					toast.error("Please enter date");
					setErrorMessage("Please enter date")
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
			}
		}catch (error) {
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
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full   ">
                    <CardBody className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between">
                            <Typography variant="h4" color="blue-gray">
                                Add Client
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
							onClick={()=> handleSubmit()}
							loading= {loading}
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
