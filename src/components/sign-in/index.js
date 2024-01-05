"use client";
import React, { useState } from "react";

/* NEXTJS COMPONENTS */
import Image from "next/image";
import Link from "next/link";

/* COMPONENTS */
import InputField from "@/src/components/core/input";

/* IMAGES */
import Logo from "@/public/images/logos/dummy-logo.png";

/* ICONS */
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";
import { useAuth } from "@/src/lib/auth/appwrite/useAuth";
import { useRouter } from "next/router";


const SignInComponent = () => {

  const [togglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { emailLogin,getToken } = useAuth()
  const router = useRouter()
  
  const handleSubmit = async (e) => {
    console.log("%c 🧀 email", "color:#4fff4B", email);
    console.log("%c 🍺 password", "color:#4fff4B", password);
    e.preventDefault()
   
    try {
      const result = await emailLogin(email.trim(), password.trim())
      console.log("%c 🥒 result", "color:#b03734", result);
     
      router.push("/")
     
    } catch (err) {
      console.log("HERE IS ERRRR",err)
     
    }
  }

  return (<div className="container">
  <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1">
    <div className="h-[calc(100vh-40px)]">
      <div className="container h-full flex items-center">
        <div className="w-full xl:w-9/12 lg:w-9/12 md:w-full mx-auto">
          <Image src={Logo} className="w-16 h-16" alt="Company Logo" />
          <h1 className="mt-5 font-bold text-[24px] font-sfpro-bold">
            Welcome back
          </h1>
          <p className="mt-1 text-[#808080] font-mabry-medium text-[15px]">
            Enter your email address and password to access your account
            and manage your company details
          </p>

          {/* FORM */}
          <form className="mt-7" onSubmit={handleSubmit}>
            <div className="form-group">
              <InputField
                type="email"
                label="Email Address"
                value={email}
                onChange={(value) => setEmail(value)}
              />
            </div>
            <div className="form-group mt-5 relative">
              <InputField
                type={togglePassword ? "text" : "password"}
                label="Password"
                value={password}
                onChange={(value) => setPassword(value)}
              />
              <button
                type="button"
                className="p-2 rounded-full hover:bg-black hover:bg-opacity-5 absolute top-2 right-2"
                onClick={() => setTogglePassword(!togglePassword)}
              >
                {togglePassword ? (
                  <EyeSlashIcon className="w-4 h-4 text-gray-500" />
                ) : (
                  <EyeIcon className="w-4 h-4 text-gray-500" />
                )}
              </button>
            </div>
            <div className="form-group mt-3 flex items-center justify-end">
              <Link
                href="/forgot-password"
                className="text-[13px] text-[#808080] hover:text-[#101727] font-mabry-medium"
              >
                Forgot Password ?
              </Link>
            </div>
            <button
              type="submit"
              className="mt-5 bg-[#101727] text-white w-full rounded-lg font-mabry-medium text-sm py-[7px] border-2 border-[#101727] hover:bg-white hover:text-[#101727] transition-all duration-300 ease-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="auth-banner col-span-2 h-[calc(100vh-40px)] rounded-2xl hidden xl:block lg:block md:hidden" />
  </div>
</div>)
}

export default SignInComponent;