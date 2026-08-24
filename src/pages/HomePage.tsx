import React, { useState } from 'react';
import { 
  establishedBusinesses, 
  developmentProjects, 
  companyAboutText, 
  authenticMediaList 
} from '../data/companyData';
import homepageAgricultureHeroImg from '../assets/images/homepage_agriculture_hero.png';
import { MainRTLogo } from '../components/BrandLogos';
import { BusinessCard } from '../components/BusinessCard';
import { ProjectCard } from '../components/ProjectCard';
import { ImageLightboxModal } from '../components/ImageLightboxModal';
import { PageType, BusinessEntity, ProjectEntity } from '../types';
import { ArrowRight, ChevronDown, ShieldCheck, Sprout, Building, Trophy, MapPin, Users } from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: PageType) => void;
  onSelectEntity: (entity: BusinessEntity | ProjectEntity) => void;
  onInquire: (entityName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectEntity,
  onInquire,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightboxAt = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleViewImage = (imageUrl: string, title: string) => {
    const foundIdx = authenticMediaList.findIndex((item) => item.url === imageUrl);
    if (foundIdx >= 0) {
      openLightboxAt(foundIdx);
    } else {
      openLightboxAt(0);
    }
  };

  return (
    <div className="space-y-20 pb-16 animate-fadeIn">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center bg-stone-950 text-white overflow-hidden">
        
        {/* Background Image with Dark Forest Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={homepageAgricultureHeroImg}
            alt="South African agricultural landscape with crops and cattle at sunrise"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-65 scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09261d]/85 via-[#0f382c]/60 to-stone-950/65" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 flex flex-col items-center">
          
          {/* Main Prominent RT Logo */}
          <div className="mb-8 p-3 bg-white/95 rounded-full shadow-2xl backdrop-blur-md border-2 border-emerald-500/30 ring-8 ring-white/10 hover:scale-105 transition-transform duration-300">
            <MainRTLogo size={110} className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>

          {/* Group Registration Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-600/50 text-emerald-200 text-xs font-bold tracking-widest uppercase mb-6 shadow-md">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>ESTABLISHED 2022 • REG: 2022/337/316/07</span>
          </div>

          {/* Large Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight max-w-4xl drop-shadow-md">
            REFILWE THAPELO TRADING & PROJECTS
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-lg sm:text-2xl font-bold text-emerald-200/90 max-w-3xl leading-snug">
            Building Businesses. Growing Agriculture. Creating Opportunities.
          </p>

          {/* Tagline Highlight */}
          <div className="mt-6 mb-8 inline-block bg-emerald-900/90 border border-emerald-500/40 px-6 py-2.5 rounded-2xl shadow-xl">
            <p className="text-xl sm:text-2xl font-serif italic text-amber-300 font-extrabold tracking-wide">
              "We never miss it."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setActivePage('businesses')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-base shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActivePage('projects')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white font-bold text-base border border-emerald-500/50 shadow-lg backdrop-blur-md transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Projects & Development</span>
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="mt-12 text-emerald-300/70 animate-bounce hidden sm:flex flex-col items-center">
            <span className="text-[10px] font-bold tracking-widest uppercase mb-1">Scroll To Discover</span>
            <ChevronDown className="w-5 h-5" />
          </div>

        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-b from-[#0f382c]/5 via-emerald-50/30 to-transparent p-8 sm:p-12 rounded-3xl border border-emerald-900/10 shadow-sm relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5 text-emerald-700" />
            <span>Group Overview</span>
          </div>

          <p className="text-xl sm:text-2xl font-serif text-stone-800 leading-relaxed font-medium">
            "{companyAboutText}"
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-stone-500 font-semibold pt-4 border-t border-emerald-900/10">
            <span className="flex items-center"><MapPin className="w-3.5 h-3.5 text-emerald-700 mr-1" /> Pretoria & Bloemfontein</span>
            <span className="flex items-center"><Trophy className="w-3.5 h-3.5 text-amber-600 mr-1" /> 7 Active Entities</span>
            <span className="flex items-center"><Sprout className="w-3.5 h-3.5 text-emerald-700 mr-1" /> 6 Agricultural Projects</span>
          </div>
        </div>
      </section>

      {/* 3. ESTABLISHED BUSINESSES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
              Established Operations
            </span>
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-2">
              Our Businesses
            </h2>
          </div>

          <button
            onClick={() => setActivePage('businesses')}
            className="mt-4 sm:mt-0 text-sm font-extrabold text-[#0f382c] hover:text-emerald-700 flex items-center transition"
          >
            <span>View All Businesses</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {establishedBusinesses.map((business) => (
            <BusinessCard
              key={business.id}
              business={business}
              onSelect={onSelectEntity}
              onInquire={onInquire}
              onViewImage={handleViewImage}
            />
          ))}
        </div>
      </section>

      {/* 4. CLEARLY SEPARATED PROJECTS & DEVELOPMENT SECTION */}
      <section className="bg-gradient-to-b from-stone-900 via-[#0f382c] to-stone-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold text-amber-300 bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 rounded-full uppercase tracking-widest">
              Future Growth & Vision
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4">
              Projects & Development
            </h2>

            <p className="text-stone-300 text-base sm:text-lg mt-2 font-medium">
              "Building future agricultural and community development opportunities."
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={onSelectEntity}
                onInquire={onInquire}
                onViewImage={handleViewImage}
              />
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setActivePage('projects')}
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm shadow-xl transition-all"
            >
              <span>Explore Projects & Community Vision</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Full-Screen Uncropped Image Lightbox */}
      <ImageLightboxModal
        isOpen={lightboxOpen}
        images={authenticMediaList}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />

    </div>
  );
};
