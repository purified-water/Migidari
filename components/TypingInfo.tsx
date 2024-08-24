import React from 'react'

const TypingInfo = () => {
    return (
        <div id="typing-info" className='w-[700px] h-[170px] flex z-50 bg-slate-800 rounded-2xl p-3'>
            <div className="w-1/4 flex flex-col items-center justify-center mx-1">
                <h1 className='text-2xl font-bold'>0:11</h1>
                <div className='w-full h-[2px] bg-slate-900 my-2' />
                <h2 className='text-base font-light'>Time</h2>
            </div>
            
            <div className="w-1/4 flex flex-col items-center justify-center mx-1">
                <h1 className='text-2xl font-bold'>39</h1>
                <div className='w-full h-[2px] bg-slate-900 my-2' />
                <h2 className='text-base font-light'>WPM</h2>
            </div>

            <div className="w-1/4 flex flex-col items-center justify-center mx-1">
                <h1 className='text-2xl font-bold'>2</h1>
                <div className='w-full h-[2px] bg-slate-900 my-2' />
                <h2 className='text-base font-light'>Correct words</h2>
            </div>

            <div className="w-1/4 flex flex-col items-center justify-center mx-1">
                <h1 className='text-2xl font-bold'>98</h1>
                <div className='w-full h-[2px] bg-slate-900 my-2' />
                <h2 className='text-base font-light'>Accuracy</h2>
            </div>
           
        </div>
    )
}

export default TypingInfo