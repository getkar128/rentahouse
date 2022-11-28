import React, { useState } from 'react'
import {BiChevronDown} from 'react-icons/bi'

const Search = () => {
    const [search, setSearch] = useState('')

    const handleChange = () => {
      console.log('clicked');
      setSearch('')
    }
    
  return (
    <div className='flex flex-row items-center mr-7'>
        <input 
            placeholder='Search with Search Bar'
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            className='focus:outline-0 border-2 pl-2 text-xs rounded-lg w-48 h-8 bg-[#fefefe]'
        />
        <BiChevronDown color='#7065f0' onClick={handleChange} className='-m-6 bg-[#e9e6f7] rounded-full cursor-pointer'/>
    </div>

  )
}

export default Search