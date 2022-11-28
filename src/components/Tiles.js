import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import {IoBedOutline} from 'react-icons/io5';
import { TbBath } from 'react-icons/tb';
import { CgShapeRhombus } from 'react-icons/cg';
import { useStoreActions} from 'easy-peasy';

const BASE_URL = "http://localhost:3500/data"

const Tiles = ({posts, errors}) => {
    
    const setPosts = useStoreActions((actions) => actions.setPosts)
   

    const changeFavourite = async (id) => {
        const updatedPosts = posts.map((item) => item.id === id ? {...item, favourites: !item.favourites} : item)
        setPosts(updatedPosts)
        
        const myItem = updatedPosts.filter((item) => item.id === id)
        const updateOption = {
            method: 'PATCH',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({favourites: myItem[0].favourites})
        }
        const reqUrl = `${BASE_URL}/${id}`;
        try {
            const response = await fetch(reqUrl, updateOption)
            if (!response) console.log('No server');
        } catch (err) {
            console.log(err.message);
        }
    }

  return (
    <div className='grid grid-cols-3 mt-10 w-full gap-5'>
        {!errors && posts.map((item)=> (
        <section key={item.id} className='w-[320px] bg-[#fefefe] rounded-lg shadow-md'>
            <img src={item.image} alt="Home" width={320} height={218} className='block w-full rounded-t-md object-cover'/>
            <div className='mx-4 py-4 border-b-2'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-lg text-[#7067db]'>${item.price}<span className='text-xs font-normal text-[#abaaae]'>/month</span></h3>
                    <div className='border-2 w-10 h-10 rounded-full'>
                        {item.favourites && 
                            <AiFillHeart color='#7067db' size={'1.3rem'} className='my-[8px] mx-[8px]'
                                onClick={()=>changeFavourite(item.id)}
                            />
                        }
                        {!item.favourites && 
                            <AiOutlineHeart color='#7067db' size={'1.3rem'} className='my-[8px] mx-[8px]'
                                onClick={()=>changeFavourite(item.id)}
                            />
                        }
                    </div>
                </div>
                <h2 className='text-lg font-black text-[#060723]'>{item.title}</h2>
                <p className='text-sm pt-1 text-[#abaaae]'>{item.address}</p>
            </div>
            <div className='flex justify-between mx-4 pb-4 pt-3'>
                <div className='flex items-center'>
                    <IoBedOutline color='#7067db' className='mr-1'/>
                    <p className='text-xs text-[#abaaae]'>{item.bedrooms} Beds</p>
                </div>
                <div className='flex items-center'>
                    <TbBath color='#7067db' className='mr-1'/>
                    <p className='text-xs text-[#abaaae]'>{item.bath} Bathrooms</p>
                </div>
                <div className='flex items-center'>
                    <CgShapeRhombus color='#7067db' className='mr-1'/>
                    <p className='text-xs text-[#abaaae]'> {item.area} m<sup>2</sup></p>
                </div> 
            </div>
        </section>
     ))}
     {errors && <p>{errors}</p>}
    </div>
  )
}

export default Tiles