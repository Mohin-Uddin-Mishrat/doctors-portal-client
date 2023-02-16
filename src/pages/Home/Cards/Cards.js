import React from 'react';
import Infocard from './Infocard';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Cards = () => {
    const cardsInfo = [
        {
            id :1,
            name:"Opening hours",
            description :"Open 9:00 am to 5:00 pm ",
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id :2,
            name:"Visit our location",
            description :"Kankirhat Atyabari, noakhali",
            icon: location,
            bgClass: 'bg-accent'
        },
        {
            id :3,
            name:"Contact Us now",
            description :"01401035511",
            icon: phone,
            bgClass: 'bg-accent'
        }
    ]
    return (
        <div className='my-20 grid gap-6 grid-cols-1 md:grid-cols-3'>
            {cardsInfo.map(data => <Infocard data={data}  key={data.id}></Infocard>)}
        </div>
    );
};

export default Cards;