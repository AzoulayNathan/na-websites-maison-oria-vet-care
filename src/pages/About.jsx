import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Heart, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/PageHeader';

export default function About() {
  const { t } = useLang();

  return (
    <>
      <PageHeader title={t('about.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-porcelain rounded-2xl border border-sage/20 p-6 sm:p-8 mb-10 text-center">
            <p className="font-heading text-lg sm:text-xl text-forest leading-relaxed italic">
              "{t('about.mission')}"
            </p>
          </motion.div>

          {/* Philosophy */}
          <div className="mb-12">
            <h2 className="font-heading text-xl text-forest mb-6">
              {t('lang') === 'fr' ? 'Philosophie' : 'Philosophy'}
            </h2>
            <div className="space-y-3">
              {t('about.philosophy').map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-porcelain rounded-lg px-5 py-3 border border-sand/20">
                  <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center text-xs font-body text-sage font-medium">{i + 1}</div>
                  <span className="text-sm font-body text-ink/60">{p}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="font-heading text-xl text-forest mb-6">
              {t('lang') === 'fr' ? 'Valeurs' : 'Values'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {t('about.values').map((v, i) => (
                <span key={i} className="bg-sage/10 text-forest/70 text-xs font-body px-4 py-2 rounded-full border border-sage/20">{v}</span>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-12">
            <h2 className="font-heading text-xl text-forest mb-6">
              {t('lang') === 'fr' ? 'L\'équipe' : 'The team'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {t('about.team').map((member, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="bg-porcelain rounded-xl border border-sand/30 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-sage" />
                    </div>
                    <h3 className="font-body text-sm font-medium text-forest">{member.role}</h3>
                  </div>
                  <p className="text-xs font-body text-ink/45 pl-11">{member.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/appointment">
              <Button className="bg-forest text-porcelain rounded-full px-8 py-5 font-body text-sm">
                {t('nav.appointment')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}