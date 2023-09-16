import React, { useState } from 'react';
import chair from '../../../assets/images//chair.png';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="dentist chair" className="max-w-sm rounded-lg shadow-2xl" />
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate} />
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;