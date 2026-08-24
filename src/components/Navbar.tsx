import React, { useState } from 'react';
import { PageType } from '../types';
import { MainRTLogo } from './BrandLogos';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activePage: PageType;
  setActivePage: (page: PageType) => void;
  openInquiryModal: (entityName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  openInquiryModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageType) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0f382c]/95 backdrop-blur-md text-white border-b border-[#1b5e4b]/40 shadow-lg transition-all">
      {/* Top micro bar for phone & email info */}
      <div className="bg-[#09261d] py-1.5 px-4 text-xs border-b border-[#164e3d] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-emerald-100/90">
          <div className="flex items-center space-x-6">
            <a href="tel:0720778876" className="flex items-center hover:text-white transition">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              <span>072 077 8876</span>
            </a>
            <a href="mailto:refilwethapelo1@gmail.com" className="flex items-center hover:text-white transition">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
              <span>refilwethapelo1@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-emerald-800/60 text-emerald-200 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border border-emerald-700/50">
              REG NO: 2022/337/316/07
            </span>
            <span className="text-emerald-300 font-medium italic">
              "We never miss it."
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Branding */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="p-1 bg-white rounded-full shadow-md transition-transform group-hover:scale-105">
              <MainRTLogo size={48} className="w-12 h-12" />
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors leading-snug">
                REFILWE THAPELO
              </div>
              <div className="text-[11px] font-medium tracking-wide text-emerald-300/90 uppercase flex items-center gap-1.5">
                <span>Trading & Projects</span>
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                <span className="normal-case italic text-emerald-200/80 font-serif">est. 2022</span>
              </div>
            </div>
          </button>

          {/* Desktop Page Links (Strictly 3 main pages) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => handleNav('home')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activePage === 'home'
                  ? 'bg-emerald-800/80 text-white shadow-inner border border-emerald-600/50'
                  : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
              }`}
            >
              HOME
            </button>

            <button
              onClick={() => handleNav('businesses')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center space-x-1 ${
                activePage === 'businesses'
                  ? 'bg-emerald-800/80 text-white shadow-inner border border-emerald-600/50'
                  : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
              }`}
            >
              <span>OUR BUSINESSES</span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">
                7
              </span>
            </button>

            <button
              onClick={() => handleNav('projects')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center space-x-1 ${
                activePage === 'projects'
                  ? 'bg-emerald-800/80 text-white shadow-inner border border-emerald-600/50'
                  : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-white'
              }`}
            >
              <span>PROJECTS & DEVELOPMENT</span>
              <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.2 rounded font-mono font-bold">
                6
              </span>
            </button>
          </nav>

          {/* Contact Action & Mobile Menu Toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => openInquiryModal()}
              className="hidden lg:inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold bg-amber-500 hover:bg-amber-400 text-stone-900 shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>Inquire / Request Quote</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/60 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09261d] border-b border-[#164e3d] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest px-3 py-1">
            Navigation
          </div>
          
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
              activePage === 'home' ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            <span>HOME</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>

          <button
            onClick={() => handleNav('businesses')}
            className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
              activePage === 'businesses' ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            <span>OUR BUSINESSES (7)</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>

          <button
            onClick={() => handleNav('projects')}
            className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between ${
              activePage === 'projects' ? 'bg-emerald-800 text-white' : 'text-emerald-100 hover:bg-emerald-900'
            }`}
          >
            <span>PROJECTS & DEVELOPMENT (6)</span>
            <ChevronRight className="w-4 h-4 opacity-50" />
          </button>

          <div className="pt-3 border-t border-emerald-900/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInquiryModal();
              }}
              className="w-full py-3 px-4 rounded-lg bg-amber-500 text-stone-950 font-extrabold text-center shadow-md flex items-center justify-center space-x-2"
            >
              <span>Inquire / Request Quote</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
