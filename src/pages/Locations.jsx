import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowRight, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const locationData = {
  lyon: {
    services: ['Consultation', 'Vaccination', 'Grooming', 'Boarding', 'Dental', 'Nutrition', 'Travel docs'],
    servicesFr: ['Consultation', 'Vaccination', 'Toilettage', 'Pension', 'Dentaire', 'Nutrition', 'Documents voyage'],
  },
  nice: {
    services: ['Consultation', 'Vaccination', 'Grooming', 'Dental', 'Nutrition', 'Travel docs'],
    servicesFr: ['Consultation', 'Vaccination', 'Toilettage', 'Dentaire', 'Nutrition', 'Documents voyage'],
  },
};

export default function Locations() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHeader title={t('locations.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {['lyon', 'nice'].map(city => {
              const loc = t(`locations.${city}`);
              const svc = lang === 'fr' ? locationData[city].servicesFr : locationData[city].services;
              return (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8"
                >
                  <h3 className="font-heading text-xl font-medium text-forest mb-5">{loc.name}</h3>
                  <div className="space-y-3 mb-5">
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

                  {/* Services */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {svc.map((s, i) => (
                      <span key={i} className="text-[10px] font-body bg-sage/10 text-forest/70 px-2.5 py-1 rounded-full">{s}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`}>
                      <Button size="sm" variant="outline" className="rounded-full border-forest/20 text-forest text-xs">{t('locations.cta_call')}</Button>
                    </a>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="rounded-full border-forest/20 text-forest text-xs">
                        <Navigation className="w-3 h-3 mr-1" />
                        {t('locations.cta_route')}
                      </Button>
                    </a>
                    <Link to="/appointment">
                      <Button size="sm" className="rounded-full bg-forest text-porcelain text-xs">{t('locations.cta_rdv')}</Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}