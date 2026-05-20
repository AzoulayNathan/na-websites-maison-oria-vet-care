import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, AlertTriangle } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export default function Journal() {
  const { t } = useLang();
  const articles = t('journal.articles');

  return (
    <>
      <PageHeader title={t('journal.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disclaimer */}
          <div className="bg-gentle/10 border border-gentle/20 rounded-xl p-4 mb-8 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-gentle mt-0.5 flex-shrink-0" />
            <p className="text-xs font-body text-ink/50">{t('journal.disclaimer')}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-porcelain rounded-xl border border-sand/30 p-5 sm:p-6 hover:border-sage/40 transition-all duration-300 hover:shadow-sm group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-body bg-sage/10 text-forest/60 px-2.5 py-0.5 rounded-full">{article.category}</span>
                  <span className="text-[10px] font-body text-taupe/50 flex items-center gap-1">
                    <Clock className="w-3 h-3" />{article.time}
                  </span>
                </div>
                <h3 className="font-heading text-base font-medium text-forest mb-2 leading-snug group-hover:text-blush transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs font-body text-ink/45 leading-relaxed">{article.excerpt}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-body text-blush">
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}