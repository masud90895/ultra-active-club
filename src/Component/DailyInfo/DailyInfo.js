import React, { useEffect, useState } from 'react';
import img from '../../img/mypic3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot} from '@fortawesome/free-solid-svg-icons'
import MyInformation from '../MyInformation/MyInformation';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const DailyInfo = ({times,setTimes}) => {
    const breakTime=['10','20','30','40']

    const [sumBreak,setSumBreak] =useState(0)

    const breakTimes=(oneBreak)=>{
        localStorage.setItem('break',oneBreak)
        setSumBreak(oneBreak)
    }

    useEffect(()=>{
        const getLocalData=localStorage.getItem('break')
        if(getLocalData){
            setSumBreak(getLocalData)
        }
    },[])

    const notify = () => toast("Wow Activity Completed!");


    return (
        <div className='shadow-md px-3 mt-10'>
                <div className='flex lg:justify-start justify-center'>
                    <div>
                    <img className='w-14 h-14 rounded-full' src={img} alt="" />
                    </div>
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
                        {breakTime.map((oneBreak) => <button key={oneBreak} onClick={()=>breakTimes(oneBreak)} className='btn btn-outline text-[#0080ff] hover:bg-[#0080ff] hover:border-none  w-12 h-10 rounded-full'>{oneBreak}M</button>)
                              
                              
                        }
                    </div>
                    
                    

                </div>
                {/* Routine Details start  */}
                <div className='mt-5'>
                    <h1 className='text-xl font-bold'>Routine Details</h1>
                
                <div>
                    <div className='bg-gray-200 shadow-lg py-5 px-5 rounded-lg mt-3 flex justify-between items-center'>
                        <h1 className='text-xl font-bold'>Spent time</h1>
                        <h3 className='text-gray-500'>{times} Minute</h3>
                    </div>
                    <div className='bg-gray-200 shadow-lg py-5 px-5 rounded-lg mt-3 flex justify-between items-center'>
                        <h1 className='text-xl font-bold'>Break time</h1>
                        <h3 className='text-gray-500'>{sumBreak} Minute</h3>
                    </div>
                </div>


                </div>
                <div className='mx-auto mb-6'>
                <button onClick={notify} className='btn btn-outline text-[#0080ff] hover:bg-[#0080ff] hover:border-none w-[90%]   rounded-lg mt-10'>Activity Completed</button>
                <ToastContainer />
                </div>
                
        </div>
    );
};

export default DailyInfo;