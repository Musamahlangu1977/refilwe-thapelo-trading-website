import React from 'react';
import rtOfficialLogoImg from '../assets/images/rt_official_logo_1786606602881.jpg';
import delicacyEatsLogoImg from '../assets/images/delicacy_eats_logo_1786635160310.jpg';
import piggeryHomeLogoImg from '../assets/images/piggery_home_logo_1786635197881.jpg';
import storageTransportLogoImg from '../assets/images/storage_transport_logo_1786635208815.jpg';

interface LogoProps {
  className?: string;
  size?: number;
}

// 1. Main Refilwe Thapelo Trading & Projects Logo (Official Circular Emblem)
export const MainRTLogo: React.FC<LogoProps> = ({ className = "h-16 w-16", size = 120 }) => (
  <img
    src={rtOfficialLogoImg}
    alt="Refilwe Thapelo Trading & Projects Official Logo"
    referrerPolicy="no-referrer"
    className={`rounded-full object-contain bg-white ${className}`}
    style={{ width: size, height: size }}
  />
);

// 2. De Delicacy Eats Logo (Official Chef Mascot Logo from De Delicay Eats (2).jpg)
export const DeDelicacyLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <img
    src={delicacyEatsLogoImg}
    alt="De Delicacy Eats Official Logo"
    referrerPolicy="no-referrer"
    className={`rounded-full object-contain bg-white shadow-sm border border-stone-100 ${className}`}
    style={{ width: size, height: size }}
  />
);

// 3. RT Transport & Logistics Logo
export const RTTransportLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <img
    src={storageTransportLogoImg}
    alt="RT Transport & Logistics Logo"
    referrerPolicy="no-referrer"
    className={`rounded-full object-contain bg-white shadow-sm border border-stone-100 ${className}`}
    style={{ width: size, height: size }}
  />
);

// 4. BFN Fridge Masters Logo
export const BFNFridgeLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <MainRTLogo className={className} size={size} />
);

// 5. RT Piggery Home Logo (Official RT Piggery Home Logo from RT Pigger Home.jpeg)
export const RTPiggeryLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <img
    src={piggeryHomeLogoImg}
    alt="RT Piggery Home Logo"
    referrerPolicy="no-referrer"
    className={`rounded-full object-contain bg-white shadow-sm border border-stone-100 ${className}`}
    style={{ width: size, height: size }}
  />
);

// 6. RT Meat Ranch Logo
export const RTMeatRanchLogo: React.FC<LogoProps> = ({ className = "h-12 w-12", size = 100 }) => (
  <MainRTLogo className={className} size={size} />
);

// 7. Generic RT Sub-brand Logo Generator
export const GenericBrandLogo: React.FC<{ type?: string; className?: string; size?: number }> = ({
  type,
  className = "h-12 w-12",
  size = 100,
}) => {
  if (type === 'de-delicacy') {
    return <DeDelicacyLogo className={className} size={size} />;
  }
  if (type === 'rt-piggery') {
    return <RTPiggeryLogo className={className} size={size} />;
  }
  if (type === 'rt-transport' || type === 'rt-storage') {
    return <RTTransportLogo className={className} size={size} />;
  }
  return <MainRTLogo className={className} size={size} />;
};

