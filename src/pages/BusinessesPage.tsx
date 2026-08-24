import React, { useState } from 'react';
import { establishedBusinesses, authenticMediaList } from '../data/companyData';
import { BusinessCard } from '../components/BusinessCard';
import { ImageLightboxModal } from '../components/ImageLightboxModal';
import { BusinessEntity, ProjectEntity } from '../types';
import { Building2, Filter, Sparkles, PhoneCall } from 'lucide-react';

interface BusinessesPageProps {
  onSelectEntity: (entity: BusinessEntity | ProjectEntity) => void;
  onInquire: (entityName: string) => void;
}

export const BusinessesPage: React.FC<BusinessesPageProps> = ({
  onSelectEntity,
  onInquire,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const categories = [
    'All',
    'Food Services',
    'Logistics',
    'Refrigeration',
    'Agriculture',
    'Financial Services',
    'Services',
  ];

  const filteredBusinesses =
    selectedCategory === 'All'
      ? establishedBusinesses
      : establishedBusinesses.filter((b) => b.category === selectedCategory);

  const handleViewImage = (imageUrl: string) => {
    const foundIdx = authenticMediaList.findIndex((item) => item.url === imageUrl);
    setLightboxIndex(foundIdx >= 0 ? foundIdx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0f382c] via-[#164e3d] to-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/80 text-emerald-200 text-xs font-bold px-3.5 py-1 rounded-full border border-emerald-500/30 uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Active Business Group Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Our Businesses
          </h1>

          <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
            Refilwe Thapelo Trading & Projects manages a diverse ecosystem of operational companies spanning food services, logistics, refrigeration, produce trading, storage, financial assistance, and braai catering.
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center text-xs font-bold text-stone-400 uppercase tracking-wider mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5 mr-1 text-emerald-700" />
          <span>Filter:</span>
        </div>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#0f382c] text-white shadow-md'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Business Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBusinesses.map((business) => (
          <BusinessCard
            key={business.id}
            business={business}
            onSelect={onSelectEntity}
            onInquire={onInquire}
            onViewImage={handleViewImage}
          />
        ))}
      </div>

      {/* Bottom Service Assistance Callout */}
      <div className="bg-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-amber-500 text-stone-950 rounded-2xl shadow-md shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-stone-900">
              Need a Customized Service Package or Multi-Division Logistics?
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Contact Director General Mr Refilwe Xhali for corporate tenders, student packages, or event catering.
            </p>
          </div>
        </div>

        <button
          onClick={() => onInquire('General Inquiry')}
          className="px-6 py-3 rounded-xl bg-[#0f382c] hover:bg-emerald-900 text-white text-xs font-extrabold shadow-md transition shrink-0 flex items-center space-x-2"
        >
          <PhoneCall className="w-4 h-4 text-amber-400" />
          <span>Request Quote / Inquire</span>
        </button>
      </div>

      {/* Lightbox Modal */}
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

