import React from 'react';
import { ProjectEntity } from '../types';
import { GenericBrandLogo } from './BrandLogos';
import { ArrowRight, Compass, Sprout, Maximize2 } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectEntity;
  onSelect: (project: ProjectEntity) => void;
  onInquire: (projectName: string) => void;
  onViewImage?: (imageUrl: string, title: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  onInquire,
  onViewImage,
}) => {
  return (
    <div className="group bg-gradient-to-b from-stone-50 to-emerald-50/20 rounded-2xl overflow-hidden border border-emerald-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1 relative">
      {/* Development Banner Top Bar */}
      <div className="bg-amber-600 text-stone-950 text-[10px] font-black uppercase tracking-wider py-1 px-4 text-center">
        PROJECTS & DEVELOPMENT VISION
      </div>

      {/* Image Header */}
      <div 
        onClick={() => onSelect(project)}
        className="relative h-48 overflow-hidden bg-stone-900 cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-stone-900/90 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-500/30 shadow-md flex items-center space-x-1">
          <Sprout className="w-3.5 h-3.5 text-amber-400" />
          <span>{project.category}</span>
        </div>

        {/* Quick View Original Photo Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onViewImage) {
              onViewImage(project.image, project.name);
            } else {
              onSelect(project);
            }
          }}
          className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-black/60 hover:bg-black/90 text-white text-[10px] font-bold backdrop-blur-md flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          title="View full uncropped photo"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">View Photo</span>
        </button>

        {/* Brand Logo Floating Overlay */}
        <div className="absolute -bottom-6 left-5 p-1 bg-white rounded-2xl shadow-lg border border-stone-100">
          <GenericBrandLogo type={project.logoType} size={54} className="w-13 h-13" />
        </div>
      </div>

      {/* Content */}
      <div className="pt-8 px-6 pb-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onSelect(project)}
            className="text-xl font-extrabold text-stone-900 group-hover:text-emerald-900 transition-colors cursor-pointer"
          >
            {project.name}
          </h3>
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mt-0.5 mb-2">
            {project.subtitle}
          </p>

          {project.divisionNote && (
            <div className="inline-block bg-amber-100/80 text-amber-900 text-[10px] font-bold px-2.5 py-0.5 rounded border border-amber-300/60 mb-3">
              {project.divisionNote}
            </div>
          )}

          <p className="text-stone-600 text-sm leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Key Vision Goals */}
          <div className="bg-white/80 p-3 rounded-xl border border-stone-200/60 mb-5">
            <div className="text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-2 flex items-center">
              <Compass className="w-3.5 h-3.5 text-amber-600 mr-1.5" />
              <span>Target Objectives</span>
            </div>
            <ul className="space-y-1">
              {project.visionGoals.slice(0, 2).map((goal, idx) => (
                <li key={idx} className="text-xs text-stone-700 flex items-start">
                  <span className="text-amber-500 font-bold mr-1.5">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-emerald-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(project)}
            className="text-xs font-bold text-emerald-900 hover:text-amber-600 flex items-center transition-colors group/btn py-1"
          >
            <span>View Vision Details & Media</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onInquire(project.name)}
            className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            Partner / Inquire
          </button>
        </div>
      </div>
    </div>
  );
};
