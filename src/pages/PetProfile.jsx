import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, FolderOpen } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export default function PetProfile() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <>
        <PageHeader title={t('petProfile.title')} />
        <section className="py-20 bg-cream">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center px-4">
            <div className="w-14 h-14 rounded-full bg-sage/15 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-7 h-7 text-sage" />
            </div>
            <p className="font-body text-base text-forest leading-relaxed">{t('petProfile.success')}</p>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title={t('petProfile.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <FolderOpen className="w-5 h-5 text-sage" />
              <span className="font-heading text-sm text-forest/60 tracking-wider uppercase">Dossier animal</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <FF label={t('petProfile.ownerName')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" required /></FF>
                <FF label={t('petProfile.email')}><Input type="email" className="bg-cream border-sand/40 rounded-lg font-body text-sm" required /></FF>
                <FF label={t('petProfile.phone')}><Input type="tel" className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FF>
                <FF label={t('petProfile.petName')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" required /></FF>
                <FF label={t('petProfile.species')}>
                  <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>{t('appointment.speciesOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                </FF>
                <FF label={t('petProfile.breed')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FF>
                <FF label={t('petProfile.age')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FF>
                <FF label={t('petProfile.sex')}>
                  <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>{t('petProfile.sexOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                </FF>
                <FF label={t('petProfile.neutered')}>
                  <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>{t('petProfile.neuteredOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                </FF>
                <FF label={t('petProfile.weight')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FF>
                <FF label={t('petProfile.temperament')}>
                  <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>{t('petProfile.temperamentOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                </FF>
                <FF label={t('petProfile.vaccination')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FF>
              </div>
              <FF label={t('petProfile.conditions')}><Textarea className="bg-cream border-sand/40 rounded-lg font-body text-sm" rows={2} /></FF>
              <FF label={t('petProfile.food')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FF>
              <FF label={t('petProfile.medication')}><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></FF>
              <FF label={t('petProfile.concern')}><Textarea className="bg-cream border-sand/40 rounded-lg font-body text-sm" rows={3} /></FF>
              <Button type="submit" className="w-full bg-forest text-porcelain rounded-full py-5 font-body text-sm">
                {t('petProfile.submit')}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function FF({ label, children }) {
  return <div><Label className="text-xs font-body text-ink/50 mb-1.5 block">{label}</Label>{children}</div>;
}