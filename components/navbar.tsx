import Link from 'next/link';

import Styles from '@/styles/Navbar.module.scss';

const Navbar = () =>
{
    return (
        <nav className={Styles.Navbar}>
            <Link href={'/'}>
                <a className={Styles.NavLink}>Home</a>
            </Link>
            <Link href={'/blog'}>
                <a className={Styles.NavLink}>Blog</a>
            </Link>
            <Link href={'/gists'}>
                <a className={Styles.NavLink}>Gists</a>
            </Link>
        </nav >
    );
};

export default Navbar;