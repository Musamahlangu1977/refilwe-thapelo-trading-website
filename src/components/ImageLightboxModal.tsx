import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download, Sparkles } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  images: { url: string; title: string; subtitle?: string; originalLabel?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNavigate?: (newIndex: number) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = React.useState<number>(1);

  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
      if (e.key === 'ArrowLeft' && onNavigate && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-fadeIn select-none">
      
      {/* Top Toolbar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="text-white">
          <div className="flex items-center space-x-2">
            <span className="bg-amber-500 text-stone-950 text-xs font-black px-2.5 py-0.5 rounded-full uppercase">
              Authentic Media
            </span>
            <span className="text-xs text-stone-400 font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white mt-1">
            {currentItem.title}
          </h2>
          {currentItem.originalLabel && (
            <p className="text-xs text-amber-300 font-mono mt-0.5">
              Original: {currentItem.originalLabel}
            </p>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={handleZoomOut}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-sm"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleResetZoom}
            className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition backdrop-blur-sm"
            title="Reset Zoom"
          >
            {Math.round(zoomLevel * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition backdrop-blur-sm"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-red-600/80 hover:bg-red-600 text-white transition shadow-lg ml-2"
            title="Close Preview (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-12 overflow-auto">
        <img
          src={currentItem.url}
          alt={currentItem.title}
          referrerPolicy="no-referrer"
          className="max-h-[82vh] max-w-[92vw] object-contain rounded-xl shadow-2xl transition-transform duration-200 cursor-grab active:cursor-grabbing"
          style={{ transform: `scale(${zoomLevel})` }}
        />
      </div>

      {/* Left Navigation Arrow */}
      {images.length > 1 && currentIndex > 0 && onNavigate && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition backdrop-blur-md shadow-xl z-20"
          title="Previous Image"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Right Navigation Arrow */}
      {images.length > 1 && currentIndex < images.length - 1 && onNavigate && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition backdrop-blur-md shadow-xl z-20"
          title="Next Image"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}

      {/* Bottom Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-lg rounded-2xl border border-white/10 flex items-center space-x-2 max-w-[90vw] overflow-x-auto z-20">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate && onNavigate(idx)}
              className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                idx === currentIndex
                  ? 'border-amber-400 scale-110 shadow-lg ring-2 ring-amber-400/50'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

    </div>
  );
};
