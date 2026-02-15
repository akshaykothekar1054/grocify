import React from 'react'

const Heading = (props) => {
    return (
        <div className=' mx-auto w-fit'>
            <h2 className='md:text-5xl text-3xl text-zinc-800 font-bold'><span className='text-orange-500'>{props.highlight}</span> {props.content}</h2>
            <div className='bg-orange-500 w-34 md:mt-4 mt-3 h-1 ml-auto'></div>
        </div>
    )
}

export default Heading