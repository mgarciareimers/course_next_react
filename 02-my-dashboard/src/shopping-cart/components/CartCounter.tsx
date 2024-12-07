'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import React, { useEffect } from 'react';

interface Props {
    value?: number;
}

export interface CounterResponse {
    counter: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter')
        .then((res: Response) => res.json());

    return data;
}

const CartCounter = ({ value = 0 } : Props) => {
    const counter: number = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();

    /*
    useEffect(() => {
      dispatch(initCounterState(value));
    }, [ dispatch, value ]);
    */

    useEffect(() => {
      getApiCounter()
        .then((data: CounterResponse) => dispatch(initCounterState(data.counter)));
    }, [dispatch]);
    

    // On click methods.
    const onChangeCounterButtonClicked = (coefficient : number) => {
        dispatch(coefficient < 0 ? substractOne() : addOne());
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