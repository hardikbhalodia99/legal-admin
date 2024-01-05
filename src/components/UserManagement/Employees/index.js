import React from "react";
import Button from "../../core/button";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { EmployeesTable } from "./EmployeesTable";

export default function Employees({employees}) {
	return (
		<div>
			
      <EmployeesTable  employees={employees}/>
		</div>
	);
}
