"use client";
import React from "react";

/* NEXTJS IMPORTS */
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* NAVIGATION MENU DATA */
import { topMenu, bottomMenu } from "@/src/navigation/menu";

const Sidebar = () => {
	const pathName = usePathname();

	return (
		<div className="py-5 bg-white border-r border-r-bright-gray h-[calc(100vh-68px)] hidden xl:flex lg:flex md:flex justify-between flex-col">
			<div>
				{topMenu.map((menu) => (
					<Link href={menu.link} key={menu.id}>
						<div
							className={`flex items-center pl-5 pr-5 pt-[10px] pb-[10px] ${
								pathName === menu.link
									? "bg-black bg-opacity-5 border-r-2 border-[#101727]"
									: ""
							} hover:bg-black hover:bg-opacity-5`}
						>
							<div className="flex flex-row items-center gap-2">
								<div>{menu.icon}</div>
							</div>

							<h5 className="text-sm font-mabry-medium text-[#575762] ml-[10px]">
								{menu.name}
							</h5>
						</div>
					</Link>
				))}
			</div>

			<div>
				{bottomMenu.map((menu) => (
					<Link href={menu.link} key={menu.id} className="">
						<div className="flex items-center pl-5 pr-5 pt-[10px] pb-[10px] hover:bg-black hover:bg-opacity-5 hover:border-r-2 border-r-[#101727]">
						<div className="flex flex-row items-center gap-2">
								<div>{menu.icon}</div>
							</div>
							<h5 className="text-sm font-mabry-medium text-[#575762] ml-2">
								{menu.name}
							</h5>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
