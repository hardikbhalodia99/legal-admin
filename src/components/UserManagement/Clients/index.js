import React from "react";
import Button from "../../core/button";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { ClientTable } from "./ClientTable";
import Employees from "../Employees";

export default function Clients({employees2}) {
	console.log('employees2: ', employees2);
	
	return (
		<div>
			 
      <ClientTable thunder= {employees2} />
		</div>
	);
}
