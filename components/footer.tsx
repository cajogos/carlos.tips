import Link from 'next/link';

const Footer = () =>
{
    return (
        <footer className='text-center text-sm mt-4'>
            <span className='text-gray-800'>
                <Link href={'https://carlos.fyi'}>
                    <a className='text-blue-900 underline'>Carlos F</a>
                </Link> &copy; {new Date().getFullYear()}
            </span>
        </footer>
    );
};

export default Footer;