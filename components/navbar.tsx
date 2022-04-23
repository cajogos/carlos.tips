import Link from 'next/link';

const Navbar = () =>
{
    return (
        <nav>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
            <Link href={'/blog'}>
                <a>Blog</a>
            </Link>
            <Link href={'/gists'}>
                <a>Gists</a>
            </Link>
        </nav>
    );
};

export default Navbar;