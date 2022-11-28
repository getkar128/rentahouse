import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import FilterBar from '../components/FilterBar';
import Tiles from '../components/Tiles';
import useAxiosFetch from '../hooks/useAxiosFetch';
import { useStoreActions, useStoreState } from 'easy-peasy';

const BASE_URL = "http://localhost:3500/data"


const Rent = () => {

  const {data, error} = useAxiosFetch(BASE_URL)
  const setPosts = useStoreActions((actions)=>actions.setPosts)
  const posts = useStoreState((state)=> state.posts)
  const [errors, setErrors] = useState('')

  useEffect(() => {
    setPosts(data) 
    setErrors(error)   
  }, [setPosts, error, data])
    
    return (
      <div className='mx-32 mt-10 flex flex-1 flex-col'>
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl text-[#060723] font-bold'>Search properties to rent</h1>
          <Search/>
        </div>
        <FilterBar/>
        <Tiles 
          posts = {posts}
          errors = {errors}
        />
      </div>
    )
}

export default Rent