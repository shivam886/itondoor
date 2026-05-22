import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white dark:bg-brand-darkBg w-full">
      <Navbar />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <FloatingWidgets />
      <Footer />
    </div>
  );
}
