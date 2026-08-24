import React from 'react';
import { companyContact } from '../data/companyData';
import { MainRTLogo } from './BrandLogos';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  setActivePage: (page: PageType) => void;
  openInquiryModal: (entityName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, openInquiryModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09261d] text-stone-300 border-t border-[#164e3d] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#164e3d]/80">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-white rounded-full shadow-md">
                <MainRTLogo size={52} className="w-13 h-13" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight">
                  REFILWE THAPELO
                </h2>
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Trading & Projects (Pty) Ltd
                </p>
              </div>
            </div>

            <p className="text-stone-300 text-sm leading-relaxed max-w-md">
              A diversified South African business group operating across food services, logistics, refrigeration, agriculture, trading and community development initiatives.
            </p>

            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-700/50 text-emerald-200 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>REG NO: {companyContact.regNumber}</span>
            </div>

            <div className="pt-2">
              <blockquote className="text-stone-100 font-serif italic text-lg border-l-2 border-amber-500 pl-4 py-0.5">
                {companyContact.tagline}
              </blockquote>
            </div>
          </div>

          {/* Quick Links Column (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/60 pb-2">
              Company Portfolio
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { setActivePage('home'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('businesses'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                  Established Businesses (7)
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('projects'); scrollToTop(); }}
                  className="hover:text-amber-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                  Projects & Development (6)
                </button>
              </li>
              <li>
                <button
                  onClick={() => openInquiryModal()}
                  className="hover:text-amber-400 transition-colors flex items-center text-amber-300 font-semibold pt-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
                  Request Quotation / Service Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-emerald-800/60 pb-2">
              Contact & Locations
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f382c]/80 p-3 rounded-lg border border-emerald-800/50">
                <div className="text-white font-bold">{companyContact.directorGeneral}</div>
                <div className="text-xs text-emerald-400">{companyContact.title}</div>
              </div>

              <div className="flex items-start space-x-3 text-stone-300">
                <Phone className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <a href={`tel:${companyContact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition font-medium">
                    {companyContact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-stone-300">
                <Mail className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <a href={`mailto:${companyContact.email}`} className="hover:text-white transition break-all">
                    {companyContact.email}
                  </a>
                </div>
              </div>

              {/* Locations */}
              <div className="pt-2 grid grid-cols-1 gap-2.5">
                <div className="flex items-start space-x-2.5 text-xs text-stone-300 bg-[#0f382c]/40 p-2.5 rounded border border-emerald-900/60">
                  <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white">Pretoria Office:</span>
                    <p>{companyContact.pretoriaOffice}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5 text-xs text-stone-300 bg-[#0f382c]/40 p-2.5 rounded border border-emerald-900/60">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white">Bloemfontein Branch:</span>
                    <p>{companyContact.bloemfonteinBranch}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-stone-400 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} Refilwe Thapelo Trading & Projects (Pty) Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-stone-400">Est. 2022</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 hover:text-white transition shadow"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
