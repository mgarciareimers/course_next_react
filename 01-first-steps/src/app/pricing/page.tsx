import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'What are our costs?',
};

const PricingPage = () => {
    return (
        <>
            <span className='text-7xl'>Pricing Page</span>
        </>
    );
}

export default PricingPage;
