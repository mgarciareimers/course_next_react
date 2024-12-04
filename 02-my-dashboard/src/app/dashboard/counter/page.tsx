import { CartCounter } from '@/shopping-cart';
import { Metadata } from 'next';

export const metadata : Metadata = {
    title: 'Shopping Page',
    description: 'This is a page that adds or subtracts a number.',
};

export default function CounterPage() {
    return (
        <div className='p-2 flex flex-col items-center justify-center w-full h-full'>
            <span>Cart products</span>

            <CartCounter value={ 10 } />
        </div>
    );
}