import React, { useState } from 'react';
import AbailableAppointments from './AbailableDate/AbailableAppointments';
import CalenderBanner from './Calender/CalenderBanner';

const Appoinment = () => {
    const [selected, setselected] = useState(new Date());

    return (
        <div>
            <CalenderBanner selected={selected} setselected={setselected}></CalenderBanner>
            <AbailableAppointments selected={selected} setselected={setselected}></AbailableAppointments>
        </div>
    );
};

export default Appoinment;