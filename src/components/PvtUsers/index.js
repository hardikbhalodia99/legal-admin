import React from "react";
import PvtUsersTable from "./PvtUsersTable";
import { createColumnHelper } from "@tanstack/react-table";
import { toTitleCase } from "@/src/utils";
import moment from "moment";

export default function PvtUsers({ totalCount, data }) {
	console.log("%c 🍯 data", "color:#e41a6a", data);
	const columnHelper = createColumnHelper();
	const cols = [
		//@ts-ignore
		columnHelper.accessor("client_name", {
			cell: (info) => (
				<div className="flex items-center gap-2">{info.renderValue()}</div>
			),
			header: () => <span>Name</span>,
		}),

		columnHelper.accessor("client_email", {
			id: "state",
			cell: (info) => info.getValue(),
			header: () => <span>Email</span>,
		}),
		columnHelper.accessor("assigned_to", {
			header: () => "Assigned",
			cell: (info) => info.renderValue() ? info.renderValue() : "-",
		}),

		columnHelper.accessor("createdAt", {
			header: "CreatedAt",
			cell: (info) => moment(info.renderValue()).format("MMMM Do YYYY, h:mm a"),
		}),
	];

	return (
		<div>
			<PvtUsersTable
				totalCount={data.length}
				defaultData={data}
				columns={cols}
			/>
		</div>
	);
}
