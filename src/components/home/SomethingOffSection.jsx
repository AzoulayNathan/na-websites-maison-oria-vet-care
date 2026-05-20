import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SomethingOffSection() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 bg-porcelain relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-blush/10 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-5 h-5 text-blush" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-forest">
              {t('somethingOff.title')}
            </h2>
            <p className="mt-4 text-base font-body text-ink/55 leading-relaxed">
              {t('somethingOff.text')}
            </p>
            <Link to="/urgency-guide" className="mt-8 inline-block">
              <Button className="bg-blush hover:bg-blush/90 text-porcelain font-body rounded-full px-8 py-5">
                {t('somethingOff.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-10 bg-blush/5 border border-blush/15 rounded-xl p-5 text-left"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-blush mt-0.5 flex-shrink-0" />
              <p className="text-xs font-body text-ink/50 leading-relaxed">
                {t('somethingOff.warning')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}