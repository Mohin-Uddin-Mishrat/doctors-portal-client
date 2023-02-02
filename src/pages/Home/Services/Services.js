import React from 'react';

import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const data = [
        {
            id: 1,
            name: "Flouride Treatment",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in aliquam ut dolorem dolore.",
            img: flouride
        },
        {
            id: 2,
            name: "Cavity Treatment",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in aliquam ut dolorem dolore.",
            img: cavity
        },
        {
            id: 3,
            name: "Teeth Whitening ",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in aliquam ut dolorem dolore.",
            img: whitening
        }
    ]
    return (
        <div>
            <div className='text-center  my-20'>
                <p className='text-xl text-black font-bold uppercase'>Our Services</p>
                <h1 className='text-3xl text-black font-bold '>Services We Provide</h1>
            </div>
            <div className='flex justify-center'>
                <div className='my-20  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        data.map(treatment => <Service key={treatment.id} treatment={treatment}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;