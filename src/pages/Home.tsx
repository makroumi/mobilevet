import { ArrowRight, CheckCircle2, HeartPulse, Activity, Syringe, Clock, Stethoscope, Star, Shield, Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Premium mobile veterinary care delivered to your doorstep. Stress-free, professional, and compassionate at-home vet services for your pets." 
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Veterinarian examining dog at home" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Available in your area
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Veterinary Care, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Delivered to Your Doorstep.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Experience stress-free, premium medical care for your pets. Our licensed veterinarians bring state-of-the-art clinical expertise directly to the comfort of your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Book Appointment <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex justify-center items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-medium transition-all">
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-slate-200">
              {[
                { label: 'Licensed Veterinarians', icon: Shield },
                { label: '10+ Years Experience', icon: Clock },
                { label: '5.0 Star Reviews', icon: Star },
                { label: 'Fully Equipped Mobile Unit', icon: Car }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <item.icon className="w-5 h-5 text-emerald-500" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Medical Care</h2>
            <p className="text-lg text-slate-600">We offer a full spectrum of clinical services, identical to what you'd find in a high-end stationary practice, all from your living room.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'General Consultations', desc: 'Thorough physical exams and health assessments for peace of mind.', icon: Stethoscope },
              { title: 'Vaccinations & Prevention', desc: 'Core and non-core vaccines, plus parasite prevention protocols.', icon: Syringe },
              { title: 'Chronic Disease Management', desc: 'Ongoing care for conditions like diabetes, arthritis, and heart disease.', icon: HeartPulse },
              { title: 'Lab Testing & Diagnostics', desc: 'On-site bloodwork, urinalysis, and portable ultrasound diagnostics.', icon: Activity },
              { title: 'Emergency Assessment', desc: 'Rapid response evaluation and stabilization for urgent situations.', icon: Shield },
              { title: 'End-of-Life Care', desc: 'Compassionate, peaceful euthanasia in the familiar surroundings of home.', icon: HeartPulse }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-emerald-600 font-medium inline-flex items-center gap-1 group/link">
                  Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
                alt="Happy dog looking at camera" 
                className="rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 object-cover aspect-square"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why at-home veterinary care?</h2>
                <p className="text-lg text-slate-600">Eliminate the stress of the waiting room, the anxiety of the car ride, and the exposure to other sick animals. Experience healthcare tailored to your pet's comfort.</p>
              </div>

              <ul className="space-y-4">
                {[
                  { title: 'Zero Clinic Stress', desc: 'Pets remain in their safe, familiar environment.' },
                  { title: 'Undivided Attention', desc: 'Appointments are never rushed; our sole focus is your pet.' },
                  { title: 'Advanced Portable Tech', desc: 'We bring medical-grade diagnostics right to your living room.' },
                  { title: 'Total Convenience', desc: 'Save time commuting. We work around your busy schedule.' }
                ].map((benefit, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="mt-1 bg-emerald-100 p-1 rounded-full text-emerald-600 shrink-0 h-fit">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-lg">{benefit.title}</h4>
                      <p className="text-slate-600">{benefit.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Simple, Stress-Free Process</h2>
            <p className="text-lg text-slate-400">Premium care is just a few clicks away. Here is how we deliver health directly to your pet.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-slate-800 z-0"></div>
            {[
              { step: '01', title: 'Schedule Online', desc: 'Choose a time that works for you using our seamless booking platform.' },
              { step: '02', title: 'We Come to You', desc: 'Our mobile clinic arrives at your doorstep, fully equipped.' },
              { step: '03', title: 'Care & Follow-up', desc: 'Comprehensive examination followed by digital health records and continued support.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-2xl font-bold text-emerald-400">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to prioritize your pet's wellness?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">Join thousands of pet parents who have switched to the convenience and comfort of at-home veterinary care.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-emerald-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-colors shadow-lg">
              Book Appointment Now
            </Link>
            <Link to="/pricing" className="bg-transparent border-2 border-emerald-400 hover:border-white text-white px-8 py-4 rounded-full text-lg font-bold transition-colors">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
