import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));

// Placeholder for Blog and Legal pages
const Blog = () => <div className="pt-32 pb-20 text-center min-h-screen dark:text-white"><h1 className="text-3xl font-bold">Blog coming soon</h1></div>;
const PrivacyPolicy = () => <div className="pt-32 pb-20 text-center min-h-screen dark:text-white"><h1 className="text-3xl font-bold">Privacy Policy</h1></div>;
const Terms = () => <div className="pt-32 pb-20 text-center min-h-screen dark:text-white"><h1 className="text-3xl font-bold">Terms & Conditions</h1></div>;

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center dark:bg-brand-darkBg"><div className="w-8 h-8 border-4 border-brand-electricBlue border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book" element={<BookAppointment />} />
            <Route path="blog" element={<Blog />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="*" element={<div className="pt-32 pb-20 text-center min-h-screen dark:text-white text-3xl font-bold">404 Not Found</div>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
