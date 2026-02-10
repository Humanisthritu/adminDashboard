"use client";

import OtpBox from "@/components/OtpBox";
import { Button, IconButton, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const VerifyOtp = () => {
    const [otp, setOtp] = useState()

    const handleChangeOTP = (value) => {
     setOtp(value)
    }

    const handleSubmit = (e) => {
     e.preventDefault()
     alert(otp)
    }
  return (
    <>
     <section className="relative overflow-hidden py-20 w-full bg-gray-100 flex items-center justify-center">
      <div className="container">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg border border-[rgba(0,0,0,0.1)] w-[500px] mx-auto">
          <div className="text-center">
            <img src={"/verify-otp.png"} alt="image"  className="m-auto"/>
            <h1 className="text-center text-[20px] font-[500] text-gray-800  mt-5">
              Verify OTP?
            </h1>
           <span className="text-[16px] flex items-center justify-center gap-1 mb-4">
            OTP send to 
             <span className="text-primary font-bold">
              rit2026@gmail.com
           </span>
           </span>
          </div>


         <div className="flex items-center justify-center">
         <OtpBox length={6} onChange={handleChangeOTP}/>
         </div>

          <Button className="w-full btn-g !py-4 !text-[16px] mt-2">
            Submit
          </Button>

          
        </form>
      </div>

      <div className="circle1 !bg-primary opacity-25 w-[400px] h-[400px] rounded-full absolute -bottom-[40px] -left-[15%]"></div>


      <div className="circle2 !bg-primary opacity-25 w-[400px] h-[400px] rounded-full absolute -top-[120px] -right-[15%]"></div>
    </section>
    </>
  )
}

export default VerifyOtp