import { SEO } from '../components/SEO';
import { CalendarCheck, FileText, Home, Stethoscope, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowItWorks() {
  const steps = [
    {
      icon: CalendarCheck,
      title: 'Book Online or Contact Us',
      desc: 'Use our seamless online booking platform to select a date and time that fits your schedule. Alternatively, our care coordinators are available 24/7 by phone.',
      note: 'We accommodate same-day appointments for urgent, non-life-threatening concerns.'
    },
    {
      icon: FileText,
      title: 'Medical History Review',
      desc: 'Before we arrive, our clinical team reviews your pet’s previous medical records to ensure we are fully prepared. We coordinate directly with your previous vet if needed.',
      note: 'Upload records securely via your client portal.'
    },
    {
      icon: Home,
      title: 'The Home Visit',
      desc: 'Our fully equipped mobile clinic arrives at your doorstep. A licensed veterinarian and a registered veterinary technician will enter your home, allowing your pet to remain relaxed in their favorite spot.',
      note: 'Visits typically last 45-60 minutes, ensuring thorough, unhurried care.'
    },
    {
      icon: Stethoscope,
      title: 'Comprehensive Examination & Treatment',
      desc: 'We perform a full nose-to-tail physical exam, administer necessary vaccinations, draw blood for diagnostics, or provide specialized treatments right in your living room.',
      note: 'We bring all necessary medical equipment, including portable scales and diagnostics.'
    },
    {
      icon: HeartHandshake,
      title: 'Follow-up & Support',
      desc: 'After the visit, you will receive a detailed digital health report. Our team remains available for follow-up questions, prescription management, and ongoing support.',
      note: 'Direct messaging with your clinical team is available.'
    }
  ];

  return (
    <>
      <SEO title="How It Works" description="Discover the seamless, stress-free process of booking a mobile veterinary appointment with VetHome." />
      
      <section className="bg-slate-50 pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Veterinary care made simple.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We have optimized the clinical experience to be entirely stress-free for both you and your pet. No waiting rooms, no car sickness, just professional care.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-emerald-100 rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="relative z-10 w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-600/20 md:mt-2">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow">
                    <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full mb-4">Step {i + 1}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">{step.desc}</p>
                    <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl flex items-start gap-3 text-sm">
                      <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-600" />
                      <p>{step.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the difference today.</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Your pet deserves the best care, delivered in the most comforting environment possible.</p>
          <Link to="/contact" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg">
            Schedule Your First Visit
          </Link>
        </div>
      </section>
    </>
  );
}
