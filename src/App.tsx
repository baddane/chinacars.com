/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import ScrollToTop from '@/src/components/layout/ScrollToTop';
import Home from '@/src/pages/Home';
import News from '@/src/pages/News';
import Brands from '@/src/pages/Brands';
import Hub from '@/src/pages/Hub';
import About from '@/src/pages/About';
import Contact from '@/src/pages/Contact';
import LegalNotice from '@/src/pages/LegalNotice';
import NotFound from '@/src/pages/NotFound';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main id="main" className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/marques" element={<Brands />} />
              <Route
                path="/comparatifs"
                element={
                  <Hub
                    title="Comparatifs"
                    description="Retrouvez tous nos comparatifs détaillés entre les voitures chinoises vendues au Maroc et leurs rivales."
                    canonical="/comparatifs"
                    breadcrumbLabel="Comparatifs"
                    ctaPrimary={{ label: "Voir l'actualité", to: '/actualites' }}
                  />
                }
              />
              <Route
                path="/guides"
                element={
                  <Hub
                    title="Guides pratiques"
                    description="Importation, homologation, assurance, entretien : nos guides pour tout savoir sur l'achat d'une voiture chinoise au Maroc."
                    canonical="/guides"
                    breadcrumbLabel="Guides"
                    ctaPrimary={{ label: "Voir les marques", to: '/marques' }}
                  />
                }
              />
              <Route
                path="/electrique"
                element={
                  <Hub
                    title="Véhicules électriques chinois"
                    description="L'essentiel sur les voitures électriques chinoises : autonomie, recharge, prix et disponibilité au Maroc."
                    canonical="/electrique"
                    breadcrumbLabel="Électrique"
                  />
                }
              />
              <Route
                path="/maroc"
                element={
                  <Hub
                    title="Voitures chinoises au Maroc"
                    description="Actualité, prix, importation et SAV des voitures chinoises spécifiquement pour le marché marocain."
                    canonical="/maroc"
                    breadcrumbLabel="Maroc"
                  />
                }
              />
              <Route path="/a-propos" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<LegalNotice />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
