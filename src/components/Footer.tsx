import { Link } from 'react-router-dom';
import { Stethoscope, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">VetHome</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Premium veterinary care delivered directly to your doorstep. We combine state-of-the-art medical technology with the comfort of your home.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Medical Board', 'Careers', 'Press', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-emerald-400 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="space-y-4">
              {['Wellness Exams', 'Vaccinations', 'Diagnostic Testing', 'Geriatric Care', 'End of Life Care'].map(link => (
                <li key={link}>
                  <Link to="/services" className="hover:text-emerald-400 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>1-800-VET-HOME <br/><span className="text-sm text-slate-500">24/7 Emergency Support</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>care@vethome.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Available in major metropolitan areas nationwide.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} VetHome Medical Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
