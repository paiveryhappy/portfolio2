import React, { useState } from 'react'

function Pricing() {
    const [isYearly, setIsYearly] = useState(false);
    const packages = [{
        name: "Start",
        monthlyPrice: 19,
        yearly: 199,
        description: "Servicio para mercaderias en general",
    },
    {
        name: "Advance",
        monthlyPrice: 39,
        yearly: 399,
        description: "Servicio para mercaderias en general",
    },
    {
        name: "Premium",
        monthlyPrice: 59,
        yearly: 599,
        description: "Servicio para mercaderias en general",
    }]


    return (
        <div className="max-w-screen-2xl md:px-14 p-4 mx-auto space-y-10">
            <div className='text-center'>
                <div>
                    <h2 className='md:text-5xl text-3xl font-extrabold text-primary  mb-2'>Here are all our planes</h2>
                    <p className='text-tratiary md:w-1/3 mx-auto px-4'>A simple paragraph is comprised o three major components. The is often a declarativr sentence.</p>
                    { /* toggle pricing*/}
                    <div className='mt-16'>
                        <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                            <span className='mr-8 font-semibold text-2xl'>Monthly</span>
                            <div className='w-16 h-8 bg-[#59A3F9] rounded-full transition duration-200 ease-in-out'>
                                <div className={`w-8 h-8 rounded-full ${isYearly ? "ml-8 bg-primary" : "bg-gray-300"}`}></div>
                            </div>
                            <span className='ml-8 font-semibold text-2xl'>Yearly</span>
                        </label>
                        <input type="checkbox" id='toggle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                    </div>
                </div>

                { /* Pricing cards */}
            </div>
        </div>
    )
}

export default Pricing