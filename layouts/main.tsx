import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

type LayoutProps = {
    children: React.ReactNode
};

const MainLayout = ({ children }: LayoutProps) =>
{
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;