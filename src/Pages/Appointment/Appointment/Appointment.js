import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selctedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selctedDate={selctedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selctedDate={selctedDate}

            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;