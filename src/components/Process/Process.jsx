import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled, TbCircleNumber4Filled } from 'react-icons/tb'
import { PiFactory, PiPlant } from 'react-icons/pi'
import { SlBadge } from 'react-icons/sl'
import { BsTruck } from 'react-icons/bs'

const Process = () => {
    const renderSteps = steps.map(item => {
        return (
            <div className={`flex-1 basis-[300px] ${item.id % 2 == 0 ? 'md:-mt-100' : ''}`}>
                <span className='flex items-center md:mx-auto justify-center text-white outline-zinc-800 rounded-full outline-dashed w-18 h-18 text-8xl outline-[3px] outline-offset-7 bg-zinc-800'>{item.number}</span>

                <div className='flex items-center mt-5 gap-x-5'>
                    
                        <span className='flex bg-gradient-to-b text-3xl from-orange-400 to-orange-500 text-white w-15 h-15 rounded-full justify-center items-center'>{item.icon}</span>
                    

                    <div className='flex-1 mt-10'>
                        <h4 className='text-zinc-800 font-bold text-2xl'>{item.title}</h4>
                        <p className='text-zinc-600 mt-2 '>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <div className='w-fit me-auto'>
                    <Heading highlight="Our" content="Process" />
                </div>
                <div className='flex flex-wrap gap-y-17 items-center justify-center mt-20 md:pt-40'>
                    {renderSteps}
                </div>
            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />
    }

]