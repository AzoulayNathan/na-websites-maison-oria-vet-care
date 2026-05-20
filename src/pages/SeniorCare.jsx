import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

export default function SeniorCare() {
  const { t } = useLang();
  const topics = t('seniorCare.topics');
  const program = t('seniorCare.program');

  return (
    <>
      <PageHeader title={t('seniorCare.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Topics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-porcelain rounded-xl border border-sand/30 p-4 text-center hover:border-sage/30 transition-colors"
              >
                <Heart className="w-4 h-4 text-sage mx-auto mb-2" />
                <span className="text-xs font-body font-medium text-forest">{topic}</span>
              </motion.div>
            ))}
          </div>

          {/* Program */}
          <div className="bg-porcelain rounded-2xl border border-sage/20 p-6 sm:p-8">
            <h3 className="font-heading text-xl text-forest mb-2">{program.name}</h3>
            <ul className="mt-4 space-y-2">
              {program.includes.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage flex-shrink-0" />
                  <span className="text-sm font-body text-ink/60">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/appointment" className="mt-6 inline-block">
              <Button className="bg-forest text-porcelain rounded-full px-6 py-4 font-body text-sm">
                {t('seniorCare.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}