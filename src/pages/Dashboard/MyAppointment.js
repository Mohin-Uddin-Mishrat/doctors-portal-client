import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/Context';
import Loading from '../../Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
                headers:{
                    authorization :`bearer ${localStorage.getItem('AccessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div >
            <h1 className='mb-6 font-bold text-2xl text-accent lg:text-4xl '>Appoinments</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-white'></th>
                            <th className='text-white'>Name</th>
                            <th className='text-white'>Treatment</th>
                            <th className='text-white'>Date</th>
                            <th className='text-white'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking,i) =>
                                <tr key={i}>
                                    <th className='text-black'>{i+1}</th>
                                    <td className='text-black' >{user?.displayName}</td>
                                    <td className='text-black'>{booking.treatment}</td>
                                    <td className='text-black'>{booking.date}</td>
                                    <td className='text-black'>{booking.slot}</td>
                                </tr>
                       )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;