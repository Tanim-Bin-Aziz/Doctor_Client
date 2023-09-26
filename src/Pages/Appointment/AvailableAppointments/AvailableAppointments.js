
import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ selctedDate }) => {
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>You have selcted date:{format(selctedDate, 'PP')}
            </p>
        </section>
    );
};

export default AvailableAppointments;