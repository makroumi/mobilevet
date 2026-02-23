import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin, Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO title="Contact & Booking" description="Schedule your at-home veterinary appointment or contact our care coordinators." />
      
      <section className="bg-slate-50 pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">We're here for your pet.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Connect with our care coordinators to schedule a house call, request records, or ask questions about our clinical protocols.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 flex gap-4">
                <ShieldAlert className="w-8 h-8 text-red-500 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-1">Emergency Protocol</h3>
                  <p className="text-red-700">If your pet is experiencing active seizures, severe trauma, or respiratory distress, please proceed immediately to the nearest 24/7 veterinary emergency hospital.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Phone</h4>
                  <p className="text-slate-600 mb-1">1-800-VET-HOME</p>
                  <p className="text-sm text-slate-500">Available 24/7</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Email</h4>
                  <p className="text-slate-600 mb-1">care@vethome.com</p>
                  <p className="text-sm text-slate-500">Replies within 2 hours</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Operating Hours</h4>
                  <p className="text-slate-600 mb-1">Mon-Sun: 8am - 8pm</p>
                  <p className="text-sm text-slate-500">By appointment only</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Coverage Area</h4>
                  <p className="text-slate-600 mb-1">Nationwide Metro</p>
                  <p className="text-sm text-slate-500">Check your zip code</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-64 relative">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80" alt="Map placeholder" className="w-full h-full object-cover opacity-60 grayscale" />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[2px]">
                  <div className="bg-white px-6 py-3 rounded-full shadow-lg font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="text-emerald-500" /> Verify Your Zip Code
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              {submitted ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white p-12 text-center z-10">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received</h3>
                  <p className="text-lg text-slate-600 mb-8">A care coordinator will contact you within 15 minutes to confirm your appointment details.</p>
                  <button onClick={() => setSubmitted(false)} className="text-emerald-600 font-bold hover:underline">Submit another request</button>
                </div>
              ) : null}

              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="(555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Zip Code</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="12345" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors text-slate-700">
                    <option>Wellness Exam</option>
                    <option>Vaccinations</option>
                    <option>Sick Visit (Urgent)</option>
                    <option>Chronic Care Management</option>
                    <option>End of Life Care</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Additional Details (Optional)</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none" placeholder="Briefly describe your pet's needs..."></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                  Request Appointment
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">By submitting this form, you agree to our privacy policy and terms of service. Your data is securely encrypted.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
