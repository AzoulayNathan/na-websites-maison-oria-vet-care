import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { FolderOpen, ArrowRight, FileCheck, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FirstVisitSection() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Folder visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-cream rounded-2xl p-8 sm:p-10 border border-sand/40 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <FolderOpen className="w-6 h-6 text-sage" />
                <span className="font-heading text-sm text-forest/60 tracking-wider uppercase">Dossier de soin</span>
              </div>
              <div className="space-y-3">
                {['Identification', 'Vaccination', 'Alimentation', 'Comportement', 'Historique'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-porcelain rounded-lg px-4 py-3 border border-sand/20">
                    <div className="w-2 h-2 rounded-full bg-sage/60" />
                    <span className="text-sm font-body text-ink/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-forest leading-snug">
              {t('firstVisit.title')}
            </h2>
            <p className="mt-4 text-base font-body text-ink/55 leading-relaxed">
              {t('firstVisit.text')}
            </p>
            <div className="mt-8 space-y-3">
              <Link to="/first-visit" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
                  <ArrowRight className="w-4 h-4 text-forest" />
                </div>
                <span className="font-body text-sm text-forest group-hover:text-forest/80 transition-colors">{t('firstVisit.cta1')}</span>
              </Link>
              <Link to="/pet-profile" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
                  <UserPlus className="w-4 h-4 text-forest" />
                </div>
                <span className="font-body text-sm text-forest group-hover:text-forest/80 transition-colors">{t('firstVisit.cta2')}</span>
              </Link>
              <Link to="/first-visit" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-sage/15 flex items-center justify-center group-hover:bg-sage/25 transition-colors">
                  <FileCheck className="w-4 h-4 text-forest" />
                </div>
                <span className="font-body text-sm text-forest group-hover:text-forest/80 transition-colors">{t('firstVisit.cta3')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}