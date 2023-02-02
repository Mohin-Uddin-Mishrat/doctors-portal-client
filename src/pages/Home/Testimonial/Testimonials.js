import React from 'react';
import coma from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Testimonil from './Testimonil';

const Testimonials = () => {
    const reviews = [
        {
            id:1,
            name:"Md Mishrat",
            img:people1,
            desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quisquam maiores odio, aspernatur nisi officiis,",
            location:"Dhaka"
        },
        {
            id:2,
            name:"Md Mohin",
            img:people2,
            desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quisquam maiores odio, aspernatur nisi officiis," ,
            location:"Noakhali"
        },
        {
            id:3,
            name:"Md Uddin",
            img:people3,
            desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quisquam maiores odio, aspernatur nisi officiis,",
            location:"Senbag"
        }
    ]
    return (
        <div className='my-20'>
            <div className='my-20 flex justify-between items-center'>
                <div >
                    <h1 className='font-bold text-xl text-accent'>Testimonial</h1>
                    <h2 className='text-2xl text-primary lg:text-4xl '>What our patients says</h2>
                </div>
                <figure>
                        <img src={coma} className='w-20 lg:w-48' alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    reviews.map(review => <Testimonil key={review.id} review={review}></Testimonil>)
                }
            </div>
        </div>
    );
};

export default Testimonials;