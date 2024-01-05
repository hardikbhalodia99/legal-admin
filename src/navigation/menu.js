import { HomeIcon, UserGroupIcon, Cog8ToothIcon, CurrencyRupeeIcon, DocumentTextIcon, IdentificationIcon } from "@heroicons/react/24/solid";


const topMenu = [
  {
    id: 1,
    icon: <HomeIcon className="w-5 h-5"/>,
    link: "/",
    name: "Dashboard",
  },
  {
    id: 2,
    icon: <UserGroupIcon className="w-5 h-5"/>,
    link: "/employees",
    name: "Employee Management",
  },
  {
    id: 2,
    icon: <CurrencyRupeeIcon className="w-5 h-5"/>,
    link: "/transactions",
    name: "Transactions",
  },
  {
    id: 2,
    icon: <DocumentTextIcon className="w-5 h-5"/>,
    link: "/invoices",
    name: "Invoices",
  },
  {
    id: 3,
    icon: <IdentificationIcon className="w-5 h-5"/>,
    link: "/pvt-users",
    name: "Pvt Ltd Clients",
  },
  {
    id: 4,
    icon: <IdentificationIcon className="w-5 h-5"/>,
    link: "/opc-users",
    name: "Opc Clients",
  },
  {
    id: 5,
    icon: <IdentificationIcon className="w-5 h-5"/>,
    link: "/llp-users",
    name: "LLP Clients",
  },
 

];

const bottomMenu = [
  {
    id: 1,
    icon: <Cog8ToothIcon className="w-5 h-5"/>,
    link: "/settings",
    name: "Settings",
  },
];

export { bottomMenu, topMenu };