import { WidgetsGrid } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin Dashboard',
    description: 'Dashboard page',
};

export default function MainPage() {
    return (
        <div className='p-2 text-black'>
            <h1 className='mt-2 text-3xl'>Dashboard</h1>
            <span className='text-xl'>General Information</span>

            <WidgetsGrid />
        </div>
    );
}