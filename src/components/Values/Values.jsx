import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa'
import basket from '../../assets/basket-full-vegetables.png';

const Values = () => {

    const LeftValues = value.slice(0, 2).map(item => {
        return (
            <div className='flex md:flex-row-reverse items-center gap-7'>
                <div>
                    <span className='text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex items-center justify-center'>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 md:text-3xl text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    const RightValues = value.slice(2).map(item => {
        return (
            <div className='flex items-center gap-7'>
                <div>
                    <span className='text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full flex items-center justify-center'>{item.icon}</span>
                </div>
                <div className=''>
                    <h3 className='text-zinc-800 md:text-3xl text-2xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <Heading highlight="Our" content="Value" />

                <div className='flex md:flex-row flex-col md:gap-5 gap-15 mt-15'>
                    {/* left values */}
                    <div className='md:min-h-100 flex gap-15 flex-col justify-between' >
                        {LeftValues}
                    </div>

                    {/* basket Image middle */}
                    <div className='w-1/2 md:flex hidden'>
                        <img src={basket} alt="basket_image" />
                    </div>

                    {/* right values */}
                    <div className='md:min-h-100 flex gap-15 flex-col justify-between'>
                        {RightValues}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    }
]