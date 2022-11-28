import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome6Fill } from 'react-icons/ri';
import {AiOutlineCopyright} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs'
 
const Footer = () => {
  return (
    <div>
    <footer className='px-32 mt-10 bg-[#fefefe] flex flex-1 py-12 justify-between border-b-2'>
        <Link to={'/'}>
            <div className='flex flex-row'>
                <div><RiHome6Fill size="1.5em" color='#7067db'/></div>
                <h1 className='text-[#231c48] font-bold text-base pl-1'>Estatery</h1>
            </div>
        </Link>
        <section>
            <h4 className='text-[#060723] font-bold'>SELL A HOME</h4>
            <ul className='text-sm text-[#686869] py-3'>
                <li className='py-2'>Request an offer</li>
                <li className='py-2'>Pricing</li>
                <li className='py-2'>Review</li>
                <li className='py-2'>Stories</li>
            </ul>
            <h4 className='text-[#060723] font-bold pt-6'>Buy a Home</h4>
            <ul className='text-sm text-[#686869] py-3'>
                <li className='py-2'>Buy</li>
                <li className='py-2'>Finance</li>
            </ul>
        </section>
        <section>
            <h4 className='text-[#060723] font-bold'>BUY RENT AND SELL</h4>
            <ul className='text-sm text-[#686869] py-3'>
                <li className='py-2'>Buy and sell properties</li>
                <li className='py-2'>Rent home</li>
                <li className='py-2'>Builder trade-up</li>
            </ul>
            <h4 className='text-[#060723] font-bold pt-6'>Terms & Privacy</h4>
            <ul className='text-sm text-[#686869] py-3'>
                <li className='py-2'>Trust & Safety</li>
                <li className='py-2'>Terms of Services</li>
                <li className='py-2'>Privacy Policy</li>
            </ul>
        </section>
        <section>
            <h4 className='text-[#060723] font-bold'>About</h4>
            <ul className='text-sm text-[#686869] py-3'>
                <li className='py-2'>Company</li>
                <li className='py-2'>How it works</li>
                <li className='py-2'>Contact</li>
                <li className='py-2'>Investors</li>
            </ul>
            <h4 className='text-[#060723] font-bold pt-6'>Resources</h4>
            <ul className='text-sm text-[#686869] py-3'>
                <li className='py-2'>Blog</li>
                <li className='py-2'>Guides</li>
                <li className='py-2'>FAQ</li>
                <li className='py-2'>Help Center</li>
            </ul>
        </section>
    </footer>
    <footer className='px-32 bg-[#fefefe] flex justify-between items-center py-5'>
        <div className='flex items-center text-sm text-[#686869]'>
            <AiOutlineCopyright/>
            <p className='pl-1'>2022 Estatery. All rights reserved</p>
        </div>
        <div className='flex justify-between text-[#686869]'>
            <FaFacebookF className='mx-2'/>
            <FaInstagram className='mx-2'/>
            <AiOutlineTwitter className='mx-2'/>
            <BsLinkedin className='mx-2'/>
        </div>
    </footer>
    </div>
  )
}

export default Footer