import React from 'react'
import ReferralCard from './ReferralCard';
import { Link } from 'react-router-dom'

const Refer = () => {
    return (
        <div className='px-3'>
            <Link to="/" className='sm:hidden base-text'>&larr; go back</Link>
            <div className='flex justify-between my-5'>
                <div className=''>
                    <h2 className='base-text text-xl'>Your Referral Code</h2>
                    <div className='border-2 bg-white py-2 px-4 rounded-md base-text flex justify-evenly' >
                        <span>E</span>
                        <span>D</span>
                        <span>C</span>
                        <span>H</span>
                        <span>5</span>
                        <span>4</span>
                    </div>
                </div>
                <div className='card bg-white px-8 py-3 rounded-lg shadow-lg shadow-gray-200'>
                    <h3 className='base-text'>Wallet Balance</h3>
                    <p>&#8377; 500</p>
                </div>
            </div>

            <div className='mt-12'>
                <h2 className='base-text text-xl font-bold'>Friends who enrolled <span className='text-gray-500'>(3)</span> </h2>
                <div className='flex overflow-x-visible justify-evenly flex-wrap md:flex-nowrap'>
                    <ReferralCard name="Dhiraj Saxsena" amount={"185"} count={"6"} courses={["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"]} date={"14 Sep, 2020"} />
                    <ReferralCard name="Subhash Mishra" amount={"485"} count={"23"} courses={["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java", "C++"]} date={"14 Sep, 2020"} />
                    <ReferralCard name="Prafull Kumar" amount={"485"} count={"23"} courses={["UI/UX", "Photoshop", "Go", "Illustrator", "Python", "MERN", "Java"]} date={"14 Sep, 2020"} />
                </div>
            </div>
        </div>
    )
}

export default Refer;