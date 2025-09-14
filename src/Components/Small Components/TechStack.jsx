import React from 'react'

function TechStack({obj}) {
    
    return (
        <div>
            <div className="overflow-hidden sm:text-6xl text-4xl text-gray-400 flex">
            {
                obj.map((items,index)=>(
                    <div key={index} className='mr-14 md:mr-20'>
                        {items}
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default TechStack