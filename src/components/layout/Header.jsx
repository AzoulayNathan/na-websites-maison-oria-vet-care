import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { Menu, X, Phone, Calendar, AlertTriangle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { key: 'care', path: '/veterinary-care' },
  { key: 'prevention', path: '/prevention' },
  { key: 'grooming', path: '/grooming' },
  { key: 'boarding', path: '/boarding' },
  { key: 'senior', path: '/senior-care' },
  { key: 'urgency', path: '/urgency-guide' },
  { key: 'journal', path: '/journal' },
  { key: 'locations', path: '/locations' },
  { key: 'contact', path: '/contact' },
];

export default function Header() {
  const { t, lang, toggleLang } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-porcelain/95 backdrop-blur-md border-b border-sand/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-tight">
              <span className="font-heading text-lg sm:text-xl font-semibold text-forest tracking-wide">MAISON ORIA</span>
              <span className="text-[10px] sm:text-xs tracking-[0.2em] text-taupe font-body uppercase">Vet & Care</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.key}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-body transition-colors rounded-md
                    ${location.pathname === link.path ? 'text-forest font-medium bg-sage/15' : 'text-ink/70 hover:text-forest hover:bg-sage/10'}`}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleLang}
                className="text-xs font-body font-semibold tracking-wider text-taupe hover:text-forest transition-colors px-2 py-1 rounded border border-sand/50 hover:border-sage"
              >
                {lang === 'fr' ? 'EN' : 'FR'}
              </button>

              <Link to="/appointment" className="hidden sm:inline-flex">
                <Button className="bg-forest hover:bg-forest/90 text-porcelain font-body text-sm px-4 py-2 rounded-full">
                  {t('nav.appointment')}
                </Button>
              </Link>

              {/* Mobile menu */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="xl:hidden">
                  <button className="p-2 text-forest">
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-porcelain w-80 p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-sand/30">
                      <span className="font-heading text-lg font-semibold text-forest">MAISON ORIA</span>
                      <span className="text-xs tracking-widest text-taupe ml-2">VET & CARE</span>
                    </div>
                    <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                      {navLinks.map(link => (
                        <Link
                          key={link.key}
                          to={link.path}
                          onClick={() => setOpen(false)}
                          className={`block px-4 py-3 rounded-lg font-body text-sm transition-colors
                            ${location.pathname === link.path ? 'bg-sage/15 text-forest font-medium' : 'text-ink/70 hover:bg-sage/10'}`}
                        >
                          {t(`nav.${link.key}`)}
                        </Link>
                      ))}
                    </nav>
                    <div className="p-4 space-y-2 border-t border-sand/30">
                      <Link to="/appointment" onClick={() => setOpen(false)}>
                        <Button className="w-full bg-forest text-porcelain rounded-full">{t('nav.appointment')}</Button>
                      </Link>
                      <Link to="/pet-profile" onClick={() => setOpen(false)}>
                        <Button variant="outline" className="w-full border-forest text-forest rounded-full mt-2">{t('nav.petProfile')}</Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-forest/95 backdrop-blur-md border-t border-sage/20">
        <div className="grid grid-cols-4 h-14">
          <a href="tel:+33481623914" className="flex flex-col items-center justify-center gap-0.5 text-porcelain/90">
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-body">{t('nav.call')}</span>
          </a>
          <Link to="/appointment" className="flex flex-col items-center justify-center gap-0.5 text-porcelain/90">
            <Calendar className="w-4 h-4" />
            <span className="text-[10px] font-body">RDV</span>
          </Link>
          <Link to="/urgency-guide" className="flex flex-col items-center justify-center gap-0.5 text-blush">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-[10px] font-body">{t('nav.emergency')}</span>
          </Link>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-0.5 text-porcelain/90">
            <MapPin className="w-4 h-4" />
            <span className="text-[10px] font-body">{t('nav.directions')}</span>
          </a>
        </div>
      </div>
    </>
  );
}