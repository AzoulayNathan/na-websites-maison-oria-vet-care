import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PageHeader from '@/components/shared/PageHeader';

export default function Prevention() {
  const { t } = useLang();
  const sections = t('prevention.sections');
  const [openIdx, setOpenIdx] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHeader title={t('prevention.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className={`w-full text-left bg-porcelain rounded-xl border transition-all duration-300 ${
                    openIdx === i ? 'border-sage/40 shadow-sm' : 'border-sand/30 hover:border-sage/30'
                  }`}
                >
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-4 h-4 text-sage" />
                      <span className="font-body text-sm font-medium text-forest">{section.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-taupe transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openIdx === i && (
                  <div className="bg-porcelain rounded-b-xl border-x border-b border-sage/20 px-5 pb-4 pt-1">
                    <p className="text-sm font-body text-ink/55 leading-relaxed">{section.desc}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Reminder form */}
          <div className="mt-14 bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8">
            <h3 className="font-heading text-lg text-forest mb-6">{t('prevention.reminderTitle')}</h3>
            {submitted ? (
              <p className="text-sm font-body text-sage">{t('contact.success')}</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                {Object.entries(t('prevention.reminderFields')).map(([key, label]) => (
                  <div key={key}>
                    <Label className="text-xs font-body text-ink/50 mb-1">{label}</Label>
                    <Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <Button type="submit" className="bg-forest text-porcelain rounded-full px-6 py-4 font-body text-sm">
                    {t('prevention.reminderCta')}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}