import React from 'react';
import { companyContact } from '../data/companyData';
import { MainRTLogo } from './BrandLogos';
import { Phone, Mail, MapPin, Building, ShieldCheck, Clock, UserCheck } from 'lucide-react';

interface ContactSectionProps {
  openInquiryModal: (entityName?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ openInquiryModal }) => {
  return (
    <section className="bg-stone-100 py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full uppercase tracking-widest">
            Executive & Branch Contacts
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3">
            Contact Refilwe Thapelo Trading & Projects
          </h2>
          <p className="text-stone-600 text-sm mt-2 font-medium">
            Reach out to our leadership or local branch offices across Gauteng and Free State.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Executive Contact Card (Col 1-5) */}
          <div className="lg:col-span-5 bg-[#0f382c] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between border border-emerald-800/80 relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              
              {/* Brand Header */}
              <div className="flex items-center space-x-4">
                <div className="p-1 bg-white rounded-full shadow-lg">
                  <MainRTLogo size={56} className="w-14 h-14" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">
                    REFILWE THAPELO
                  </h3>
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    Trading & Projects (Pty) Ltd
                  </p>
                </div>
              </div>

              {/* Director General Info */}
              <div className="bg-[#164e3d] p-4 rounded-2xl border border-emerald-700/50">
                <div className="flex items-center space-x-2 text-xs font-bold text-emerald-300 uppercase">
                  <UserCheck className="w-4 h-4 text-amber-400" />
                  <span>Executive Leadership</span>
                </div>
                <div className="text-xl font-black text-white mt-1">
                  {companyContact.directorGeneral}
                </div>
                <div className="text-xs font-bold text-amber-300">
                  {companyContact.title}
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3 pt-2 text-sm">
                <a
                  href={`tel:${companyContact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#164e3d]/60 hover:bg-[#164e3d] transition border border-emerald-700/40"
                >
                  <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-emerald-300 font-bold uppercase">Direct Telephone / WhatsApp</div>
                    <div className="text-white font-extrabold text-base">{companyContact.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyContact.email}`}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#164e3d]/60 hover:bg-[#164e3d] transition border border-emerald-700/40"
                >
                  <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-emerald-300 font-bold uppercase">Official Email</div>
                    <div className="text-white font-extrabold text-sm break-all">{companyContact.email}</div>
                  </div>
                </a>
              </div>

            </div>

            {/* Tagline Footer */}
            <div className="mt-8 pt-4 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-200">
              <span className="font-serif italic font-extrabold text-amber-300 text-sm">
                {companyContact.tagline}
              </span>
              <span className="font-mono text-[10px] opacity-80">
                REG NO: {companyContact.regNumber}
              </span>
            </div>
          </div>

          {/* Regional Offices & Quick Request Form Trigger (Col 6-12) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <h3 className="text-xl font-extrabold text-stone-900 border-b border-stone-200 pb-3">
                Regional Office Locations
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Pretoria Office */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-emerald-900 uppercase">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Pretoria Headquarters</span>
                  </div>
                  <p className="text-sm font-bold text-stone-900">
                    {companyContact.pretoriaOffice}
                  </p>
                  <p className="text-xs text-stone-500">
                    Saulsville, Atteridgeville, Tshwane, Gauteng
                  </p>
                </div>

                {/* Bloemfontein Branch */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-emerald-900 uppercase">
                    <Building className="w-4 h-4 text-emerald-700" />
                    <span>Free State Regional Hub</span>
                  </div>
                  <p className="text-sm font-bold text-stone-900">
                    {companyContact.bloemfonteinBranch}
                  </p>
                  <p className="text-xs text-stone-500">
                    Universitas, Bloemfontein, Free State
                  </p>
                </div>

              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center space-x-3 text-xs text-emerald-900 font-semibold">
                <Clock className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>Standard Business Operations: Monday – Saturday (07:30 – 18:00) • 24/7 Transport & Cold Chain Support</span>
              </div>
            </div>

            {/* Prompt CTA Button */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-600">
                Need a formal business quote or contract copy?
              </div>
              <button
                onClick={() => openInquiryModal('General Inquiry')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs shadow-md transition"
              >
                Open Service Request Form
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
