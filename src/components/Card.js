import React from 'react'

const Card = ({ heading, des, icon }) => {
    return (
        <div className='flex w-[380px] justify-around items-center my-3'>
            <div className='bg-gray-200 rounded-full p-3 w-12 h-12 flex items-center justify-center'>
                <img className='' src={`./assets/${icon}.png`} alt="icon" />
            </div>
            <div>
                <h3 className='base-text'>{heading}</h3>
                <p className='text-gray-500 text-[0.95rem] max-w-[300px]'>{des}</p>
            </div>
        </div>
    )
}

export default Card