import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Baby, Shield, Stethoscope, AlertCircle, Sparkles, Heart, FileText, ArrowRight } from 'lucide-react';

const icons = [Baby, Shield, Stethoscope, AlertCircle, Sparkles, Heart, FileText];
const colors = ['bg-gentle/20 text-gentle', 'bg-sage/20 text-sage', 'bg-forest/10 text-forest', 'bg-blush/20 text-blush', 'bg-taupe/20 text-taupe', 'bg-sage/30 text-forest', 'bg-forest/10 text-forest'];

export default function CarePathSection() {
  const { t } = useLang();
  const stages = t('carePath.stages');

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl text-forest text-center mb-12 sm:mb-16"
        >
          {t('carePath.title')}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-sand/60 -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-0">
            {stages.map((stage, i) => {
              const Icon = icons[i];
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative lg:flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-8`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className={`bg-porcelain rounded-xl p-5 sm:p-6 border border-sand/30 hover:border-sage/40 transition-all duration-300 hover:shadow-sm ${isLeft ? 'lg:ml-auto' : 'lg:mr-auto'} max-w-md`}>
                      <div className={`flex items-center gap-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${colors[i]} flex-shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-body text-taupe/60 uppercase tracking-wider mb-0.5">
                            {String(i + 1).padStart(2, '0')}
                          </p>
                          <h3 className="font-heading text-base sm:text-lg font-medium text-forest">{stage.name}</h3>
                        </div>
                      </div>
                      <p className="mt-3 text-sm font-body text-ink/55 leading-relaxed">{stage.desc}</p>
                      <Link
                        to={stage.link}
                        className="inline-flex items-center gap-1.5 mt-4 text-sm font-body font-medium text-blush hover:text-blush/80 transition-colors"
                      >
                        {stage.cta}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sage border-2 border-porcelain shadow-sm" />

                  {/* Spacer */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}