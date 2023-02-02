import React from 'react';

const Service = ({ treatment }) => {
    const { name, img,  description } = treatment;
    return (
        <div>
            <div className="p-10 card card-compact w-96 bg-slate-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-xl text-black  uppercase text-center">{name}</h2>
                    <p className='text-primary'>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;