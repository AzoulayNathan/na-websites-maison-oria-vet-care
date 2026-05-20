import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';
import { AlertTriangle } from 'lucide-react';

const soinsRoutes = ['/veterinary-care', '/prevention', '/first-visit', '/senior-care', '/veterinary-care', '/veterinary-care'];
const servicesRoutes = ['/grooming', '/boarding', '/veterinary-care', '/care-plans', '/urgency-guide'];
const maisonRoutes = ['/about', '/locations', '/journal', '/faq'];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-forest text-porcelain/80 pb-20 sm:pb-0">
      {/* Emergency banner */}
      <div className="bg-ink/30 border-b border-sage/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-blush mt-0.5 flex-shrink-0" />
            <p className="text-xs font-body text-porcelain/60 leading-relaxed">{t('footer.emergency')}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Soins */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-porcelain mb-4">{t('footer.soins')}</h4>
            <ul className="space-y-2">
              {t('footer.soinsLinks').map((link, i) => (
                <li key={i}>
                  <Link to={soinsRoutes[i]} className="text-xs font-body text-porcelain/50 hover:text-porcelain transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-porcelain mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {t('footer.servicesLinks').map((link, i) => (
                <li key={i}>
                  <Link to={servicesRoutes[i]} className="text-xs font-body text-porcelain/50 hover:text-porcelain transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Maison */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-porcelain mb-4">{t('footer.maison')}</h4>
            <ul className="space-y-2">
              {t('footer.maisonLinks').map((link, i) => (
                <li key={i}>
                  <Link to={maisonRoutes[i]} className="text-xs font-body text-porcelain/50 hover:text-porcelain transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-porcelain mb-4">{t('footer.contactTitle')}</h4>
            <ul className="space-y-2 text-xs font-body text-porcelain/50">
              <li>Lyon — +33 4 81 62 39 14</li>
              <li>Nice — +33 4 93 27 66 08</li>
              <li>bonjour@maisonoria-care.fr</li>
            </ul>
          </div>
        </div>

        {/* Bottom legal */}
        <div className="mt-12 pt-8 border-t border-sage/10">
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-4">
            {[
              { label: t('footer.legal'), path: '/legal' },
              { label: t('footer.privacy'), path: '/privacy' },
              { label: t('footer.terms'), path: '/terms' },
              { label: t('footer.cookies'), path: '/cookies' },
              { label: t('footer.medicalInfo'), path: '/medical-info' },
              { label: t('footer.emergencyInfo'), path: '/emergency-info' },
            ].map(item => (
              <Link key={item.path} to={item.path} className="text-[10px] font-body text-porcelain/30 hover:text-porcelain/60 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-[10px] font-body text-porcelain/25">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}