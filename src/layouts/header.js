"use client";
import React, { useState } from "react";

/* NEXT COMPONENTS */
import Image from "next/image";

/* MATERIAL TAILWIND COMPONENTS */
import { Navbar, Button } from "@/src/components/core/mui-tailwind";

/* ICONS */
import {
	Bars3Icon,
	XMarkIcon,
	BellAlertIcon,
} from "@heroicons/react/24/outline";

/* IMAGES */
import Logo from "@/public/images/logos/dummy-logo.png";
import UserAvatar from "@/public/images/avatars/avatar-01.jpg";
import {
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
} from "@material-tailwind/react";
import { useAuth } from "../lib/auth/appwrite/useAuth";
import { useRouter } from "next/router";

const DashboardHeader = () => {
	const [mobileNavbar, setMobileNavbar] = useState(false);
	const { logoutUser } = useAuth();
	const router = useRouter();

	const handleLogoutSubmit = async () => {
		try {
			const result = await logoutUser();
			console.log("%c 🍣 result", "color:#2eafb0", result);
			router.push("/sign-in");
		} catch (err) {
			console.log("HERE IS ERRRR", err);
		}
	};

	return (
		<Navbar className="p-0 shadow-none w-full max-w-full border-0">
			<header className="py-2 px-4 xl:px-5 lg:px-5 md:px-4 bg-white border-b border-b-bright-gray">
				<div className="container mx-auto">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							{/* MOBILE NAVBAR */}
							<Button
								className="p-0 shadow-none hover:shadow-none bg-transparent block xl:hidden lg:hidden md:hidden mr-4"
								onClick={() => setMobileNavbar(!mobileNavbar)}
							>
								{mobileNavbar ? (
									<XMarkIcon className="h-6 w-6 text-black" strokeWidth={2} />
								) : (
									<Bars3Icon className="h-6 w-6 text-black" strokeWidth={2} />
								)}
							</Button>

							{/* LOGO */}
							<Image src={Logo} className="w-[80px] h-auto" alt="Onestly" />
						</div>

						{/* HEADER OPTIONS */}
						<div className="flex items-center">
							{/* USER PROFILE */}
							<Menu>
								<MenuHandler>
									<div className="flex items-center hover:bg-black hover:bg-opacity-5 px-3 py-1 cursor-pointer rounded-md">
										<Image
											src={UserAvatar}
											className="object-cover w-7 h-7 xl:w-9 xl:h-9 lg:h-10 lg:w-10 md:w-8 md:h-8 rounded-3xl"
											alt="Hardik B."
										/>
									</div>
								</MenuHandler>
								<MenuList>
									<MenuItem
										className="flex flex-row gap-2 items-center"
										onClick={handleLogoutSubmit}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-5 h-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
											/>
										</svg>
										Logout
									</MenuItem>
								</MenuList>
							</Menu>
						</div>
					</div>
				</div>
			</header>
		</Navbar>
	);
};

export default DashboardHeader;
