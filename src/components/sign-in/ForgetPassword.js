import React from 'react'
import Button from '../core/button'
import Link from 'next/link'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import InputField from "@/src/components/core/input";
import Image from 'next/image';

export default function ForgetPassword() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1">
    <div className="h-[calc(100vh-40px)]">
      <div className="container h-full flex items-center">
        <div className="w-full xl:w-9/12 lg:w-9/12 md:w-full mx-auto">
         
          <h1 className="mt-5 font-bold text-[24px] font-sfpro-bold">
            Forgot Password
          </h1>
          <p className="mt-1 text-[#808080] font-mabry-medium text-[15px]">
            Enter your registered email
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
            <Button
              type="primary"
              full={true}
              size="medium"
              label={"Login"}
              btnType={"submit"}
              loading={loading}
            />
             
            
          </form>
        </div>
      </div>
    </div>
    <div className="auth-banner col-span-2 h-[calc(100vh-40px)] rounded-2xl hidden xl:block lg:block md:hidden" />
  </div>
  )
}
