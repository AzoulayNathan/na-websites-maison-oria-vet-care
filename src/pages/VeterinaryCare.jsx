import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

export default function VeterinaryCare() {
  const { t } = useLang();
  const [open, setOpen] = useState(null);
  const services = t('vetCare.services');

  return (
    <>
      <PageHeader title={t('vetCare.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Medical caution */}
          <div className="bg-gentle/10 border border-gentle/20 rounded-xl p-4 mb-10 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-gentle mt-0.5 flex-shrink-0" />
            <p className="text-xs font-body text-ink/50">{t('vetCare.caution')}</p>
          </div>

          {/* Service rows */}
          <div className="space-y-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full text-left bg-porcelain rounded-xl border transition-all duration-300 ${
                    open === i ? 'border-sage/40 shadow-sm' : 'border-sand/30 hover:border-sage/30'
                  }`}
                >
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center text-xs font-body text-sage font-medium">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="font-body text-sm font-medium text-forest">{service.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-taupe transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-porcelain rounded-b-xl border-x border-b border-sage/20 px-5 pb-5 pt-1 space-y-3">
                        {service.what && (
                          <div>
                            <p className="text-[10px] font-body uppercase tracking-wider text-taupe/60 mb-1">{t('lang') === 'fr' ? 'Description' : 'Description'}</p>
                            <p className="text-sm font-body text-ink/55 leading-relaxed">{service.what}</p>
                          </div>
                        )}
                        {service.when && (
                          <div>
                            <p className="text-[10px] font-body uppercase tracking-wider text-taupe/60 mb-1">{t('lang') === 'fr' ? 'Quand consulter' : 'When to book'}</p>
                            <p className="text-sm font-body text-ink/55">{service.when}</p>
                          </div>
                        )}
                        {service.bring && (
                          <div>
                            <p className="text-[10px] font-body uppercase tracking-wider text-taupe/60 mb-1">{t('lang') === 'fr' ? 'À apporter' : 'What to bring'}</p>
                            <p className="text-sm font-body text-ink/55">{service.bring}</p>
                          </div>
                        )}
                        {service.next && (
                          <div>
                            <p className="text-[10px] font-body uppercase tracking-wider text-taupe/60 mb-1">{t('lang') === 'fr' ? 'Étapes suivantes' : 'Next steps'}</p>
                            <p className="text-sm font-body text-ink/55">{service.next}</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/appointment">
              <Button className="bg-forest hover:bg-forest/90 text-porcelain font-body rounded-full px-8 py-5">
                {t('nav.appointment')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}