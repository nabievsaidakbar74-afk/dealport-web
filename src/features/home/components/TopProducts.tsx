import React from 'react'

export default function TrendingProducts() {
    return (
        <div className='max-w-310 w-full m-[0px_auto] flex flex-col justify-center gap-8 p-[0px_0px_100px]'>
            <div className='flex items-center justify-between'>
                <p className='font-bold text-[32px]'>Trending Product</p>
                <button className='border border-black rounded-[200px] p-[12px_24px] cursor-pointer'>
                    View All
                </button>
            </div>
            <div className='flex items-center justify-between gap-8'>
                <div className='bg-[#ccc] rounded-2xl w-67.5 h-100'>
                </div>
                <div className='bg-[#ccc] rounded-2xl w-67.5 h-100'>
                </div>
                <div className='bg-[#ccc] rounded-2xl w-67.5 h-100'>
                </div>
                <div className='bg-[#ccc] rounded-2xl w-67.5 h-100'>
                </div>
            </div>
        </div>
    )
}
