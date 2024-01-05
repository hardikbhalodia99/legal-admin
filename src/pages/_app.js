import React from "react";
import '@/styles/globals.css';
import "react-toastify/dist/ReactToastify.css"

/* NEXTJS IMPORTS */
import { useRouter } from 'next/router';

/* LAYOUT */
import Layout from "@/src/layouts/index";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const LayoutComponent = router.pathname.includes("/sign-in") || router.pathname.includes("/payment") || router.pathname.includes("/404") ? React.Fragment : Layout;

  return (
    <LayoutComponent>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        className="rounded-5xl"
      />
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
