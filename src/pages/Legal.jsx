import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import PageHeader from '@/components/shared/PageHeader';

const content = {
  fr: {
    '/legal': { title: 'Mentions légales', body: 'Maison Oria Vet & Care est une clinique vétérinaire fictive créée à des fins de démonstration. Siège social : 24 Rue des Jasmins, 69006 Lyon, France. Directeur de la publication : Maison Oria Vet & Care. Hébergeur : Base44. Contact : bonjour@maisonoria-care.fr.' },
    '/privacy': { title: 'Politique de confidentialité', body: 'Les données collectées via les formulaires (rendez-vous, profil animal, contact) sont utilisées uniquement pour la gestion des demandes de soin. Aucune donnée n\'est transmise à des tiers sans consentement. Conformément au RGPD, vous pouvez exercer vos droits d\'accès, de rectification et de suppression en contactant bonjour@maisonoria-care.fr.' },
    '/terms': { title: 'Conditions d\'utilisation', body: 'L\'utilisation de ce site est soumise aux présentes conditions. Les informations fournies ne remplacent pas une consultation vétérinaire. Les demandes de rendez-vous sont confirmées par l\'équipe. Maison Oria se réserve le droit de modifier ces conditions.' },
    '/cookies': { title: 'Cookies', body: 'Ce site utilise des cookies essentiels au fonctionnement du site. Aucun cookie publicitaire n\'est utilisé. En poursuivant votre navigation, vous acceptez l\'utilisation de ces cookies.' },
    '/medical-info': { title: 'Informations médicales', body: 'Le contenu de ce site est informatif et ne remplace en aucun cas l\'avis d\'un vétérinaire. Les formulaires en ligne ne constituent pas une consultation. En cas d\'urgence vitale, contactez immédiatement un service d\'urgence vétérinaire. Les demandes de rendez-vous sont confirmées par l\'équipe clinique. Les conseils peuvent varier selon l\'état de l\'animal.' },
    '/emergency-info': { title: 'Urgences vétérinaires', body: 'Maison Oria Vet & Care n\'est pas un service d\'urgence 24h/24. En cas de détresse respiratoire, perte de connaissance, saignement important, intoxication ou douleur intense, contactez immédiatement un service d\'urgence vétérinaire de votre région. N\'attendez pas une confirmation de rendez-vous en cas d\'urgence vitale.' },
  },
  en: {
    '/legal': { title: 'Legal notice', body: 'Maison Oria Vet & Care is a veterinary clinic. Registered office: 24 Rue des Jasmins, 69006 Lyon, France. Publication director: Maison Oria Vet & Care. Host: Base44. Contact: bonjour@maisonoria-care.fr.' },
    '/privacy': { title: 'Privacy policy', body: 'Data collected through forms (appointment, pet profile, contact) is used solely for managing care requests. No data is shared with third parties without consent. Under GDPR, you may exercise your rights of access, rectification and deletion by contacting bonjour@maisonoria-care.fr.' },
    '/terms': { title: 'Terms of use', body: 'Use of this website is subject to these terms. Information provided does not replace veterinary consultation. Appointment requests are confirmed by the team. Maison Oria reserves the right to modify these terms.' },
    '/cookies': { title: 'Cookies', body: 'This site uses essential cookies for site functionality. No advertising cookies are used. By continuing to browse, you accept the use of these cookies.' },
    '/medical-info': { title: 'Medical information', body: 'The content of this site is informational and does not replace veterinary advice. Online forms do not constitute a consultation. In case of a life-threatening emergency, contact emergency veterinary services immediately. Appointment requests are confirmed by the clinical team. Advice may vary depending on the animal\'s condition.' },
    '/emergency-info': { title: 'Veterinary emergencies', body: 'Maison Oria Vet & Care is not a 24/7 emergency service. In case of breathing distress, loss of consciousness, severe bleeding, poisoning or intense pain, contact emergency veterinary services in your area immediately. Do not wait for an appointment confirmation in case of a life-threatening emergency.' },
  },
};

export default function Legal() {
  const { lang } = useLang();
  const path = window.location.pathname;
  const page = content[lang]?.[path] || content.fr[path] || { title: 'Page', body: '' };

  return (
    <>
      <PageHeader title={page.title} />
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-porcelain rounded-2xl border border-sand/30 p-6 sm:p-8">
            <p className="text-sm font-body text-ink/55 leading-relaxed whitespace-pre-line">{page.body}</p>
          </div>
        </div>
      </section>
    </>
  );
}