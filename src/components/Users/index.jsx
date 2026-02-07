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
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const UsersComponent = () => {
    const [category, setCategory] = useState("")

    const handleChangeCategory = (event) => {
        setCategory(event.target.value)
    }

    const columns = [
        { id: 'ID', label: 'ID', minWidth: 90 },
        { id: 'USER', label: 'USER', minWidth: 300 },
        { id: 'PHONE NUMBER', label: 'CATEGORY', minWidth: 100 },
        { id: 'CREATED AT', label: 'CREATED AT', minWidth: 300 },
        { id: 'ACTIONS', label: 'ACTIONS', minWidth: 300 },
    ];
    return (
        <>
            <section className='w-full '>


                <div className='w-full p-4 rounded-md shadow-md bg-white mt-3'>
                    <div className='flex items-center justify-between'>
                        <div className='col w-[200px]'>
                            <h6 className='mb-1 text-[14px] text-gray-700'>Users</h6>

                        </div>

                        <div className='col w-[200px]'>
                            <Search width='400px' placeholder="Search user..." />
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
                                                <h3 className='text-[13px] text-gray-800 font-[600]'>Ritu kujur</h3>
                                                <span className='text-gray-700 text-[13px] flex items-center gap-1'><MdOutlineEmail size={20} />ritu@gmail.com</span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        Grocery
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center'>
                                            <MdOutlinePhone size={20} />
                                            <span className='text-gray-700 text-[13px]'>+92 9873798202</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>       
                                            <div className='flex items-center gap-1'>
                                                <MdOutlineDateRange size={20}/>
                                                <span className='text-gray-700 text-[13px]'>2025-06-04</span>
                                            </div>
                                    </TableCell>

                                    <TableCell>
                                        <Rating name="read-only" value={5} readOnly size='small' />
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center gap-1'>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <RiEdit2Line size={20} />
                                            </Button>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <IoEyeOutline size={20} />
                                            </Button>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <FaRegTrashAlt size={16} />
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
                                                <h3 className='text-[13px] text-gray-800 font-[600]'>Ritu kujur</h3>
                                                <span className='text-gray-700 text-[13px] flex items-center gap-1'><MdOutlineEmail size={20} />ritu@gmail.com</span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        Grocery
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center'>
                                            <MdOutlinePhone size={20} />
                                            <span className='text-gray-700 text-[13px]'>+92 9873798202</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>       
                                            <div className='flex items-center gap-1'>
                                                <MdOutlineDateRange size={20}/>
                                                <span className='text-gray-700 text-[13px]'>2025-06-04</span>
                                            </div>
                                    </TableCell>

                                    <TableCell>
                                        <Rating name="read-only" value={5} readOnly size='small' />
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center gap-1'>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <RiEdit2Line size={20} />
                                            </Button>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <IoEyeOutline size={20} />
                                            </Button>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <FaRegTrashAlt size={16} />
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
                                                <h3 className='text-[13px] text-gray-800 font-[600]'>Ritu kujur</h3>
                                                <span className='text-gray-700 text-[13px] flex items-center gap-1'><MdOutlineEmail size={20} />ritu@gmail.com</span>
                                            </div>
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        Grocery
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center'>
                                            <MdOutlinePhone size={20} />
                                            <span className='text-gray-700 text-[13px]'>+92 9873798202</span>
                                        </div>
                                    </TableCell>

                                    <TableCell>       
                                            <div className='flex items-center gap-1'>
                                                <MdOutlineDateRange size={20}/>
                                                <span className='text-gray-700 text-[13px]'>2025-06-04</span>
                                            </div>
                                    </TableCell>

                                    <TableCell>
                                        <Rating name="read-only" value={5} readOnly size='small' />
                                    </TableCell>

                                    <TableCell>
                                        <div className='flex items-center gap-1'>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <RiEdit2Line size={20} />
                                            </Button>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <IoEyeOutline size={20} />
                                            </Button>
                                            <Button className='w-[40px]! h-[40px]! min-w-[40px]! rounded-full text-gray-900!'>
                                                <FaRegTrashAlt size={16} />
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

export default UsersComponent
