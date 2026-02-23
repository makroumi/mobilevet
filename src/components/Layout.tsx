import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
