import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SeniorSection() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-20 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-5 h-5 text-sage" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-forest leading-snug">
              {t('seniorHome.title')}
            </h2>
            <p className="mt-4 text-base font-body text-ink/55 leading-relaxed">
              {t('seniorHome.text')}
            </p>
            <Link to="/senior-care" className="mt-8 inline-block">
              <Button variant="outline" className="border-forest/30 text-forest hover:bg-sage/10 font-body rounded-full px-8 py-5">
                {t('seniorHome.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}