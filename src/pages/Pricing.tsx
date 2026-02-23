import { SEO } from '../components/SEO';
import { Check, Info, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Pricing() {
  const plans = [
    {
      title: 'Standard Consultation',
      price: '$149',
      desc: 'Base house call fee including comprehensive physical examination.',
      features: [
        'Complete nose-to-tail exam',
        'Detailed digital health record',
        'Nutritional and behavioral consultation',
        'Travel fee included (within 15 miles)'
      ],
      button: 'Book Now',
      highlight: false
    },
    {
      title: 'Wellness Package',
      price: '$299',
      desc: 'Annual preventive care tailored to your pet’s life stage.',
      features: [
        'Everything in Standard Consultation',
        'Core vaccinations',
        'Heartworm and tick-borne disease screening',
        'Fecal parasite testing',
        'Nail trim and anal gland expression'
      ],
      button: 'Choose Wellness',
      highlight: true
    },
    {
      title: 'Senior Wellness',
      price: '$399',
      desc: 'Comprehensive diagnostics for early disease detection in pets over 7.',
      features: [
        'Everything in Wellness Package',
        'Complete blood count (CBC)',
        'Comprehensive blood chemistry panel',
        'Urinalysis',
        'Blood pressure measurement'
      ],
      button: 'Choose Senior',
      highlight: false
    }
  ];

  return (
    <>
      <SEO title="Pricing" description="Transparent, premium pricing for mobile veterinary services. No hidden fees." />
      
      <section className="bg-slate-50 pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Transparent, premium pricing.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We offer clinic-level capabilities with the unmatched convenience of a house call. Our pricing reflects the dedicated time, advanced portable equipment, and highly trained clinical staff brought directly to you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-3xl p-8 border ${plan.highlight ? 'border-emerald-500 shadow-xl shadow-emerald-500/10' : 'border-slate-200 shadow-sm'}`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">{plan.title}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-slate-500">/visit</span>
                  </div>
                  <p className="text-slate-600 h-12">{plan.desc}</p>
                  
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex gap-3">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/contact" className={`block w-full text-center py-4 rounded-full font-bold transition-colors ${plan.highlight ? 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-200' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                    {plan.button}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-emerald-400" />
              Additional Information
            </h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex gap-4">
                <Info className="w-6 h-6 shrink-0 text-slate-500 mt-1" />
                <p><strong>Additional Pets:</strong> Save on the house call fee when scheduling exams for multiple pets during the same visit ($75 per additional pet exam).</p>
              </div>
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 shrink-0 text-slate-500 mt-1" />
                <p><strong>Emergency Surcharge:</strong> Urgent, same-day fit-in appointments or after-hours care may incur a $150 urgency fee, depending on availability.</p>
              </div>
              <div className="flex gap-4">
                <Info className="w-6 h-6 shrink-0 text-slate-500 mt-1" />
                <p><strong>Medications & Diagnostics:</strong> Prices for specific blood panels, fine needle aspirates, and dispensed medications vary. Estimates are always provided before treatment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
