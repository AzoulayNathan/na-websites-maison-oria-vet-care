import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-porcelain">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 right-10 w-64 h-64 text-sage/10 opacity-60" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
          <path d="M100 40 C110 60, 130 70, 140 100 C130 110, 110 120, 100 140 C90 120, 70 110, 60 100 C70 70, 90 60, 100 40Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
        </svg>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand/40 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm font-body tracking-[0.15em] text-taupe uppercase mb-4 sm:mb-6"
          >
            {t('hero.eyebrow')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-forest leading-tight"
          >
            {t('hero.headline')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg font-body text-ink/60 leading-relaxed max-w-2xl"
          >
            {t('hero.sub')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link to="/appointment">
              <Button className="bg-forest hover:bg-forest/90 text-porcelain font-body rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto">
                {t('hero.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/pet-profile">
              <Button variant="outline" className="border-forest/30 text-forest hover:bg-sage/10 font-body rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto">
                {t('hero.cta2')}
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-6 flex items-center gap-3"
          >
            <Link to="/urgency-guide" className="inline-flex items-center gap-2 text-sm font-body text-blush hover:text-blush/80 transition-colors">
              <AlertTriangle className="w-3.5 h-3.5" />
              {t('hero.emergencyLink')}
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="mt-10 sm:mt-14 text-xs font-body tracking-wider text-taupe/60 uppercase"
          >
            {t('hero.trust')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}