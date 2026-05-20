import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export default function Appointment() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <>
        <PageHeader title={t('appointment.title')} />
        <section className="py-20 bg-cream">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center px-4">
            <div className="w-14 h-14 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-7 h-7 text-sage" />
            </div>
            <p className="font-body text-base text-forest leading-relaxed">{t('appointment.success')}</p>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={t('appointment.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField label={t('appointment.ownerName')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" required /></FormField>
              <FormField label={t('appointment.email')}><Input type="email" className="bg-cream border-sand/40 rounded-lg font-body text-sm" required /></FormField>
              <FormField label={t('appointment.phone')}><Input type="tel" className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FormField>
              <FormField label={t('appointment.location')}>
                <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent><SelectItem value="lyon">Lyon</SelectItem><SelectItem value="nice">Nice</SelectItem></SelectContent></Select>
              </FormField>
              <FormField label={t('appointment.petName')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FormField>
              <FormField label={t('appointment.species')}>
                <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>{t('appointment.speciesOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
              </FormField>
              <FormField label={t('appointment.age')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FormField>
              <FormField label={t('appointment.reason')}>
                <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>{t('appointment.reasonOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
              </FormField>
              <FormField label={t('appointment.urgency')}>
                <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                  <SelectContent>{t('appointment.urgencyOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
              </FormField>
              <FormField label={t('appointment.preferredDate')}><Input type="datetime-local" className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FormField>
            </div>
            <FormField label={t('appointment.message')}><Textarea className="bg-cream border-sand/40 rounded-lg font-body text-sm" rows={3} /></FormField>
            <Button type="submit" className="w-full bg-forest text-porcelain rounded-full py-5 font-body text-sm">
              {t('appointment.submit')}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}

function FormField({ label, children }) {
  return (
    <div>
      <Label className="text-xs font-body text-ink/50 mb-1.5 block">{label}</Label>
      {children}
    </div>
  );
}