import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Stethoscope, PhoneCall } from 'lucide-react';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100', scrolled ? 'shadow-sm py-3' : 'py-5')}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <Stethoscope className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">VetHome</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn('text-sm font-medium transition-colors hover:text-emerald-600', location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600')}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="text-slate-600 hover:text-emerald-600 font-medium text-sm flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              1-800-VET-HOME
            </Link>
            <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm">
              Book Visit
            </Link>
          </div>

          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn('text-base font-medium px-2 py-2 rounded-lg', location.pathname === link.path ? 'bg-emerald-50 text-emerald-600' : 'text-slate-700 hover:bg-slate-50')}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-slate-100 my-2" />
          <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 text-slate-900 rounded-lg font-medium">
            <PhoneCall className="w-4 h-4" />
            Call Us Now
          </Link>
          <Link to="/contact" className="w-full py-3 bg-emerald-600 text-white rounded-lg font-medium text-center shadow-md shadow-emerald-200">
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
