"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import { Collapse } from 'react-collapse'

import { RxDashboard } from "react-icons/rx"
import { LiaImageSolid } from "react-icons/lia"
import { TbUsers } from "react-icons/tb"
import { MdOutlineCategory } from "react-icons/md"
import { TbBrandProducthunt } from "react-icons/tb"
import { IoBagCheckOutline } from "react-icons/io5"
import { PiImagesSquare } from "react-icons/pi"
import { IoIosLogOut } from "react-icons/io"
import { LiaAngleDownSolid } from "react-icons/lia"

const Sidebar = () => {

  const [isOpenTab, setIsOpenTab] = useState(null)

  const sidebarTabs = [
    {
      name: "Dashboard",
      icon: <RxDashboard size={20} />,
      href: "/"
    },
    {
      name: "Home Slides",
      icon: <LiaImageSolid size={20} />,
      children: [
        { name: "Home Slides list", href: "/home-slides" },
        { name: "Add Home Slides", href: "/add-home-slides" },
      ]
    },
    {
      name: "Category",
      icon: <MdOutlineCategory size={20} />,
      children: [
        { name: "Category list", href: "/category-list" },
        { name: "Add New Category", href: "/add-Category" },
      ]
    },
    {
      name: "Products",
      icon: <TbBrandProducthunt size={20} />,
      children: [
        { name: "Products list", href: "/products-list" },
        { name: "Add New Product", href: "/products-list/add-product" },
      ]
    },
    {
      name: "Users",
      icon: <TbUsers size={20} />,
      href: "/users"
    },
    {
      name: "Orders",
      icon: <IoBagCheckOutline size={20} />,
      href: "/orders"
    },
    {
      name: "Banners",
      icon: <PiImagesSquare size={20} />,
      href: "/orders"
    },
    {
      name: "Logout",
      icon: <IoIosLogOut size={20} />,
      href: null
    }
  ]

  const toggleTab = (index) => {
    setIsOpenTab(isOpenTab === index ? null : index)
  }

  return (
    <aside className='w-full px-2 sticky top-0 z-50'>

      {/* LOGO */}
      <div className='p-4'>
        <Link href={"/"}>
          <img src={"/bazar-logo.png"} alt='logo' className='w-[200px]' />
        </Link>
      </div>

      {/* MENU */}
      <div className='scrolling'>

        {sidebarTabs.map((item, index) => (

          <React.Fragment key={item.name}>

            {/* SIMPLE LINK */}
            {item.href ? (
              <Link href={item.href}>
                <Button
                  className='w-full! text-left! justify-start! capitalize! text-gray-800! text-[16px]! hover:bg-gray-200! px-4! py-[8px]! gap-3 group'
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ) : (

              /* DROPDOWN BUTTON */
              <Button
                onClick={() => toggleTab(index)}
                className='w-full! text-left! justify-start! capitalize! text-gray-800! text-[16px]! hover:bg-gray-200! px-4! py-[8px]! gap-3'
              >
                {item.icon}
                {item.name}

                {item.children && (
                  <LiaAngleDownSolid
                    size={15}
                    className={`ml-auto transition-all duration-300 ${isOpenTab === index ? 'rotate-180' : ''}`}
                  />
                )}
              </Button>
            )}

            {/* DROPDOWN CONTENT */}
            {item.children && (
              <Collapse isOpened={isOpenTab === index}>
                <div className='dropdown w-full flex flex-col gap-3 pl-12 py-1'>
                  {item.children.map((tab) => (
                    <Link
                      key={tab.name}
                      href={tab.href}
                      className='text-[14px] flex items-center gap-3 text-gray-600 hover:text-primary'
                    >
                      {tab.name}
                    </Link>
                  ))}
                </div>
              </Collapse>
            )}

          </React.Fragment>

        ))}

      </div>

    </aside>
  )
}

export default Sidebar
