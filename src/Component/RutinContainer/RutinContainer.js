import React, { useEffect, useState } from 'react';
import RutinCards from '../RutinCards/RutinCards';

const RutinContainer = ({times,setTimes}) => {
    const [routines,setRoutin] =useState([])

    useEffect(()=>{
        fetch('rutin.json')
        .then(res=>res.json())
        .then(data=>setRoutin(data))
    },[])
    return (
        <div className='md:mt-16 md:px-20 px-5 '>
            <div className='flex items-center '>
            <img className='rounded-lg' src="https://img.freepik.com/free-vector/smiling-man-with-daily-routines-icons-flat-style_24908-58938.jpg?w=50" alt="" />
            <h1 className='ml-3 text-4xl font-bold text-[#0080ff]'>My Daily Routine </h1>
        </div>
        <div>
            <h1 className='mt-12 text-2xl font-bold'>
            Select today’s Routine
            </h1>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                routines.map(routine=> <RutinCards key={routine.id} routine={routine} setTimes={setTimes} time={times} ></RutinCards>)
            }
        </div>
        </div>
    );
};

export default RutinContainer;