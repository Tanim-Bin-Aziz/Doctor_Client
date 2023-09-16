import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate }) => {
    return (
        <section className='mt-16'>
            <p className='text-secondary text-center font-bold'>Available Appointment Date {format(selectedDate, 'PP')} </p>
        </section>
    );
};

export default AvailableAppointment;