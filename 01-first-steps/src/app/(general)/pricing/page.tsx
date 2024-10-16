import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'What are our costs?',
};

export default function PricingPage() {
    return (
        <>
            <span className='text-7xl'>Pricing Page</span>
        </>
    );
}
