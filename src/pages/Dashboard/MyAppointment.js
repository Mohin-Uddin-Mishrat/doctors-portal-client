import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../context/Context';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);
    const {data:bookings=[]}= useQuery({
        queryKey:['bookings', user?.email],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-10'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-white'></th>
                            <th className='text-white'>Name</th>
                            <th className='text-white'>Job</th>
                            <th className='text-white'>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className='text-black'>1</th>
                            <td className='text-black' >Cy Ganderton</td>
                            <td className='text-black'>Quality Control Specialist</td>
                            <td className='text-black'>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;