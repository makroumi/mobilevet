import { SEO } from '../components/SEO';
import { Stethoscope, Syringe, HeartPulse, Activity, Moon, BookOpen, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      id: 'preventive-care',
      icon: Stethoscope,
      title: 'Preventive Care',
      description: 'Comprehensive annual wellness exams, vital sign monitoring, parasite screening, and individualized health planning. We detect issues before they become emergencies.',
      when: 'Annually for all pets; semi-annually for seniors.',
      benefits: 'Early detection, prolonged lifespan, reduced long-term healthcare costs.',
    },
    {
      id: 'vaccinations',
      icon: Syringe,
      title: 'Vaccinations',
      description: 'Customized vaccination protocols based on your pet’s lifestyle, risk factors, and age. We provide core and non-core vaccines.',
      when: 'Puppy/kitten series, followed by 1-year or 3-year boosters.',
      benefits: 'Immunity against fatal diseases, regulatory compliance, peace of mind.',
    },
    {
      id: 'diagnostics',
      icon: Activity,
      title: 'Diagnostics',
      description: 'On-the-spot blood chemistry, complete blood counts, urinalysis, and portable ultrasound. We bring the laboratory to your living room.',
      when: 'During illness, senior wellness exams, or pre-surgical screening.',
      benefits: 'Immediate answers, reduced stress compared to hospital transport.',
    },
    {
      id: 'geriatric-care',
      icon: HeartPulse,
      title: 'Geriatric Care',
      description: 'Specialized management of chronic conditions such as osteoarthritis, kidney disease, cognitive dysfunction, and heart disease.',
      when: 'Pets over 7 years of age (varies by breed).',
      benefits: 'Improved mobility, pain management, enhanced quality of life.',
    },
    {
      id: 'nutrition',
      icon: Apple,
      title: 'Nutrition Counseling',
      description: 'Expert guidance on dietary management for weight loss, allergies, kidney disease, or optimal puppy growth.',
      when: 'Any life stage, especially for overweight pets or those with chronic illness.',
      benefits: 'Optimal body condition, disease management through diet.',
    },
    {
      id: 'end-of-life',
      icon: Moon,
      title: 'Home Euthanasia',
      description: 'The most compassionate, peaceful farewell possible. We manage pain and anxiety so your pet can pass comfortably in their favorite spot.',
      when: 'When quality of life has irreparably declined.',
      benefits: 'Zero clinic trauma for pet and family, private grieving space.',
    }
  ];

  return (
    <>
      <SEO title="Our Services" description="Comprehensive mobile veterinary services including wellness exams, diagnostics, vaccinations, and chronic care." />
      
      {/* Header */}
      <section className="bg-emerald-900 text-white pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Clinical excellence, delivered.</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Explore our comprehensive suite of veterinary services. We offer the full capabilities of a premium animal hospital, entirely within the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                <service.icon className="w-10 h-10" />
              </div>
              <div className="space-y-6 flex-grow">
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
                
                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-500" /> When it's needed
                    </h4>
                    <p className="text-slate-600">{service.when}</p>
                  </div>
                  <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-emerald-500" /> Benefits
                    </h4>
                    <p className="text-slate-600">{service.benefits}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/contact" className="inline-flex items-center justify-center bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
                    Book this service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
