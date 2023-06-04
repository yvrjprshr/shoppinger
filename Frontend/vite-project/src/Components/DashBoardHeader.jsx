import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import image from "../assets/Free_Sample_By_Wix.jpg"
import { AiOutlineGift } from 'react-icons/ai'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { FiPackage, FiShoppingBag } from "react-icons/fi"
import { BiMessageSquareDetail } from 'react-icons/bi'
import { backend_url } from '../server'
const DashBoardHeader = () => {
    const { seller } = useSelector((state) => state.seller)
    return (
        <div className='w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4'>
            <div>
                <Link to="/dashboard">
                    <img src={image} alt="image" width={'45%'} height={'45%'} />
                </Link>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center mr-4'>
                    <Link to="/dashboard/coupons" className='800px:block hidden'>
                        <AiOutlineGift color="#555" size={30} className='mr-5 cursor-pointer'></AiOutlineGift>
                    </Link>
                    <Link to="/dashboard-events" className='800px:block hidden'>
                        <MdOutlineLocalOffer color="#555" size={30} className='mr-5 cursor-pointer' />
                    </Link>
                    <Link to="/dashboard-products" className='800px:block hidden'>
                        <FiShoppingBag color="#555" size={30} className='mr-5 cursor-pointer' />
                    </Link>
                    <Link to="/dashboard-orders" className='800px:block hidden'>
                        <FiPackage color="#555" size={30} className='mr-5 cursor-pointer' />
                    </Link>
                    <Link to="/dashboard-messages" className='800px:block hidden'>
                        <BiMessageSquareDetail color="#555" size={30} className='mr-5 cursor-pointer' />
                    </Link>
                    <Link to={`/shop/${seller._id}`}>
                        <img src={`${backend_url}${seller.avatar}`} className='w-[50px] h-[50px] rounded-full object-cover' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DashBoardHeader