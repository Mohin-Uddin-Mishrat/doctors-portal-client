import React from 'react';
import Apoinment from './Apoinment';
import Banner from './Banner';
import Cards from './Cards/Cards';
import Services from './Services/Services';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Apoinment></Apoinment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;