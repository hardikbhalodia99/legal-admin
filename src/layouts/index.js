import React, { useState } from "react";

/* COMPONENTS */
import DashboardHeader from "./header";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

    return (
      <div className="bg-[#F5F5FA]">
        {/* HEADER */}
        <DashboardHeader setMobileNavbar={setMobileNavbar} mobileNavbar={mobileNavbar} />

        {/* BODY */}
        <div className="grid grid-cols-1 xl:grid-cols-7 lg:grid-cols-7 md:grid-cols-1">
          <Sidebar mobileNavbar={mobileNavbar} setMobileNavbar={setMobileNavbar} />
          <div className="col-span-6">{children}</div>
        </div>
      </div>
    );
};

export default DashboardLayout;