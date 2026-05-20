import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import PageHeader from '@/components/shared/PageHeader';

export default function FAQ() {
  const { t } = useLang();
  const items = t('faq.items');

  return (
    <>
      <PageHeader title={t('faq.title')} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-2">
            {items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-porcelain rounded-xl border border-sand/30 px-5 overflow-hidden">
                <AccordionTrigger className="text-sm font-body font-medium text-forest hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm font-body text-ink/55 leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}