import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx';
import Footer from './components/Footer/Footer.tsx';

export default function Layout(): JSX.Element {
  return (
    <div className='layout'>
    <div>
      <Navbar />
      <p className='curt'>curt</p>
      <Outlet />
    </div>
      <Footer />
    </div>
  );
}
