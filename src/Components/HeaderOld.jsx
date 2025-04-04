import React, { useState } from 'react'
import logo from './../assets/Image/logodisney.jpg'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiTv, 
    HiPlayCircle} from "react-icons/hi2";
import {HiPlus, HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const menu=[
        {
            name:'Home',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
    
    const [toogle, setToogle] = useState(false)

  return (
    <div className='flex items-center gap-8 justify-between p-5 w-full'>
        <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
            <div className='hidden md:flex gap-8'>
            {menu.map((item, index) =>(
                <HeaderItem name={item.name} Icon={item.icon}/>
            ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item, index) => index < 3&&(
                    <HeaderItem name={""} Icon={item.icon}/>
                ))}
                <HiDotsVertical onClick={()=> setToogle(!toogle)} className='text-white'/>
                {toogle ? (
                    <div className='absolute top-16 right-6 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 rounded flex flex-col gap-3'>
                        {menu.map((item, index) => index > 2&&(
                            <HeaderItem name={item.name} Icon={item.icon}/>
                        ))}
                    </div>
                ): null}
            </div>
        </div>
        
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
