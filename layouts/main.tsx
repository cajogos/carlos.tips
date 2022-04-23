import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

type LayoutProps = {
    children: React.ReactNode
};

const MainLayout = ({ children }: LayoutProps) =>
{
    return (
        <div className='bg-gray-50 h-screen'>
            <Navbar />
            <main className='bg-white max-w-7xl mx-auto'>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;