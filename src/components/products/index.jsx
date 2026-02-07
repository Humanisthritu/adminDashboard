"use client"
import { Button, MenuItem, Rating, Select } from '@mui/material'
import React, { useState } from 'react'
import Search from '../Search'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import { RiEdit2Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const ProductsComponent = () => {
    const [category, setCategory] = useState("")

    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }

    const columns = [
        { id: 'ID', label: 'ID', minWidth: 90 },
        { id: 'PRODUCT', label: 'PRODUCT', minWidth: 300 },
        { id: 'CATEGORY', label: 'CATEGORY', minWidth: 300 },
        { id: 'PRICE', label: 'PRICE', minWidth: 300 },
        { id: 'STOCK', label: 'STOCK', minWidth: 300 },
        { id: 'RATING', label: 'RATING', minWidth: 300 },
        { id: 'ACTIONS', label: 'ACTIONS', minWidth: 300 },
    ];
    return (
        <>
            <section className='w-full py-2'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[18px] text-gray-700 font-[600]'>Products</h2>
                    <Button className='btn-g' size='small'>Add product</Button>
                </div>

                <div className='w-full p-4 rounded-md shadow-md bg-white mt-3'>
                    <div className='flex items-center justify-between'>
                        <div className='col w-[200px]'>
                            <h6 className='mb-1 text-[14px] text-gray-700'>Category By</h6>
                            <Select
                                value={category}
                                onChange={handleChangeCategory}
                                displayEmpty
                                inputProps={{ 'aria-label': 'without label' }}
                                size='small'
                                className='w-full'
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </div>

                        <div className='col w-[200px]'>
                            <Search width='400px' placeholder="Search product..." />
                        </div>

                    </div>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center gap-3'>
                                            <div className='img p-1 bg-white rounded-md'>
                                                <Image src={"/product1.webp"} alt="product image" width={80} height={80} className='object-cover' />
                                            </div>

                                            <div className='info'>
                                                <h3 className='text-[13px] text-gray-800 font-[600]'>Fortune Sunlite Refined Snnflower Oil</h3>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        Grocery
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex flex-col'>
                                            <span className='text-[#CB0000] text-[18px] font-[600]'>$25.99</span>
                                            <span className='text-[#A4A4A4] text-[18px] font-[600] line-through'>$38.99</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <span className='text-primary font-bold'>
                                            434
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <Rating name="read-only" value={5} readOnly size='small' />
                                    </TableCell>

                                    <TableCell>
                                    <div className='flex items-center gap-1'>
                                     <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <RiEdit2Line size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <IoEyeOutline size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <FaRegTrashAlt size={16}/>
                                     </Button>
                                    </div>

                                    </TableCell>




                                </TableRow>
                                 <TableRow >
                                    <TableCell>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center gap-3'>
                                            <div className='img p-1 bg-white rounded-md'>
                                                <Image src={"/product1.webp"} alt="product image" width={80} height={80} className='object-cover' />
                                            </div>

                                            <div className='info'>
                                                <h3 className='text-[13px] text-gray-800 font-[600]'>Fortune Sunlite Refined Snnflower Oil</h3>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        Grocery
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex flex-col'>
                                            <span className='text-[#CB0000] text-[18px] font-[600]'>$25.99</span>
                                            <span className='text-[#A4A4A4] text-[18px] font-[600] line-through'>$38.99</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <span className='text-primary font-bold'>
                                            434
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <Rating name="read-only" value={5} readOnly size='small' />
                                    </TableCell>

                                    <TableCell>
                                    <div className='flex items-center gap-1'>
                                     <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <RiEdit2Line size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <IoEyeOutline size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <FaRegTrashAlt size={16}/>
                                     </Button>
                                    </div>

                                    </TableCell>




                                </TableRow>

                                 <TableRow >
                                    <TableCell>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center gap-3'>
                                            <div className='img p-1 bg-white rounded-md'>
                                                <Image src={"/product1.webp"} alt="product image" width={80} height={80} className='object-cover' />
                                            </div>

                                            <div className='info'>
                                                <h3 className='text-[13px] text-gray-800 font-[600]'>Fortune Sunlite Refined Snnflower Oil</h3>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        Grocery
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex flex-col'>
                                            <span className='text-[#CB0000] text-[18px] font-[600]'>$25.99</span>
                                            <span className='text-[#A4A4A4] text-[18px] font-[600] line-through'>$38.99</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <span className='text-primary font-bold'>
                                            434
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <Rating name="read-only" value={5} readOnly size='small' />
                                    </TableCell>

                                    <TableCell>
                                    <div className='flex items-center gap-1'>
                                     <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <RiEdit2Line size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <IoEyeOutline size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <FaRegTrashAlt size={16}/>
                                     </Button>
                                    </div>

                                    </TableCell>




                                </TableRow>

                                 <TableRow >
                                    <TableCell>
                                        <Checkbox {...label} size='small' />
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center gap-3'>
                                            <div className='img p-1 bg-white rounded-md'>
                                                <Image src={"/product1.webp"} alt="product image" width={80} height={80} className='object-cover' />
                                            </div>

                                            <div className='info'>
                                                <h3 className='text-[13px] text-gray-800 font-[600]'>Fortune Sunlite Refined Snnflower Oil</h3>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        Grocery
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex flex-col'>
                                            <span className='text-[#CB0000] text-[18px] font-[600]'>$25.99</span>
                                            <span className='text-[#A4A4A4] text-[18px] font-[600] line-through'>$38.99</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <span className='text-primary font-bold'>
                                            434
                                        </span>
                                    </TableCell>

                                    <TableCell>
                                        <Rating name="read-only" value={5} readOnly size='small' />
                                    </TableCell>

                                    <TableCell>
                                    <div className='flex items-center gap-1'>
                                     <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <RiEdit2Line size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <IoEyeOutline size={20}/>
                                     </Button>
                                      <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'> 
                                      <FaRegTrashAlt size={16}/>
                                     </Button>
                                    </div>

                                    </TableCell>




                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>
            </section>
        </>
    )
}

export default ProductsComponent
