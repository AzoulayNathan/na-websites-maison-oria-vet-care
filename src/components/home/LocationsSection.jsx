import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LocationsSection() {
  const { t } = useLang();
  const [active, setActive] = useState('lyon');
  const loc = t(`locations.${active}`);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl text-forest text-center mb-10 sm:mb-14"
        >
          {t('locations.title')}
        </motion.h2>

        {/* Switcher */}
        <div className="flex justify-center gap-2 mb-8">
          {['lyon', 'nice'].map(city => (
            <button
              key={city}
              onClick={() => setActive(city)}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                active === city
                  ? 'bg-forest text-porcelain'
                  : 'bg-porcelain text-forest/60 border border-sand/40 hover:border-sage/40'
              }`}
            >
              {city.charAt(0).toUpperCase() + city.slice(1)}
            </button>
          ))}
        </div>

        {/* Location card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-lg mx-auto bg-porcelain rounded-2xl p-6 sm:p-8 border border-sand/30"
        >
          <h3 className="font-heading text-xl font-medium text-forest mb-4">{loc.name}</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-sage mt-0.5" />
              <span className="text-sm font-body text-ink/60">{loc.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-sage" />
              <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="text-sm font-body text-forest hover:text-blush transition-colors">{loc.phone}</a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-sage mt-0.5" />
              <div>
                <p className="text-sm font-body text-ink/60">{loc.hours}</p>
                <p className="text-xs font-body text-ink/40 mt-0.5">{loc.closed}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            <a href={`tel:${loc.phone.replace(/\s/g, '')}`}>
              <Button size="sm" variant="outline" className="rounded-full border-forest/20 text-forest text-xs">
                {t('locations.cta_call')}
              </Button>
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="outline" className="rounded-full border-forest/20 text-forest text-xs">
                {t('locations.cta_route')}
              </Button>
            </a>
            <Link to="/appointment">
              <Button size="sm" className="rounded-full bg-forest text-porcelain text-xs">
                {t('locations.cta_rdv')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}