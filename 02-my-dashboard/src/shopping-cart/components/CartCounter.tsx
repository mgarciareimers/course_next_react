'use client';

import React from 'react';

import { useState } from 'react';

interface Props {
    value?: number;
}

const CartCounter = ({ value = 0 } : Props) => {
    const [ counter, setCounter ] = useState(value);

    // On click methods.
    const onChangeCounterButtonClicked = (coefficient : number) => {
        const newCounter = counter + coefficient;
        setCounter(newCounter < 0 ? 0 : newCounter);
    }

    return (
        <>
            <span className='text-9xl'>{ counter }</span>

            <div className='flex'>
                <button 
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
                    onClick={ () => onChangeCounterButtonClicked(1) }
                >
                    +1
                </button>

                <button 
                    className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px]'
                    onClick={ () => onChangeCounterButtonClicked(-1) }
                >
                    -1
                </button>
            </div>
        </>
    );
}

export default CartCounter;