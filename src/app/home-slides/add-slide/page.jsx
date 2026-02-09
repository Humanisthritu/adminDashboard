"use client"
import UploadBox from '@/components/UploadBox'
import React from 'react'
import { IoMdClose } from "react-icons/io";

const AddSlide = () => {
    return (
        <section className='w-full py-3 px-5'>
            <h2 className='text-[18px] text-gray-700 font-[600]'>Add Slide</h2>

            <form className='mt-5'>
                <div className='flex flex-col gap-1 mt-5'>
                    <h2 className="text-[16px] text-gray-700 font-[600]">
                        Media & Image
                    </h2>

                    <div className='flex items-center gap-4 mt-2 bg-white p-5 shadow-md rounded-md'>

                        {/* IMAGE BOX */}
                        <div className="relative w-[150px] h-[120px] rounded-md bg-gray-100 border border-dashed border-[rgba(0,0,0,0.1)] flex items-center justify-center">

                            <img
                                src="/product1.webp"
                                alt=""
                                className='w-full h-full object-cover rounded-md'
                            />

                            {/* CLOSE BUTTON */}
                            <span className='absolute flex items-center justify-center bg-red-700 rounded-full w-6 h-6 -top-2 -right-2 cursor-pointer'>
                                <IoMdClose size={16} className='text-white' />
                            </span>

                        </div>

                        <UploadBox />

                    </div>
                </div>
            </form>
        </section>

    )
}

export default AddSlide