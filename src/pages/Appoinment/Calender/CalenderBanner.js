import { format } from 'date-fns/esm';
import { DayPicker } from 'react-day-picker';
import banner from '../../../assets/images/chair.png'

const CalenderBanner = ({selected , setselected}) => {
    const formate = format(selected, 'PP');
    return (
        <div className='my-16'>
            <div className="bg-slate-100 text-black rounded">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                        mode='single'
                        selected={selected}
                        onSelect={setselected}
                        ></DayPicker>
                        <p className='font-bold'>You selected {formate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalenderBanner;