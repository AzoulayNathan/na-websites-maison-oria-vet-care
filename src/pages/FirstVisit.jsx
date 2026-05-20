import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Check, ArrowRight, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

export default function FirstVisit() {
  const { t } = useLang();
  const sections = t('firstVisitPage.sections');
  const checklist = t('firstVisitPage.checklist');

  return (
    <>
      <PageHeader title={t('firstVisitPage.title')} subtitle={t('firstVisitPage.forWho')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sections */}
          <div className="space-y-4 mb-12">
            {sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-porcelain rounded-xl border border-sand/30 p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center text-xs font-body text-sage font-medium">
                    {i + 1}
                  </div>
                  <h3 className="font-body text-sm font-medium text-forest">{s.name}</h3>
                </div>
                <p className="text-sm font-body text-ink/55 leading-relaxed pl-9">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Checklist */}
          <div className="bg-porcelain rounded-2xl border border-sage/20 p-6 sm:p-8 mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FolderOpen className="w-5 h-5 text-sage" />
              <h3 className="font-heading text-lg text-forest">Checklist</h3>
            </div>
            <ul className="space-y-2">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage flex-shrink-0" />
                  <span className="text-sm font-body text-ink/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link to="/appointment">
              <Button className="bg-forest text-porcelain rounded-full px-8 py-5 font-body text-sm">
                {t('firstVisitPage.cta')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}