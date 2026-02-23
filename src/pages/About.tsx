import { SEO } from '../components/SEO';
import { Target, Heart, Award, ShieldCheck, Users, Stethoscope } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO title="About Us" description="Learn about VetHome's mission to revolutionize veterinary care through compassion, technology, and convenience." />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-24 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Redefining the standard of veterinary care.</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              We are a national network of premium mobile veterinary clinics, combining cutting-edge medical technology with the undeniable comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white -mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center shadow-xl shadow-emerald-900/5">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                To eliminate the fear, stress, and anxiety from veterinary medicine.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe that every pet deserves exceptional healthcare in the environment where they feel safest. By bringing the clinic to your doorstep, we foster stronger bonds, deliver more accurate diagnostics, and provide unparalleled convenience for pet parents.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Ethical Standards', icon: ShieldCheck },
                { label: 'Animal Welfare', icon: Heart },
                { label: 'Clinical Excellence', icon: Award },
                { label: 'Community Focus', icon: Users }
              ].map((value, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{value.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A foundation of clinical expertise.</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded by Dr. Sarah Jenkins, DVM, a visionary in veterinary medicine who recognized a fundamental flaw in traditional practice: the clinic environment itself often hindered accurate diagnosis and traumatized the patient.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                After 15 years as Chief of Staff at a leading emergency veterinary hospital, Dr. Jenkins assembled a medical advisory board of specialists to design a mobile care protocol that sacrifices zero clinical capability while maximizing patient comfort.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Dr. Sarah Jenkins" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Dr. Sarah Jenkins, DVM</h4>
                  <p className="text-slate-500">Founder & Chief Medical Officer</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1768&q=80" 
                alt="Veterinary professionals in a modern setting" 
                className="rounded-3xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <Stethoscope className="w-8 h-8 text-emerald-500" />
                  <span className="text-3xl font-bold text-slate-900">50+</span>
                </div>
                <p className="text-slate-600 font-medium">Licensed mobile veterinarians nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
