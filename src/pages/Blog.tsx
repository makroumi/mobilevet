import { SEO } from '../components/SEO';
import { ArrowRight, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Signs Your Pet Needs a Vet Visit at Home',
      excerpt: 'Discover the subtle indicators of illness in cats and dogs, and why an at-home evaluation provides the most accurate clinical picture.',
      date: 'Oct 12, 2023',
      author: 'Dr. Sarah Jenkins, DVM',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80',
      category: 'Health Guidelines'
    },
    {
      id: 2,
      title: 'The Psychological Benefits of Mobile Veterinary Care',
      excerpt: 'How eliminating clinic anxiety significantly improves diagnostic accuracy and accelerates recovery times for your furry companion.',
      date: 'Sep 28, 2023',
      author: 'Dr. Michael Chen, DVM',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1768&q=80',
      category: 'Behavioral Insights'
    },
    {
      id: 3,
      title: 'Vaccination Schedules for Dogs and Cats: A Comprehensive Guide',
      excerpt: 'Understanding core vs. non-core vaccines, titer testing, and how we customize immunization protocols based on your pet’s unique lifestyle.',
      date: 'Sep 15, 2023',
      author: 'Dr. Emily Carter, DVM',
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      category: 'Preventive Care'
    },
    {
      id: 4,
      title: 'Navigating Senior Pet Care: Enhancing the Golden Years',
      excerpt: 'Recognizing cognitive dysfunction, managing osteoarthritis pain, and nutritional strategies for aging pets, delivered comfortably at home.',
      date: 'Aug 30, 2023',
      author: 'Dr. Sarah Jenkins, DVM',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80',
      category: 'Geriatric Medicine'
    }
  ];

  return (
    <>
      <SEO title="Blog & Education" description="Expert veterinary advice, health guidelines, and insights from our leading medical board." />
      
      <section className="bg-slate-50 pt-24 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Clinical Insights & Education</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We empower pet parents with evidence-based medical knowledge, directly from our advisory board of licensed veterinarians.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.date}</div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {article.author}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link to={`/blog/${article.id}`} className="inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:text-emerald-500 mt-auto">
                    Read Full Article <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
