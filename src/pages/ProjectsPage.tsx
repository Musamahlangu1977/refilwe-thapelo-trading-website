import React, { useState } from 'react';
import { developmentProjects, authenticMediaList } from '../data/companyData';
import { ProjectCard } from '../components/ProjectCard';
import { ImageLightboxModal } from '../components/ImageLightboxModal';
import { BusinessEntity, ProjectEntity } from '../types';
import { Sprout, TrendingUp, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

interface ProjectsPageProps {
  onSelectEntity: (entity: BusinessEntity | ProjectEntity) => void;
  onInquire: (projectName: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectEntity,
  onInquire,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const handleViewImage = (imageUrl: string) => {
    const foundIdx = authenticMediaList.findIndex((item) => item.url === imageUrl);
    setLightboxIndex(foundIdx >= 0 ? foundIdx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fadeIn">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-stone-900 via-[#0f382c] to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 text-xs font-bold px-3.5 py-1 rounded-full border border-amber-500/30 uppercase tracking-widest">
            <Sprout className="w-3.5 h-3.5 text-amber-400" />
            <span>Future Agricultural & Community Roadmap</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            Projects & Development
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-amber-200/90 font-medium">
            "Investing in agriculture, people and sustainable growth."
          </p>

          <p className="text-stone-300 text-sm leading-relaxed max-w-2xl">
            Beyond established commercial operations, Refilwe Thapelo Trading & Projects is actively developing sustainable agricultural infrastructure, ethical meat supply chains, egg production facilities, farming advisory services, and community upliftment initiatives through Farmers Lovers NPO.
          </p>
        </div>
      </div>

      {/* Strategic Vision Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-sm">Agriculture First</h3>
            <p className="text-xs text-stone-600 mt-1">
              Building sustainable piggery, poultry, and crop production.
            </p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-amber-100 text-amber-800 rounded-xl shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-sm">Sustainable Growth</h3>
            <p className="text-xs text-stone-600 mt-1">
              Establishing resilient supply chains and ethical livestock trading.
            </p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-sm">Youth & Job Creation</h3>
            <p className="text-xs text-stone-600 mt-1">
              Empowering local youth through practical farming skills.
            </p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-amber-100 text-amber-800 rounded-xl shrink-0">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-stone-900 text-sm">Community Impact</h3>
            <p className="text-xs text-stone-600 mt-1">
              Supporting smallholder farmers through Farmers Lovers NPO.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
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

      {/* Partnership Callout Banner */}
      <div className="bg-[#0f382c] text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto space-y-4">
        <span className="bg-amber-500 text-stone-950 text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest">
          Partnerships & Investment
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
          Interested in Partnering with Farmers Lovers NPO or Agriculture Projects?
        </h3>

        <p className="text-stone-200 text-sm max-w-2xl mx-auto leading-relaxed">
          We welcome collaboration with agricultural investors, government developmental bodies, equipment suppliers, and commercial off-takers.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onInquire('Farmers Lovers NPO & Agricultural Projects')}
            className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm shadow-xl transition"
          >
            Connect for Development & Partnership
          </button>
        </div>
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

