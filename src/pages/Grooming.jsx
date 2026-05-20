import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Scissors, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageHeader from '@/components/shared/PageHeader';

export default function Grooming() {
  const { t } = useLang();
  const services = t('grooming.services');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHeader title={t('grooming.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-porcelain rounded-xl border border-sand/30 p-5 hover:border-sage/30 transition-colors"
              >
                <Scissors className="w-4 h-4 text-taupe mb-3" />
                <h3 className="font-body text-sm font-medium text-forest mb-1">{s.name}</h3>
                <p className="text-xs font-body text-ink/45 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-gentle/10 border border-gentle/20 rounded-xl p-4 mb-12 flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-gentle mt-0.5 flex-shrink-0" />
            <p className="text-xs font-body text-ink/50">{t('grooming.note')}</p>
          </div>

          {/* Booking form */}
          <div className="bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8">
            <h3 className="font-heading text-lg text-forest mb-6">{t('grooming.bookingTitle')}</h3>
            {submitted ? (
              <p className="text-sm font-body text-sage">{t('contact.success')}</p>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-body text-ink/50 mb-1">{t('petProfile.petName')}</Label>
                  <Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" />
                </div>
                <div>
                  <Label className="text-xs font-body text-ink/50 mb-1">{t('petProfile.species')}</Label>
                  <Select>
                    <SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {t('appointment.speciesOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs font-body text-ink/50 mb-1">{t('petProfile.breed')}</Label>
                  <Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" />
                </div>
                <div>
                  <Label className="text-xs font-body text-ink/50 mb-1">{t('appointment.location')}</Label>
                  <Select>
                    <SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lyon">Lyon</SelectItem>
                      <SelectItem value="nice">Nice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-xs font-body text-ink/50 mb-1">{t('appointment.message')}</Label>
                  <Textarea className="bg-cream border-sand/40 rounded-lg font-body text-sm" rows={3} />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="bg-forest text-porcelain rounded-full px-6 py-4 font-body text-sm">
                    {t('grooming.cta')}
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