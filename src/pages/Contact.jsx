import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, MapPin, Phone, Mail, AlertTriangle } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHeader title={t('contact.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="space-y-4">
              {[
                { title: 'Lyon', icon: MapPin, lines: ['24 Rue des Jasmins, 69006 Lyon', '+33 4 81 62 39 14'] },
                { title: 'Nice', icon: MapPin, lines: ['11 Avenue Saint-Augustin, 06000 Nice', '+33 4 93 27 66 08'] },
                { title: 'Email', icon: Mail, lines: ['bonjour@maisonoria-care.fr', 'rdv@maisonoria-care.fr'] },
              ].map((block, i) => (
                <div key={i} className="bg-porcelain rounded-xl border border-sand/30 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <block.icon className="w-4 h-4 text-sage" />
                    <span className="font-body text-sm font-medium text-forest">{block.title}</span>
                  </div>
                  {block.lines.map((line, j) => (
                    <p key={j} className="text-xs font-body text-ink/50">{line}</p>
                  ))}
                </div>
              ))}

              {/* Emergency */}
              <div className="bg-blush/5 border border-blush/15 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-blush mt-0.5 flex-shrink-0" />
                <p className="text-xs font-body text-ink/50">{t('contact.emergencyNote')}</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                  <CheckCircle className="w-10 h-10 text-sage mx-auto mb-4" />
                  <p className="font-body text-sm text-forest">{t('contact.success')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><Label className="text-xs font-body text-ink/50 mb-1">{t('contact.name')}</Label><Input className="bg-cream border-sand/40 rounded-lg font-body text-sm" required /></div>
                    <div><Label className="text-xs font-body text-ink/50 mb-1">{t('contact.email')}</Label><Input type="email" className="bg-cream border-sand/40 rounded-lg font-body text-sm" required /></div>
                    <div><Label className="text-xs font-body text-ink/50 mb-1">{t('contact.phone')}</Label><Input type="tel" className="bg-cream border-sand/40 rounded-lg font-body text-sm" /></div>
                    <div><Label className="text-xs font-body text-ink/50 mb-1">{t('contact.location')}</Label>
                      <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                        <SelectContent><SelectItem value="lyon">Lyon</SelectItem><SelectItem value="nice">Nice</SelectItem></SelectContent></Select>
                    </div>
                    <div className="sm:col-span-2"><Label className="text-xs font-body text-ink/50 mb-1">{t('contact.inquiryType')}</Label>
                      <Select><SelectTrigger className="bg-cream border-sand/40 rounded-lg font-body text-sm"><SelectValue /></SelectTrigger>
                        <SelectContent>{t('contact.inquiryOptions').map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent></Select>
                    </div>
                  </div>
                  <div><Label className="text-xs font-body text-ink/50 mb-1">{t('contact.message')}</Label><Textarea className="bg-cream border-sand/40 rounded-lg font-body text-sm" rows={4} required /></div>
                  <Button type="submit" className="bg-forest text-porcelain rounded-full px-8 py-5 font-body text-sm">{t('contact.submit')}</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}