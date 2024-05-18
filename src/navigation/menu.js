import { HomeIcon, UserGroupIcon, Cog8ToothIcon, CurrencyRupeeIcon, DocumentTextIcon, IdentificationIcon, ArchiveBoxIcon, InboxIcon, DocumentIcon, WalletIcon } from "@heroicons/react/24/solid";


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

  {
    id: 6,
    icon: <ArchiveBoxIcon className="w-5 h-5"/>,
    link: "/gst-return",
    name: "GST Return",
  },
  {
    id: 7,
    icon: <WalletIcon className="w-5 h-5"/>,
    link: "/accounting",
    name: "Accounting",
  },
  {
    id: 8,
    icon: <DocumentIcon className="w-5 h-5"/>,
    link: "/tds-return",
    name: "TDS Return",
  },
  {
    id: 9,
    icon: <InboxIcon className="w-5 h-5"/>,
    link: "/professional-tax",
    name: "Professional Tax",
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