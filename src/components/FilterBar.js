import React from 'react'
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {AiOutlineCalendar} from 'react-icons/ai'
import { BiChevronDown } from 'react-icons/bi';
import 'react-calendar/dist/Calendar.css';
import {LOCATION, PRICE} from '../options/options'
import { useStoreActions, useStoreState } from 'easy-peasy';


const FilterBar = () => {

      const posts = useStoreState((state) => state.posts)
      const setPosts = useStoreActions((actions) => actions.setPosts)
      
      const date = useStoreState((state)=> state.date)
      const setDate = useStoreActions((actions) => actions.setDate)

      const showCalendar = useStoreState((state)=> state.showCalendar)
      const setShowCalendar = useStoreActions((actions) => actions.setShowCalendar)

      const type = useStoreState((state) => state.type)
      const setType = useStoreActions((actions) => actions.setType)

      const location = useStoreState((state) => state.location)
      const setLocation = useStoreActions((actions) => actions.setLocation)
      
      const price = useStoreState((state) => state.price)
      const setPrice = useStoreActions((actions) => actions.setPrice)


      const option = LOCATION.map((item, index) => (
        <option key={index} value={item}>{item}</option>
      ))

      const optionPrice = PRICE.map((item, index) => (
        <option key={index} value={item[0]}>{item[1]}</option>
      ))

      const handleDate = (value) => {
        setDate(value)
        setShowCalendar(!showCalendar)
      }

      const handleSubmit = (e) => {
        
        e.preventDefault()
        const strDate = date.toString()
        const filteredDate = strDate.split(" ").slice(1,4).join(" ")

        const minPrice = Number(price.split(',')[0])
        const maxPrice = Number(price.split(',')[1])

        const filteredPosts = posts.filter((post) => (
          post.city === location && post.price >= minPrice && post.price <= maxPrice && post.type === type && post.date === filteredDate
        ))

        setPosts(filteredPosts);
      }  

  return (
    <form className='bg-[#fefefe] mt-10 flex flex-row justify-between items-center shadow-md rounded-md'>

      <div className='border-r-2 my-3 pr-2 pl-5 text-sm text-[#abaaae] flex-1'>
        <label htmlFor="location" className='block'>Location</label>
        <select id="location" className='text-base font-bold text-[#060723] outline-none p-2 -ml-2 w-full      appearance-none' onChange={(e)=> setLocation(e.target.value)} defaultValue={'default'}
        >
          <option value='default' disabled>--------</option>
          {option}
        </select>
      </div>

      <div className='border-r-2 my-3 pr-2 pl-5 text-sm text-[#abaaae] flex-1'>
        <p>When</p>
        <p onClick={() => setShowCalendar(!showCalendar)} className='text-base font-bold text-[#060723] flex justify-between cursor-pointer'>Select Move-in Date <AiOutlineCalendar className='mt-1 cursor-pointer' onClick={() => setShowCalendar(!showCalendar)} color='#7067db'/></p>
        <Calendar className={showCalendar ? 'absolute z-50': 'hidden'} onChange={(value)=>handleDate(value)}/>
      </div>

      <div className='border-r-2 my-3 pr-2 pl-5 text-sm text-[#abaaae] flex-1'>
        <label htmlFor="price" className='block'>Price</label>
        <div className='flex justify-between'>
          <select id='price' defaultValue={'default'} onChange={(e)=> setPrice(e.target.value)} className='text-base font-bold text-[#060723] appearance-none w-full outline-none'>
            <option value="default" disabled>$500-$2500 </option>
            {optionPrice}
          </select>
          <BiChevronDown color='#7065f0' size={'1rem'} className='bg-[#e9e6f7] rounded-full mt-1 -ml-6 pointer-events-none' />
        </div>
      </div>

      <div className='border-r-2 my-3 pr-2 pl-5 text-sm text-[#abaaae] flex-1'>
        <label htmlFor="type">Property Type</label>
        <div className='flex justify-between'>
          <select id="type" defaultValue={'default'} className='text-base font-bold text-[#060723] appearance-none w-full outline-none' onChange={(e)=> setType(e.target.value)}>
            <option value="default" disabled>None</option>
            <option value="house">House</option>
            <option value="room">Room</option>
            <option value="villa">Villa</option>
          </select>
          <BiChevronDown color='#7065f0' size={'1rem'} className='bg-[#e9e6f7] rounded-full mt-1 -ml-6 pointer-events-none'/>
        </div>
        
        {/* <p className='text-base font-bold text-[#060723] flex justify-between'>Houses</p> */}
      </div>   

      <button className='bg-[#7067db] mr-8 w-20 h-9 font-medium text-sm rounded-md text-[#fcfbff] ml-5' 
      onClick={handleSubmit}>
        Search
      </button>

    </form>
  )
}

export default FilterBar