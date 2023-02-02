import React from 'react';
import doctor from '../../assets/images/doctor-small.png'

const Apoinment = () => {
    return (
        <div className='my-32'>
            <div className="hero bg-accent ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="hidden lg:block w-1/2 -mt-32 -mb-5 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Make an appoinment</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apoinment;