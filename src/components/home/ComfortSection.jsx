import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Scissors, Home, ArrowRight } from 'lucide-react';

export default function ComfortSection() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-forest">
            {t('comfort.title')}
          </h2>
          <p className="mt-4 text-base font-body text-ink/55 max-w-2xl mx-auto leading-relaxed">
            {t('comfort.text')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link to="/grooming" className="block group">
              <div className="bg-porcelain rounded-2xl p-6 sm:p-8 border border-sand/30 hover:border-sage/40 transition-all duration-300 hover:shadow-sm h-full">
                <div className="w-10 h-10 rounded-full bg-taupe/10 flex items-center justify-center mb-4">
                  <Scissors className="w-5 h-5 text-taupe" />
                </div>
                <h3 className="font-heading text-lg font-medium text-forest mb-2">{t('comfort.cta1')}</h3>
                <p className="text-sm font-body text-ink/45 leading-relaxed">
                  {t('grooming.services')?.[0]?.desc || ''}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-body text-blush group-hover:gap-2 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/boarding" className="block group">
              <div className="bg-porcelain rounded-2xl p-6 sm:p-8 border border-sand/30 hover:border-sage/40 transition-all duration-300 hover:shadow-sm h-full">
                <div className="w-10 h-10 rounded-full bg-gentle/10 flex items-center justify-center mb-4">
                  <Home className="w-5 h-5 text-gentle" />
                </div>
                <h3 className="font-heading text-lg font-medium text-forest mb-2">{t('comfort.cta2')}</h3>
                <p className="text-sm font-body text-ink/45 leading-relaxed">
                  {t('boarding.sections')?.[0]?.desc || ''}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-body text-blush group-hover:gap-2 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}