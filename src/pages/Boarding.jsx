import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Home, AlertTriangle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageHeader from '@/components/shared/PageHeader';

export default function Boarding() {
  const { t } = useLang();
  const sections = t('boarding.sections');
  const [openIdx, setOpenIdx] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHeader title={t('boarding.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3 mb-8">
            {sections.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className={`w-full text-left bg-porcelain rounded-xl border transition-all ${openIdx === i ? 'border-sage/40 shadow-sm' : 'border-sand/30 hover:border-sage/30'}`}
                >
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Home className="w-4 h-4 text-gentle" />
                      <span className="font-body text-sm font-medium text-forest">{s.name}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-taupe transition-transform ${openIdx === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                {openIdx === i && (
                  <div className="bg-porcelain rounded-b-xl border-x border-b border-sage/20 px-5 pb-4 pt-1">
                    <p className="text-sm font-body text-ink/55 leading-relaxed">{s.desc}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="bg-blush/5 border border-blush/15 rounded-xl p-4 mb-12 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-blush mt-0.5 flex-shrink-0" />
            <p className="text-xs font-body text-ink/50">{t('boarding.warning')}</p>
          </div>

          {/* Request form */}
          <div className="bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8">
            <h3 className="font-heading text-lg text-forest mb-6">{t('boarding.cta')}</h3>
            {submitted ? (
              <p className="text-sm font-body text-sage">{t('contact.success')}</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <div><Label className="text-xs font-body text-ink/50 mb-1">{t('appointment.ownerName')}</Label><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></div>
                <div><Label className="text-xs font-body text-ink/50 mb-1">{t('petProfile.petName')}</Label><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></div>
                <div><Label className="text-xs font-body text-ink/50 mb-1">{t('petProfile.species')}</Label>
                  <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>{t('appointment.speciesOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                </div>
                <div><Label className="text-xs font-body text-ink/50 mb-1">{t('appointment.location')}</Label>
                  <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="lyon">Lyon</SelectItem><SelectItem value="nice">Nice</SelectItem></SelectContent></Select>
                </div>
                <div><Label className="text-xs font-body text-ink/50 mb-1">{t('appointment.preferredDate')}</Label><Input type="date" className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></div>
                <div><Label className="text-xs font-body text-ink/50 mb-1">{t('appointment.email')}</Label><Input type="email" className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></div>
                <div className="sm:col-span-2"><Label className="text-xs font-body text-ink/50 mb-1">{t('appointment.message')}</Label><Textarea className="bg-cream border-sand/40 rounded-lg font-body text-sm" rows={3} /></div>
                <div className="sm:col-span-2"><Button type="submit" className="bg-forest text-porcelain rounded-full px-6 py-4 font-body text-sm">{t('boarding.cta')}</Button></div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}