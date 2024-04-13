import React from "react";
import GstReturnTable from './table';
import { createColumnHelper } from "@tanstack/react-table";
import { toTitleCase } from "@/src/utils";
import moment from "moment";

export default function GstReturn({ totalCount, data }) {
  console.log("%c 🍯 data", "color:#e41a6a", data);
  const columnHelper = createColumnHelper();
  const cols = [
//@ts-ignore
    columnHelper.accessor("company_name", {
      id: "company_name",
      cell: (info) => info.renderValue(),
      header: () => <span>Company</span>,
    }),
    
    columnHelper.accessor("name", {
      cell: (info) => (
        <div className="flex items-center gap-2">{info.renderValue()}</div>
      ),
      header: () => <span>Name</span>,
    }),

    columnHelper.accessor("email", {
      id: "state",
      cell: (info) => info.renderValue(),
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
      <GstReturnTable
        totalCount={data?.length}
        defaultData={data}
        columns={cols}
      />
    </div>
  );
}
