"use client";
import React, { useState } from "react";

/* NEXTJS COMPONENTS */
import Image from "next/image";
import Link from "next/link";

/* COMPONENTS */
import InputField from "@/src/components/core/input";

/* IMAGES */
import Logo from "@/public/images/logos/dummy-logo.png";

/* ICONS */
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";
import { useAuth } from "@/src/lib/auth/appwrite/useAuth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Button from "../core/button";
export default function Login({
	setShowForgotPassword,
	prefillEmail,
	prefillPassword,
}) {
	const [togglePassword, setTogglePassword] = useState(false);
	const [email, setEmail] = useState(prefillEmail ? prefillEmail : "");
	const [password, setPassword] = useState(
		prefillPassword ? prefillPassword : ""
	);
	const { emailLogin, getToken } = useAuth();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const result = await emailLogin(email.trim(), password.trim());
			console.log("%c 🥒 result", "color:#b03734", result);

			const query = router.query;
			console.log("%c 🍐 query", "color:#e41a6a", query);

			if (query && query.next) {
				router.push(query.next);
				toast.success("Welcome to Partner Dashboard");
			} else {
				router.push("/");
				toast.success("Welcome to Partner Dashboard");
			}
			
		} catch (err) {
			console.log("HERE IS ERRRR", err);
			toast.error(err.response.data.message);
			setLoading(false);
		}
	};

	return (
		<div className="container">
			<div className="flex flex-row justify-center">
				<div className="h-[calc(100vh-40px)]">
					<div className="container h-full flex items-center">
						<div className="w-full xl:w-9/12 lg:w-9/12 md:w-full mx-auto">
							<h1 className="mt-5 font-bold text-[24px] font-sfpro-bold">
								Welcome back
							</h1>
							<p className="mt-1 text-[#808080] font-mabry-medium text-[15px]">
								Enter your email address and password to access your account and
								manage your company details
							</p>

							{/* FORM */}
							<form className="mt-7" onSubmit={handleSubmit}>
								<div className="form-group">
									<InputField
										type="email"
										label="Email Address"
										value={email}
										onChange={(value) => setEmail(value)}
									/>
								</div>
								<div className="form-group mt-5 relative">
									<InputField
										type={togglePassword ? "text" : "password"}
										label="Password"
										value={password}
										onChange={(value) => setPassword(value)}
									/>
									<button
										type="button"
										className="p-2 rounded-full hover:bg-black hover:bg-opacity-5 absolute top-2 right-2"
										onClick={() => setTogglePassword(!togglePassword)}
									>
										{togglePassword ? (
											<EyeSlashIcon className="w-4 h-4 text-gray-500" />
										) : (
											<EyeIcon className="w-4 h-4 text-gray-500" />
										)}
									</button>
								</div>
								<div className="form-group mt-3 mb-3 flex items-center justify-end">
									<div
										onClick={() => {}}
										className="hover:cursor-pointer text-[13px] text-[#808080] hover:text-[#101727] font-mabry-medium"
									>
										Forgot Password ?
									</div>
								</div>
								<Button
									type="primary"
									full={true}
									size="medium"
									label={"Login"}
									btnType={"submit"}
									loading={loading}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
