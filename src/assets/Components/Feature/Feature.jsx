import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const Feature = ({feature}) => {

    return (
        <div className='px-5'>
            <p className='text-xl flex items-center gap-3'> <AiFillCheckCircle className='text-green-500'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

export default Feature;