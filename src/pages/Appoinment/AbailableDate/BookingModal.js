import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/Context';

const BookingModal = ({ treatment, selected, refetch, settreatment }) => {
    const formate = format(selected, 'PP');
    const { name: treatmentName, slotes } = treatment;
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phoneNo.value;
        const date = form.date.value
        const info = {
            date,
            name,
            treatment: treatmentName,
            slot,
            email,
            phone
        }
        fetch('http://localhost:5000/bookings',
            {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(info)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    settreatment(null);
                    toast('BOOKING CONFIRMED')
                    refetch();
                }
                else{
                    toast.error(data.messge);
                }
            })


    }
    return (
        <div>
            <input type="checkbox" id="Bookinng-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Bookinng-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleSubmit}>
                        <input name='date' type="text" value={formate} disabled className="input input-bordered input-accent w-full mt-2" />
                        <div className="form-control w-full ">

                            <select name='slot' className="select select-accent w-full mt-2">
                                {
                                    slotes.map((slot, i) => <option className='text-black' key={i} value={slot}>{slot}</option>)
                                }
                            </select>

                        </div>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered input-accent w-full mt-2" />
                        <input name='email' type='email' defaultValue={user?.email} disabled className="input input-primary  w-full mt-2" />
                        <input name='phoneNo' type="text" placeholder='Phone Number' className="input input-bordered text-black input-accent w-full mt-2" />
                        <input type="submit" value="Submit" className="input input-bordered input-accent w-full mt-2 bg-accent" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default BookingModal;