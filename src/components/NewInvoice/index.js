import React from "react";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = [
    "#",
    "Item & Description",
    "HSN/SAC",
    "Qty",
    "Rate",
    "CGST",
    "SGST",
    "Amount",
];

export default function NewInvoice() {
    return (
        <div className=" bg-white  p-10 rounded-2xl">
            <div className="flex flex-row  gap-36 	border border-gray-500  ">
                <img
                    className="h-[100px] w-[100px]  p-2"
                    src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                    alt=""
                />
                <div className="grid  grid-cols-1 	">
                    <strong className="xl:text-2xl sm:text-xl	">
                        LEGAL WORKMATE
                    </strong>
                    <div className="text-gray-800 xl:text-sm break-all">
                        Company ID : U72900KA2021PTC15612
                    </div>
                    <div className="text-gray-800 xl:text-sm break-words">
                        Address : WeWork Prestige Central(HD-134),36,Infrantry
                        Road,<div>Bangalore, Karnataka-560001 </div><div>Karnataka-560001</div> India
                    </div>
                    <div className="text-gray-800 xl:text-sm break-all">
                        GST Number : GSTIN29AAKCC0098H1ZE
                    </div>
                </div>

                <strong className="xl:text-4xl sm:text-2xl self-end	 mx-16">
                    TAX INVOICE
                </strong>
            </div>
            <div className=" border border-gray-500 pb-4 px-2 py-2 xl:grid grid-cols-2  xl:divide-x-2  divide-solid divide-gray-500">
                <div className=" grid grid-col w-full">
                    <div className="grid  grid-cols-2">
                        Invoice No. :
                        <div>
                            <strong>INV-000000146</strong>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 ">
                        Invoice Date :
                        <div>
                            <strong>12/03/2024</strong>
                        </div>
                    </div>
                    <div className="grid  grid-cols-2">
                        Terms :
                        <div>
                            <strong>Due On Receipt</strong>
                        </div>
                    </div>
                    <div className="grid  grid-cols-2 ">
                        Due Date :
                        <div>
                            <strong>12/03/2024</strong>
                        </div>
                    </div>
                    <div className="grid  grid-cols-2  ">
                        P.O.# :
                        <div>
                            <strong className="break-all">
                                legal_order_id_ORDhOMweRVVoTbLs
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:px-2  xl:mx-10">
                    <div className="grid grid-cols-2  ">
                        Place Of Supply :
                        <div>
                            <strong>Karnataka</strong>
                        </div>
                    </div>
                    <div className="grid  grid-cols-2 ">
                        Whether the Supply Attracts :
                        <div>
                            <strong>NO</strong>
                        </div>
                    </div>
                    <div className="grid  grid-cols-2 ">
                        Reverse Charge :
                        <div>
                            <strong></strong>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-row  ">
                    <strong className="bg-gray-300 px-2  border border-gray-500">
                        Bill To:
                    </strong>
                    <strong className="text-blue-700 p-2  border border-gray-500">
                        Hardik Bhalodia
                    </strong>
                </div>
            </div>

            <table className=" w-full min-w-max table-auto text-center	">
                <thead>
                    <tr className=" border border-gray-500  divide-x-2 divide-solid divide-gray-500  bg-gray-300 p-4 ">
                        <th>#</th>
                        <th>Item & Description</th>
                        <th>HSN/SAC</th>
                        <th>Qty</th>
                        <th>Rate</th>

                        <th className="grid grid-cols-2 divide-x-2 divide-solid divide-gray-500 ">
                            <th className="flex flex-col">
                                <th className="	">SGST</th>
                                <hr className="border border-gray-500" />
                                <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                    <th>a</th>
                                    <th>a</th>
                                </th>
                            </th>

                            <th className="flex flex-col">
                                <th className="	">SGST</th>
                                <hr className="border border-gray-500" />
                                <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                    <th>a</th>
                                    <th>a</th>
                                </th>
                            </th>
                        </th>

                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody className=" border border-gray-500 divide-y-2  divide-solid divide-gray-500">
                    <tr className="divide-x-2 divide-solid divide-gray-500">
                        <td>1</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        <td>1</td>
                        <td>1</td>
                        <th className="grid grid-cols-2 divide-x-2 divide-solid divide-gray-500 ">
                            <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                <th>9%</th>
                                <th>0.08</th>
                            </th>

                            <th className="flex flex-col">
                                <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                    <th>9%</th>
                                    <th>0.08</th>
                                </th>
                            </th>
                        </th>

                        <td>1</td>
                    </tr>
                    <tr className="divide-x-2 divide-solid divide-gray-500">
                        <td>2</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        <td>1</td>
                        <td>1</td>
                        <th className="grid grid-cols-2 divide-x-2 divide-solid divide-gray-500 ">
                            <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                <th>9%</th>
                                <th>0.08</th>
                            </th>

                            <th className="flex flex-col">
                                <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                    <th>9%</th>
                                    <th>0.08</th>
                                </th>
                            </th>
                        </th>
                        <td>1</td>
                    </tr>
                    <tr className="divide-x-2 divide-solid divide-gray-500">
                        <td>3</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        <td>1</td>
                        <td>1</td>
                        <th className="grid grid-cols-2 divide-x-2 divide-solid divide-gray-500 ">
                            <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                <th>9%</th>
                                <th>0.08</th>
                            </th>

                            <th className="flex flex-col">
                                <th className=" grid grid-cols-2 divide-x-2  divide-solid divide-gray-500 ">
                                    <th>9%</th>
                                    <th>0.08</th>
                                </th>
                            </th>
                        </th>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>

            <div className="xl:grid grid-cols-2  border border-gray-500 px-2 xl:divide-x-2  divide-solid divide-gray-500 ">
                <div className="flex flex-col mt-7">
                    Total in Words
                    <strong>Indian Rupee One Only</strong>
                    <div className=" text-sm  mt-5">
                        Thanks for making carbon neturalisation your defalut
                        choice :)
                    </div>
                    <div className=" text-sm mt-5">Terms & Condition</div>
                    <div className="text-sm">
                        https://www.climes.io/terms-and-conditions
                    </div>
                    <div className="text-sm mt-5">
                        Reversed charge mechanism not applicable
                    </div>
                </div>
                <div className="xl:grid grid-rows-2  xl:divide-y-2  divide-solid divide-gray-500">
                    <div className="grid grid-cols-2 justify-items-end mt-3  ">
                        <div className="grid grid-rows-2 justify-items-end">
                            <div>Sub Total</div>
                            <div className="text-sm text-gray-600">
                                (Tax Inclusive)
                            </div>
                        </div>
                        <div>1.00</div>
                        <div>CGST9(9%)</div>
                        <div>0.08</div>
                        <div>SGST9(9%)</div>
                        <div>0.08</div>
                        <strong>Total</strong>
                        <strong>Rs 1.00</strong>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            className="h-[100px] w-[100px]  p-2"
                            src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                            alt=""
                        />
                        <div className="text-sm">Authorized Signature</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
