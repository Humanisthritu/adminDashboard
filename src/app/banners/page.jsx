"use client"
import { Button, MenuItem, Rating, Select } from '@mui/material'
import React, { useState } from 'react'
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
import Link from 'next/link';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const HomeSlides = () => {
    const [category, setCategory] = useState("")

    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }

    const columns = [
        { id: 'IMAGE', label: 'IMAGE', minWidth: 90 },
        { id: 'ACTIONS', label: 'ACTIONS', minWidth: 300 },
    ];
    return (
        <>
            <section className='w-full py-3 px-5'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[18px] text-gray-700 font-[600]'>Banners Slides</h2>
                    <Link href={"/home-slides/add-home-slide"}>
                      <Button className='btn-g' size='small'>Add Banner</Button>
                    </Link>
                </div>

                <div className='w-full p-4 rounded-md shadow-md bg-white mt-3'>
                   
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
                                    <TableCell className='!px-0'>
                                        <div className='flex items-center gap-3'>
                                            <div className='img p-1 bg-white rounded-md'>
                                                <Image src={"/poster1.jpg"} alt="product image" width={200} height={80} className='object-cover hover:scale-105 transition-all' />
                                            </div>
                                        </div>
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
                                        <div className='flex items-center gap-3'>
                                            <div className='img p-1 bg-white rounded-md'>
                                                <Image src={"/product1.webp"} alt="product image" width={80} height={80} className='object-cover' />
                                            </div>

                                            <div className='info'>
                                                <h3 className='text-[13px] text-gray-800 font-[600]'></h3>
                                            </div>
                                        </div>
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

export default HomeSlides
