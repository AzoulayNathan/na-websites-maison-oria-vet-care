import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { AlertTriangle, AlertCircle, CheckCircle, Phone } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

const triageColors = {
  red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-500', dot: 'bg-red-500' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-500', dot: 'bg-orange-500' },
  green: { bg: 'bg-emerald-50', border: 'border-emerald-200', icon: 'text-emerald-500', dot: 'bg-emerald-500' },
};

export default function UrgencyGuide() {
  const { t } = useLang();
  const [severity, setSeverity] = useState('');

  return (
    <>
      <PageHeader title={t('urgencyGuide.title')} subtitle={t('urgencyGuide.intro')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Triage categories */}
          {['red', 'orange', 'green'].map(level => {
            const data = t(`urgencyGuide.${level}`);
            const color = triageColors[level];
            const Icon = level === 'red' ? AlertTriangle : level === 'orange' ? AlertCircle : CheckCircle;
            return (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${color.bg} ${color.border} border rounded-xl p-5 sm:p-6 mb-4`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${color.dot}`} />
                  <Icon className={`w-5 h-5 ${color.icon}`} />
                  <h3 className="font-heading text-base font-medium text-forest">{data.title}</h3>
                </div>
                <ul className="space-y-1.5 ml-6 mb-4">
                  {data.symptoms.map((s, i) => (
                    <li key={i} className="text-sm font-body text-ink/60 flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${color.dot} opacity-40`} />
                      {s}
                    </li>
                  ))}
                </ul>
                <p className={`text-sm font-body font-medium ${color.icon}`}>{data.instruction}</p>
              </motion.div>
            );
          })}

          {/* Interactive selector */}
          <div className="mt-10 bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8">
            <h3 className="font-heading text-lg text-forest mb-6">{t('urgencyGuide.selectSymptom')}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-body text-ink/50 mb-1 block">{t('urgencyGuide.selectSpecies')}</label>
                <Select>
                  <SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {t('appointment.speciesOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-body text-ink/50 mb-1 block">{t('urgencyGuide.selectDuration')}</label>
                <Select>
                  <SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {t('urgencyGuide.durationOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-body text-ink/50 mb-1 block">{t('urgencyGuide.selectSeverity')}</label>
                <Select onValueChange={setSeverity}>
                  <SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {t('urgencyGuide.severityOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {severity && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-gentle/10 border border-gentle/20 rounded-xl">
                <p className="text-sm font-body text-ink/60">{t('urgencyGuide.disclaimer')}</p>
              </motion.div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-blush/5 border border-blush/15 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-blush mt-0.5 flex-shrink-0" />
            <p className="text-xs font-body text-ink/50">{t('urgencyGuide.disclaimer')}</p>
          </div>
        </div>
      </section>
    </>
  );
}