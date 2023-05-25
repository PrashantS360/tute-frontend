import React from 'react'

const ReferralCard = ({name, courses, amount, count, date}) => {
  return (
    <div className='w-[380px] text-white m-4 p-3 rounded-lg'  style={{ background: "linear-gradient(to right, #FF864C, #800080)" }}>
        <div className='flex justify-between'>
            <p className='font-[600]'>{name}</p>
            <p>{date}</p>
        </div>
        <h3>Courses Enrolled({count})</h3>
        <div className='flex flex-wrap my-2 mb-4'>
            {
                courses.map((course)=>{
                    return <div key={course} className='border-2 px-2 py-0.5 rounded-full m-1 border-[#FF864C]'>{course}</div>
                })
            }
        </div>
        <p className=''>Referral Amount <span>&#8377; {amount}</span></p>
    </div>
  )
}

export default ReferralCard