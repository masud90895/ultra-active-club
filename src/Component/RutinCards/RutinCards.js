import React from 'react';

const RutinCards = ({routine}) => {
    const {id,name,ditailes,time,img} =routine;
    return (
        <div className=''>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure ><img className='h-[200px] w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{ditailes.length > 200 ? ditailes.slice(0,200) + "..." :ditailes}</p>
                    <p className='mt-2 text-xl'>Time required : {time}Minute</p>                   
                    <button className="btn bg-[#0080ff] border-none">Add to list</button>
                </div>
                </div>
        </div>
    );
};

export default RutinCards;