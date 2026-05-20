import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Syringe, Bug, Apple, Weight, SmilePlus, Scissors, Brain, CalendarCheck } from 'lucide-react';

const icons = [Syringe, Bug, Apple, Weight, SmilePlus, Scissors, Brain, CalendarCheck];

export default function EverydayCareSection() {
  const { t } = useLang();
  const items = t('everyday.items');
  const [active, setActive] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl text-forest text-center mb-12 sm:mb-16"
        >
          {t('everyday.title')}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => {
            const Icon = icons[i];
            const isActive = active === i;
            return (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setActive(isActive ? null : i)}
                className={`relative text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'bg-porcelain border-sage/50 shadow-sm'
                    : 'bg-porcelain/50 border-sand/30 hover:border-sage/30 hover:bg-porcelain'
                }`}
              >
                <Icon className={`w-5 h-5 mb-3 transition-colors ${isActive ? 'text-forest' : 'text-sage'}`} />
                <h3 className="font-body text-sm font-medium text-forest">{item.name}</h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-xs font-body text-ink/50 leading-relaxed">{item.why}</p>
                      <p className="mt-1.5 text-xs font-body text-blush/80">{item.when}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}