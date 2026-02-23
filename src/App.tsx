import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { HowItWorks } from './pages/HowItWorks';
import { Pricing } from './pages/Pricing';
import { FAQ } from './pages/FAQ';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
