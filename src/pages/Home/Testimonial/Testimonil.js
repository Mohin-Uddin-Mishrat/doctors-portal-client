import React from 'react';

const Testimonil = ({ review }) => {
    const { name, location, img, id, desription } = review;
    return (
        <div>
            <div className="card w-96 bg-slate-100  text-black">
                <div className="card-body">

                    <p className='my-3'>{desription}</p>
                    <div className="card-actions flex justify-start items-center ">
                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img  src={img} />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-black font-bold text-xl'>{name}</h1>
                            <p className='text-primary'>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonil;