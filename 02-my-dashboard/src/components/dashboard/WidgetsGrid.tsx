'use client';

import { IoCartOutline } from 'react-icons/io5';
import SimpleWidget from './SimpleWidget';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
    const counter: number = useAppSelector((state) => state.counter.count);

    return (
        <div className='flex flex-wrap p-2 items-center justify-center'>
            <SimpleWidget
                label='Counter'
                title={ counter.toString() }
                subtitle='Subtitle'
                icon={ <IoCartOutline size={ 50 } className='text-blue-500' /> }
                href='/dashboard/counter'
            />
        </div>
    );
}
