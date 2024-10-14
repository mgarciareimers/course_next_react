import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
    description: 'Meet our team!',
    keywords: []
};

const AboutPage = () => {
    return (
        <>
            <span className='text-7xl'>About Page</span>
        </>
    );
}

export default AboutPage;
