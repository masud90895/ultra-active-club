import React from 'react';
import img from '../../img/mypic3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import MyInformation from '../MyInformation/MyInformation';

const DailyInfo = () => {
    return (
        <div className='shadow-md px-3 mt-5'>
                <div className='flex justify-center'>
                <img className='w-14 h-14 rounded-full' src={img} alt="" />
                   <div className='ml-3'>
                   <h1>Md Masud Rana</h1>
                    <p> <FontAwesomeIcon icon={faLocationDot}/> Thakurgoan Sadar </p>
                   </div>
                </div>

                <MyInformation/>

                {/* Add A Break section start  */}

                <div className='mt-4 bg-gray-200 shadow-lg py-3 px-5'>
                    <h1 className='text-xl font-bold'>Add A Break</h1>
                    <div className='mt-4 flex justify-around'>
                    <button className='btn btn-outline text-[#0080ff] hover:bg-[#0080ff] hover:border-none  w-12 h-10 rounded-full'>10M</button>
                    <button className='btn btn-outline text-[#0080ff] hover:bg-[#0080ff] hover:border-none  w-12 h-10 rounded-full'>20M</button>
                    <button className='btn btn-outline text-[#0080ff] hover:bg-[#0080ff] hover:border-none  w-12 h-10 rounded-full'>30M</button>
                    <button className='btn btn-outline text-[#0080ff] hover:bg-[#0080ff] hover:border-none  w-12 h-10 rounded-full'>40M</button>
                    </div>

                </div>
                {/* Routine Details start  */}
                <div className='mt-5'>
                    <h1 className='text-xl font-bold'>Routine Details</h1>
                
                <div>
                    <div className='bg-gray-200 shadow-lg py-5 px-5 rounded-lg mt-3 flex justify-between items-center'>
                        <h1 className='text-xl font-bold'>Exercise time</h1>
                        <h3 className='text-gray-500'>0 Minute</h3>
                    </div>
                    <div className='bg-gray-200 shadow-lg py-5 px-5 rounded-lg mt-3 flex justify-between items-center'>
                        <h1 className='text-xl font-bold'>Break time</h1>
                        <h3 className='text-gray-500'>0 Minute</h3>
                    </div>
                </div>


                </div>
                <div className='mx-auto'>
                <button className='btn btn-outline text-[#0080ff] hover:bg-[#0080ff] hover:border-none w-[90%]  rounded-lg mt-10'>Activity Completed</button>
                </div>
                
        </div>
    );
};

export default DailyInfo;