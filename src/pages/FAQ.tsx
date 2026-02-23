import { SEO } from '../components/SEO';
import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'Is mobile veterinary care safe?', a: 'Absolutely. We utilize the same medical-grade equipment and adhere to the identical clinical protocols as high-end stationary hospitals. Our mobile units are fully equipped for diagnostics, treatment, and stabilization.' },
    { q: 'What animals do you treat?', a: 'We primarily treat dogs and cats. If you have an exotic pet, please contact us directly so we can connect you with a specialist.' },
    { q: 'Do you handle emergencies?', a: 'We handle non-life-threatening urgent care (e.g., lacerations, vomiting, ear infections). For severe trauma, active seizures, or respiratory distress, we strongly advise heading immediately to the nearest 24/7 emergency hospital.' },
    { q: 'Do you bring equipment?', a: 'Yes. We arrive with portable digital scales, microscopes, blood chemistry analyzers, ultrasound machines, and a fully stocked mobile pharmacy.' },
    { q: 'How do prescriptions work?', a: 'We carry a comprehensive inventory of common medications. For specialized or long-term medications, we offer home delivery through our online pharmacy partner, or we can authorize a prescription at your local human pharmacy.' },
    { q: 'What areas do you cover?', a: 'We cover the entire metropolitan area and surrounding suburbs within a 25-mile radius. Enter your zip code on our contact page to verify coverage.' },
    { q: 'Is it more expensive than a clinic?', a: 'Our base house call fee is typically slightly higher than a standard clinic exam fee to account for travel time and dedicated undivided attention. However, our diagnostic and treatment costs are highly competitive.' },
    { q: 'How do I prepare my home?', a: 'Simply choose a well-lit, quiet room where your pet feels comfortable. Contain cats in a small room (like a bathroom) 30 minutes before arrival to prevent them from hiding.' }
  ];

  return (
    <>
      <SEO title="Frequently Asked Questions" description="Answers to common questions about our mobile veterinary service." />
      
      <section className="bg-slate-50 pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Questions? We have answers.</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Learn how our premium mobile clinic operates and what you can expect during a house call.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:border-emerald-200">
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                >
                  <span className="font-semibold text-lg text-slate-900 pr-8">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>
                <div className={`px-6 pb-6 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pb-0'}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 bg-emerald-50 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 justify-between border border-emerald-100">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Still have questions?</h3>
              <p className="text-slate-600">Our care coordinators are standing by to assist you.</p>
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-500 transition-colors shrink-0 whitespace-nowrap">
              <MessageCircle className="w-5 h-5" /> Contact Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
