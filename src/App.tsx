import React, { useState } from 'react';
import { PageType, BusinessEntity, ProjectEntity } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { DetailModal } from './components/DetailModal';
import { InquiryModal } from './components/InquiryModal';

import { HomePage } from './pages/HomePage';
import { BusinessesPage } from './pages/BusinessesPage';
import { ProjectsPage } from './pages/ProjectsPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('home');
  const [selectedEntity, setSelectedEntity] = useState<BusinessEntity | ProjectEntity | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquiryEntityName, setInquiryEntityName] = useState<string>('');

  const handleOpenInquiry = (entityName?: string) => {
    setInquiryEntityName(entityName || '');
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col selection:bg-emerald-800 selection:text-white">
      
      {/* Sticky Header Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openInquiryModal={handleOpenInquiry}
      />

      {/* Main Page View Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onSelectEntity={(entity) => setSelectedEntity(entity)}
            onInquire={handleOpenInquiry}
          />
        )}

        {activePage === 'businesses' && (
          <BusinessesPage
            onSelectEntity={(entity) => setSelectedEntity(entity)}
            onInquire={handleOpenInquiry}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onSelectEntity={(entity) => setSelectedEntity(entity)}
            onInquire={handleOpenInquiry}
          />
        )}
      </main>

      {/* Contact Section (Included on all pages before footer for quick executive access) */}
      <ContactSection openInquiryModal={handleOpenInquiry} />

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        openInquiryModal={handleOpenInquiry}
      />

      {/* Detail Overlay Modal */}
      <DetailModal
        entity={selectedEntity}
        onClose={() => setSelectedEntity(null)}
        onInquire={handleOpenInquiry}
      />

      {/* Quotation / Inquiry Request Form Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        preselectedEntity={inquiryEntityName}
        onClose={() => setInquiryModalOpen(false)}
      />

    </div>
  );
}
