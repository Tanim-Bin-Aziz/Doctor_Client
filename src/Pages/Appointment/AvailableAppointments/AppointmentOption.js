import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-2xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try again another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                <div className="card-actions justify-center">

                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;