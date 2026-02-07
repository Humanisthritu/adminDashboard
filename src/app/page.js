"use client"
import Box from "@/components/DashboardBoxes";
import { TbUsers } from "react-icons/tb";
import { IoGiftOutline } from "react-icons/io5";
import { LiaProductHunt } from "react-icons/lia";
import { MdCategory } from "react-icons/md";
import ProductsComponent from "@/components/products";
import UsersComponent from "@/components/Users";
import SalesAndUsersCharts from "@/components/SalesAndUserCharts";


export default function Home() {
  
  return (
    <div className="p-5">
    <div className="grid grid-cols-4 gap-3 m-2">
      <Box
       title={"Total Users"} 
       count="4356" 
       icon={<TbUsers size={30} className="text-white ml-auto" />} bg="bg-[#02B290]" size={40}
       link="/users" className="bg-white"
      />
       <Box title={"Total Orders"} count="3456" icon={<IoGiftOutline size={30} className="text-white ml-auto" />} bg="bg-[#3872fa]" size={40}
        link="/orders" className="bg-white"
      />
       <Box title={"Total Product"} count="1234" icon={<LiaProductHunt size={30} className="text-white ml-auto" />} bg="bg-[#4f49e4]" size={40}
        link="/products" className="bg-white"
      />
       <Box title={"Total Category"} count="15" icon={<MdCategory  size={30} className="text-white ml-auto" />} bg="bg-[#f22c61]" size={40}
        link="/category" className="bg-white"
      />
    </div>
    
    <div className="py-2">
     <ProductsComponent/>
    </div>

     <div className="py-2">
     <UsersComponent/>
    </div>
    
    <div className="py-2">
      <SalesAndUsersCharts/>
    </div>

    </div>
    
  );
}
