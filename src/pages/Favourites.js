import React from 'react';
import Tiles from '../components/Tiles';

const Favourites = ({posts, errors}) => {

    const favPosts = posts.filter((post)=> post.favourites === true)
    
  return (
    <div className='mx-32 mt-10 flex flex-1 flex-col'>
        <div className='flex flex-row justify-between'>
            <h1 className='text-3xl text-[#060723] font-bold'>Fovurites</h1>
        </div>
        {favPosts.length !== 0 && <Tiles 
            posts = {favPosts}
        />}
        {favPosts.length === 0 && <p>Favourite list is empty</p>}
    </div>
  )
}

export default Favourites