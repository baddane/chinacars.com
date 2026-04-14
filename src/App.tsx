/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Home from '@/src/pages/Home';
import News from '@/src/pages/News';
import Brands from '@/src/pages/Brands';

// Placeholder components for other pages
const Comparisons = () => <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto"><h1>Comparatifs</h1></div>;
const Guides = () => <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto"><h1>Guides</h1></div>;
const Electric = () => <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto"><h1>Électrique</h1></div>;
const Morocco = () => <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto"><h1>Maroc</h1></div>;

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/marques" element={<Brands />} />
              <Route path="/comparatifs" element={<Comparisons />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/electrique" element={<Electric />} />
              <Route path="/maroc" element={<Morocco />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
