import React from 'react';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try again another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">Book Appointment</button>
                    <label htmlFor="booking-modal" className="btn">open modal</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;