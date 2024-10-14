import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Any question? Contact us!',
    keywords: ['hello', 'contact us', 'question']
};

const ContactPage = () => {
    return (
        <>
            <span className='text-7xl'>Contact Page</span>
        </>
    );
}

export default ContactPage;