import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useState } from 'react';
import Loading from '../../../Loading';
import AvailbleAppointment from './AvailbleAppointment';
import BookingModal from './BookingModal';

const AbailableAppointments = ({selected}) => {
    const [treatment , settreatment] =useState(null);
    const date = format(selected, 'PP');

    const {data:appoinments=[], refetch, isLoading} = useQuery({
        queryKey: ['appoinment', date],
        queryFn: ()=>fetch(`http://localhost:5000/appoinment?date=${date}`) 
        .then(res=> res.json())

        
    })

    if (isLoading){
        return <Loading></Loading>
   
    }
    
    
    
    return (
        <div className='my-16'>
            <p className=' text-center text-black'>
                Available appointment on {format(selected , 'PP')}
            </p>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appoinments.map((data, i) => <AvailbleAppointment key={i} data={data} settreatment={settreatment}></AvailbleAppointment> )
                }
            </div>
            {   treatment &&
                <BookingModal refetch={refetch} selected={selected} settreatment={settreatment} treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AbailableAppointments;