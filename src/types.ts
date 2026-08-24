export type PageType = 'home' | 'businesses' | 'projects' | 'contact';

export interface BusinessEntity {
  id: string;
  name: string;
  subtitle: string;
  category: 'Food Services' | 'Logistics' | 'Refrigeration' | 'Agriculture' | 'Financial Services' | 'Services' | 'Cleaning';
  shortDescription: string;
  fullDescription: string;
  established: string;
  highlights: string[];
  pricingNote?: string;
  image: string;
  flyerImage?: string;
  galleryImages?: string[];
  customLogo?: string;
  logoType: string;
}

export interface ProjectEntity {
  id: string;
  name: string;
  subtitle: string;
  category: 'Livestock & Meat' | 'Poultry' | 'Consulting' | 'Community & NPO';
  shortDescription: string;
  fullDescription: string;
  divisionNote?: string;
  visionGoals: string[];
  image: string;
  flyerImage?: string;
  galleryImages?: string[];
  customLogo?: string;
  logoType: string;
}

export interface ContactInfo {
  directorGeneral: string;
  title: string;
  phone: string;
  email: string;
  regNumber: string;
  pretoriaOffice: string;
  bloemfonteinBranch: string;
  establishedYear: string;
  tagline: string;
}

export interface InquiryForm {
  name: string;
  email: string;
  phone: string;
  selectedEntity: string;
  message: string;
}
