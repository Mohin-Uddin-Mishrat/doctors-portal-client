import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chair} className="w-full lg:w-1/2  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-black">Kankirhat Medical center</h1>
                        <p className="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-primary to-accent ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;