import React from 'react';
import Card from './Card';

const Home = () => {
  return (
    <div className='px-3'>
      <div className='flex flex-wrap justify-evenly sm:justify-between'>
        <div className="balance sm:w-[55%] flex flex-wrap items-center bg-white rounded-lg py-3 pb-6 justify-evenly">
          <div className='sm:w-1/4 m-3'>
            <label htmlFor="earn" className='text-sm base-text'>Referral Earning</label>
            <p className='text-3xl font-bold'>&#8377; 2,500</p>
          </div>
          <div className='sm:w-1/4 m-3'>
            <label htmlFor="earn" className='text-sm base-text'>Total Referrals</label>
            <p className='text-3xl font-bold'>7</p>
          </div>
          <div className='sm:w-1/4 m-3'>
            <label htmlFor="earn" className='text-sm base-text'>Wallet Balance</label>
            <p className='text-3xl font-bold'>&#8377; 500</p>
          </div>
          <button className='base-bg text-white rounded-full px-4 py-1.5'>Withdraw Balance</button>
        </div>

        <div className='sm:w-[40%] w-full px-12 p-2'>
          <h2 className='base-text font-bold text-2xl'>Your Referral Code</h2>
          <div className='px-0.5 py-0.5 rounded-md mt-2' style={{ background: "linear-gradient(to right, #FF864C, #800080)" }}>
            <div className='bg-white py-2 px-4 rounded-md base-text flex justify-evenly' >
              <span>E</span>
              <span>D</span>
              <span>C</span>
              <span>H</span>
              <span>5</span>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>

      <div className='my-7 m-auto w-[95%]'>
        <h2 className='base-text font-bold text-2xl mb-5'>How does it work?</h2>
        <div className='flex flex-wrap'>
          <Card heading="Invite your friends" des="Share the link tutedude.com with your friends" icon="invite"/>
          <Card heading="Friend purchase any course" des="On your REFERRAL CODE in the payments page" icon="coupon"/>
          <Card heading="You get ₹ 200 as referral money" des="On total purchase friend makes, into your wallet" icon="rupee"/>
          <Card heading="Your friends will get ₹ 200 off" des="On his overall fee on successful purchase using your referral code" icon="discount"/>
          <Card heading="Transfer money from wallet" des="When the wallet balance reaches ₹ 200 or more, you can withdraw it" icon="wallet"/>
        </div>
      </div>

    </div>
  );
};

export default Home;
