import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({image,name,price}) => {
    return (
        <div className='bg-zinc-100 p-5 rounded-xl'>
            {/* card icons  */}
            <div className='flex justify-between'>
                <span className='md:text-3xl text-xl text-zinc-300'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white md:text-xl text-sm md:px-4 px-2 md:py-3 py-2 rounded-lg'>
                    <FaPlus />
                </button>
            </div>

            {/* card Image */}
            <div className='w-full h-50 '>
                <img src={image} className='w-full h-full mx-auto object-contain' />
            </div>

            {/* card content */}
            <div className='text-center '>
                <h3 className='md:text-2xl text-lg font-semibold'>{name}</h3>
                <p className='md:text-2xl text-lg font-bold mt-4 mb-3'>${price.toFixed(2)}</p>
                <Button content="Shop Now" />
            </div>

        </div>
    )
}

export default Cards