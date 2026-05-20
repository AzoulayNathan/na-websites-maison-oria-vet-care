import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCtaSection() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-forest relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="absolute bottom-0 right-0 w-96 h-96 text-sage" viewBox="0 0 200 200" fill="none">
          <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="150" cy="150" r="80" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-porcelain leading-snug">
            {t('finalCta.title')}
          </h2>
          <p className="mt-4 text-base font-body text-porcelain/60 leading-relaxed">
            {t('finalCta.text')}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/pet-profile">
              <Button className="bg-blush hover:bg-blush/90 text-porcelain font-body rounded-full px-8 py-5 w-full sm:w-auto">
                {t('finalCta.cta1')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/appointment">
              <Button variant="outline" className="border-porcelain/30 text-porcelain hover:bg-porcelain/10 font-body rounded-full px-8 py-5 w-full sm:w-auto">
                {t('finalCta.cta2')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}