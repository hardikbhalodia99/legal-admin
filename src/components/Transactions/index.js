import React from 'react'
import { createColumnHelper } from '@tanstack/react-table';
import { toTitleCase } from '@/src/utils';
import TransactionTable from './TransactionsTable';

export default function Transactions({totalCount,data}) {
  const columnHelper = createColumnHelper();
  const cols = [
    //@ts-ignore  
    columnHelper.accessor('name', {
      cell: (info) => <div className="flex items-center gap-2">{info.renderValue()}</div>,
      header: () => <span>Name</span>,
    }),
    columnHelper.accessor('phone', {
      cell: (info) => <div className="flex items-center gap-2">{info.renderValue()}</div>,
      header: () => <span>Phone</span>,
    }),
    columnHelper.accessor('email', {
      id: 'state',
      cell: (info) => toTitleCase(info.getValue() || ''),
      header: () => <span>Email</span>,
    }),
    columnHelper.accessor('assigned_to', {
      header: () => 'Assigned',
      cell: (info) => info.renderValue(),
    }),
   

   
    columnHelper.accessor('createdAt', {
      header: 'CreatedAt',
      cell: (info) => info.renderValue(),
    }),
   
  ];

  let newData = [
    {
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },
    {
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },{
      name : "Hardik",
      phone : "6355129211",
      email : "hardik@gmail.com",
      assigned_to : "hardik",
      createdAt : "27 Dec 2023"

    },
  ]

  return (
    <div>
      <TransactionTable totalCount={newData.length} defaultData={newData} columns={cols} />
    </div>
  )
}
