import React from 'react';

const RutinCards = ({routine}) => {
    const {id,name,ditailes,time,img} =routine;
    console.log(routine)
    return (
        <div className=''>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure ><img className='h-[200px] w-full' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default RutinCards;