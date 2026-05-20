import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

export default function CarePlans() {
  const { t } = useLang();
  const plans = t('carePlans.plans');

  return (
    <>
      <PageHeader title={t('carePlans.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-porcelain rounded-xl border border-sand/30 p-5 sm:p-6 hover:border-sage/40 transition-all duration-300 hover:shadow-sm flex flex-col"
              >
                <FileText className="w-4 h-4 text-sage mb-3" />
                <h3 className="font-heading text-base font-medium text-forest mb-1">{plan.name}</h3>
                <p className="text-xs font-body text-blush mb-2">{plan.forWho}</p>
                <p className="text-xs font-body text-ink/50 leading-relaxed flex-1">{plan.includes}</p>
                <p className="mt-3 text-[10px] font-body text-taupe/60 uppercase tracking-wider">{plan.rhythm}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/appointment">
              <Button className="bg-forest text-porcelain rounded-full px-8 py-5 font-body text-sm">
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