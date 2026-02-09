"use client"
import UpLoadBox from '@/components/UploadBox'
import { Button, MenuItem, Rating, Select } from '@mui/material'
import React, { useState } from 'react'

const AddProduct = () => {
    const [categoryVal, setCategoryVal] = useState("Breakfast & Dairy")
    const [isFeaturedVal, setIsFeaturedVal] = useState("")

    const handleChange = (event) => {
        setCategoryVal(event.target.value)
    }

    const handleChangeIsFeaturedVal = (event) => {
        setIsFeaturedVal(event.target.value)
    }
    return (
        <div className='px-5 py-4'>
            <div className="bg-white shadow-md rounded-md p-5">
                <h2 className="text-[18px] text-gray-700 font-[600]">
                    Add Product
                </h2>

                <form className="mt-5">
                    <div className="form-group mb-4 flex flex-col gap-1">
                        <span className="text-[15px] text-gray-800">
                            Product Name
                        </span>

                        <input
                            type="text"
                            className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm focus:border-[rgba(0,0,0,0.4)] px-3 text-[14px]"
                        />
                    </div>

                    <div className="form-group mb-4 flex flex-col gap-1">
                        <span className="text-[15px] text-gray-800">
                            Product Description
                        </span>

                        <textarea
                            type="text"
                            className="w-full h-[120px] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm focus:border-[rgba(0,0,0,0.4)] px-3 py-3 text-[14px]"
                        />
                    </div>

                    <div className='grid grid-cols-4 gap-5'>
                        <div className='col flex flex-col gap-1'>
                            <span className="text-[15px] text-gray-800">
                                Product Category
                            </span>
                            <Select
                                value={categoryVal}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'without label' }}
                                size='small'
                                className='w-full'
                            >
                                <MenuItem value={"Fruits & Vegetables"}>Fruits & Vegetables</MenuItem>
                                <MenuItem value={"Meats & Seafood"}>Meats & Seafood</MenuItem>
                                <MenuItem value={"Breakfast & Dairy"}>Breakfast & Dairy</MenuItem>
                            </Select>
                        </div>

                        <div className="col flex flex-col gap-1">
                            <span className="text-[15px] text-gray-800">
                                Product Price
                            </span>

                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm focus:border-[rgba(0,0,0,0.4)] px-3 py-3 text-[14px]"
                            />
                        </div>

                        <div className='col flex flex-col gap-1'>
                            <span className="text-[15px] text-gray-800">
                                Product Category
                            </span>
                            <Select
                                value={categoryVal}
                                onChange={handleChangeIsFeaturedVal}
                                displayEmpty
                                inputProps={{ 'aria-label': 'without label' }}
                                size='small'
                                className='w-full'
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>false</MenuItem>

                            </Select>
                        </div>

                        <div className="col flex flex-col gap-1">
                            <span className="text-[15px] text-gray-800">
                                Product Stock
                            </span>

                            <input
                                type="number"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm focus:border-[rgba(0,0,0,0.4)] px-3 py-3 text-[14px]"
                            />
                        </div>

                        <div className="col flex flex-col gap-1">
                            <span className="text-[15px] text-gray-800">
                                Product Brand
                            </span>

                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm focus:border-[rgba(0,0,0,0.4)] px-3 py-3 text-[14px]"
                            />
                        </div>

                        <div className="col flex flex-col gap-1">
                            <span className="text-[15px] text-gray-800">
                                Product Discount
                            </span>

                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm focus:border-[rgba(0,0,0,0.4)] px-3 py-3 text-[14px]"
                            />
                        </div>
                        <div className="col flex flex-col gap-1">
                            <span className="text-[15px] text-gray-800">
                                Product Rating
                            </span>

                            <Rating name="read-only" value={5} readOnly size='small' />
                        </div>


                    </div>

                    <div className='flex flex-col gap-1 mt-5'>
                        <h2 className="text-[16px] text-gray-700 font-[600]">
                            Media & Image
                        </h2>
                        <div className='flex items-center gap-4 mt-2'>
                            <div className="w-[150px] h-[120px] rounded-md bg-gray-100 border border-dashed border-[rgba(0,0,0,0.1)] flex items-center justify-center flex-col gap-2 relative">
                                <img src="/product1.webp" alt="" className='w-full object-cover' />
                            </div>

                            <span className='flex items-center justify-center bg-red-700 rounded-full w-6 h-6 absolute-top-[5px] -right-[5px] cursor-pointer'></span>
                            <UpLoadBox />



                        </div>

                    </div>

                <br/>    

                <Button className="btn-g !px-7">
                   Publish & View
                </Button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
