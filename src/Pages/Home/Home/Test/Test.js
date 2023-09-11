import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const Test = () => {
    return (
        <div className="hero mt-32">
            <div className="hero-content flex-col lg:flex-row lg:w-1/2 gap-x-28">
                <div><img src={treatment} className="rounded-lg w-screen shadow-2xl" alt='' /></div>
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
    );
};

export default Test;