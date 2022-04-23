import Link from 'next/link';

const Footer = () =>
{
    return (
        <footer>
            <Link href={'https://carlos.fyi'}><a>Carlos F</a></Link> &copy; {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;