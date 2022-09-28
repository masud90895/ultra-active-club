import React from 'react';

const MyInformation = () => {
    return (
        <div className='bg-gray-200 mt-5 shadow-lg rounded-md py-3 px-5 flex justify-around gap-2'>
            <div>
                <h1><span className='text-2xl font-bold'>58</span> <span className='text-gray-500'>kg</span></h1>
                <h3 className='text-gray-500'>Weight</h3>
            </div>
            <div>
                <h1><span className='text-2xl font-bold'>5.6</span></h1>
                <h3 className='text-gray-500'>Height</h3>
            </div>
            <div>
                <h1><span className='text-2xl font-bold'>19</span> <span className='text-gray-500'>yrs</span></h1>
                <h3 className='text-gray-500'>Age</h3>
            </div>
        </div>
    );
};

export default MyInformation;