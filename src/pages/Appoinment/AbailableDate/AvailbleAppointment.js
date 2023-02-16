import React from 'react';

const AvailbleAppointment = ({ data, settreatment }) => {
    const { slotes, name } = data;
    return (
        <div>
            <div className="card w-96 bg-slate-100 text-primary-content">
                <div className="card-body">
                    <h2 className="font-bold text-center">{name}</h2>
                    <p className='text-center'>{slotes.length > 0 ? slotes[0] : 'Try another day'}</p>
                    <p className='text-center'>{slotes.length} {slotes.length > 1 ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-center">
                        <label htmlFor="Bookinng-Modal" onClick={()=> settreatment(data)} className="btn btn-accent">Booking Appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailbleAppointment;