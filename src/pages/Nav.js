import React from 'react';
import { RiHome6Fill } from 'react-icons/ri';
import { BsChevronDown } from 'react-icons/bs'
import { NavLink, Link } from 'react-router-dom';

const NavData = [
    {
        id: '1',
        title: "Rent",
        path: '/rent',
        icon: null
    },
    {
        id: '2',
        title: "Buy",
        path: '/buy',
        icon: null
    },
    {
        id: '3',
        title: "Sell",
        path: '/sell',
        icon: null
    },
    {
        id: '4',
        title: "Manage Property",
        path: '/manage',
        icon: <BsChevronDown className='mt-1 ml-2'/>
    },
    {
        id: '5',
        title: "Resources",
        path: '/resources',
        icon: <BsChevronDown className='mt-1 ml-2'/>
    },
    {
        id: '6',
        title: "Favourites",
        path: '/favourites',
        icon: null
    }
    
]

const Nav = () => {
  return (
    <nav className='flex flex-row my-2 py-2 bg-[#fbfaff] shadow-md align-middle'>
        <Link to={'/'}>
            <div className='flex flex-row ml-8 py-2'>
                <div><RiHome6Fill size="1.5em" color='#7067db'/></div>
                <h1 className='text-[#231c48] font-bold text-base pl-1'>Estatery</h1>
            </div>
        </Link>
        <ul className='flex flex-row items-center ml-10 flex-1'>
            { NavData.map((item, index)=> (
                <NavLink to={item.path} key={index} className={({isActive})=> isActive ? 'text-xs bg-[#e8e6fa] font-medium text-[#857bc8] px-4 py-2 mx-2':'text-xs font-medium text-[#666876] px-2.5 mx-2'}>
                       <li className='flex flex-row'>{item.title} {item.icon}</li>
                </NavLink>
            ))}
        </ul>
        <Link to={'/login'}>
            <button className='bg-[#fcfbff] mr-2 w-20 h-9 text-sm font-medium border-2 border-[#e6e5ed] rounded-md text-[#7067db]'>Login</button>
        </Link>
        <Link to={'/signup'}>
            <button className='bg-[#7067db] mr-8 w-20 h-9 font-medium text-sm rounded-md text-[#fcfbff]'>Sign Up</button>
        </Link>
    </nav>
  )
}

export default Nav