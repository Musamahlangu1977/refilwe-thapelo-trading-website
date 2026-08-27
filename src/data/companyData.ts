import { BusinessEntity, ProjectEntity, ContactInfo } from '../types';

// Authentic media imports provided by the user
import agriConsultingFlyerImg from '../assets/images/agri_consulting_flyer_1786635141218.jpg';
import delicacyDishPhotoImg from '../assets/images/delicacy_dish_photo_1786635219317.jpg';
import delicacyEatsLogoImg from '../assets/images/delicacy_eats_logo_1786635160310.jpg';
import delicacyMenuFlyerImg from '../assets/images/delicacy_menu_flyer_1786635261016.jpg';
import fridgeMastersArtImg from '../assets/images/fridge_masters_art_1786635247231.jpg';
import livestockSaleFlyerImg from '../assets/images/livestock_sale_flyer_1786635152251.jpg';
import piggeryHomeLogoImg from '../assets/images/piggery_home_logo_1786635197881.jpg';
import rtCleaningFlyerImg from '../assets/images/rt_cleaning_flyer_1786635172465.jpg';
import rtTransportFlyerImg from '../assets/images/rt_transport_flyer_1786635188178.jpg';
import storageTransportLogoImg from '../assets/images/storage_transport_logo_1786635208815.jpg';
import studentStorageFlyerImg from '../assets/images/student_storage_flyer_1786635271012.jpg';

import farmersLoversPhotoImg from '../assets/images/farmers_lovers_photo_1786639271067.jpg';
import fridgeMastersPhotoImg from '../assets/images/fridge_masters_photo_1786639284027.jpg';
import storageUnitPhotoImg from '../assets/images/storage_unit_photo_1786639300784.jpg';
import delicacyDagwoodDishImg from '../assets/images/delicacy_dagwood_dish_1786965269504.jpg';
import spitsDishPhotoImg from '../assets/images/spits_dish_photo_1786639322732.jpg';
import storageFacilityStaffImg from '../assets/images/storage_facility_staff_1786648581103.jpg';
import rtOfficialLogoImg from '../assets/images/rt_official_logo_1786606602881.jpg';
import rtVegetablesPhotoImg from '../assets/images/rt_vegetables_product_range.jpg';
import rtVegetablesCornImg from '../assets/images/rt_vegetables_sweetcorn.jpg';
import rtPiggeryPhotoImg from '../assets/images/rt_piggery_home_pigs.jpg';
import rtEggDeliveryImg from '../assets/images/rt_egg_supply_delivery.jpg';
import rtEggStockImg from '../assets/images/rt_egg_supply_stock.jpg';
import rtLivestockCattleImg from '../assets/images/rt_livestock_cattle.jpg';
import rtMeatRanchCattleImg from '../assets/images/rt_meat_ranch_cattle.jpg';
import rtSpitsEquipmentImg from '../assets/images/rt_spits_equipment.jpg';
import rtSpitsActionImg from '../assets/images/rt_spits_in_action.jpg';
import rtAgriculturalFieldworkImg from '../assets/images/rt_agricultural_consultation_fieldwork.jpg';
import rtAgricultureConsultingUpdatedImg from '../assets/images/rt_agriculture_consulting_updated.jpg';
import rtMeatRanchBrandUpdatedImg from '../assets/images/rt_meat_ranch_brand_updated.jpg';

export {
  agriConsultingFlyerImg,
  delicacyDishPhotoImg,
  delicacyEatsLogoImg,
  delicacyMenuFlyerImg,
  fridgeMastersArtImg,
  livestockSaleFlyerImg,
  piggeryHomeLogoImg,
  rtCleaningFlyerImg,
  rtTransportFlyerImg,
  storageTransportLogoImg,
  studentStorageFlyerImg,
  farmersLoversPhotoImg,
  fridgeMastersPhotoImg,
  storageUnitPhotoImg,
  delicacyDagwoodDishImg,
  spitsDishPhotoImg,
  storageFacilityStaffImg,
  rtOfficialLogoImg,
  rtVegetablesPhotoImg,
  rtVegetablesCornImg,
  rtPiggeryPhotoImg,
  rtEggDeliveryImg,
  rtEggStockImg,
  rtLivestockCattleImg,
  rtMeatRanchCattleImg,
  rtSpitsEquipmentImg,
  rtSpitsActionImg,
  rtAgriculturalFieldworkImg,
  rtAgricultureConsultingUpdatedImg,
  rtMeatRanchBrandUpdatedImg,
};

export const companyContact: ContactInfo = {
  directorGeneral: 'Mr Refilwe Xhali',
  title: 'Director General',
  phone: '+27 72 077 8876',
  email: 'refilwethapelo1@gmail.com',
  regNumber: '2022/337/316/07',
  pretoriaOffice: '25 Kgalagngwe Street, Saulsville, Pretoria, 0125',
  bloemfonteinBranch: 'Universitas, Bloemfontein, 9301',
  establishedYear: '2022',
  tagline: '"We never miss it."',
};

export const companyAboutText =
  'Refilwe Thapelo Trading & Projects is a diversified business group established in 2022, operating across food services, logistics, refrigeration, agriculture, cleaning services, trading and development initiatives.';

export const establishedBusinesses: BusinessEntity[] = [
  {
    id: 'de-delicacy-eats',
    name: 'De Delicacy Eats',
    subtitle: 'Food Truck, Gourmet Kotas & Event Catering',
    category: 'Food Services',
    shortDescription: 'Gourmet street cuisine, signature Kota delicacies, loaded fries, and event catering at UFS Universitas.',
    fullDescription: 'Located on Arndt Street in Universitas (opposite UFS small gate, Unilofts area), De Delicacy Eats serves freshly grilled toasted breakfasts, gourmet Dagwoods, signature loaded Kotas (with Russian, egg, polony, cheese, vienna & chips), and tender chicken strips. We cater campus life, corporate events, and private functions.',
    established: '2022',
    highlights: ['Special Kota & Loaded Fries', 'Gourmet Dagwoods & Breakfasts', 'Food Truck at UFS Small Gate', 'Event & Private Function Catering'],
    pricingNote: 'Kotas from R28 | Dagwoods from R40',
    image: delicacyDagwoodDishImg,
    flyerImage: delicacyMenuFlyerImg,
    galleryImages: [delicacyDagwoodDishImg, delicacyDishPhotoImg, spitsDishPhotoImg, delicacyMenuFlyerImg, delicacyEatsLogoImg],
    customLogo: delicacyEatsLogoImg,
    logoType: 'de-delicacy',
  },
  {
    id: 'rt-transport-logistics',
    name: 'RT Transport & Logistics',
    subtitle: 'Freight Fleet, Bakkie Moves & Distribution',
    category: 'Logistics',
    shortDescription: 'Long-haul freight transport, local bakkie deliveries, and student moves across Bloemfontein & nationwide.',
    fullDescription: 'RT Transport & Logistics operates under the founder’s motto "We Never Miss". Featuring heavy MAN freight vehicles and local utility bakkies, we handle student relocations starting from R150 per trip, commercial cargo distribution, furniture transit, and inter-provincial deliveries between Free State and Gauteng.',
    established: '2022',
    highlights: ['Local Student Trips from R150', 'MAN Freight & Bakkie Fleet', 'Inter-Provincial Cargo Distribution', '"We Never Miss" Guarantee (072 077 8876)'],
    pricingNote: 'Local trips starting at R150',
    image: rtTransportFlyerImg,
    flyerImage: rtTransportFlyerImg,
    galleryImages: [rtTransportFlyerImg, storageTransportLogoImg],
    customLogo: storageTransportLogoImg,
    logoType: 'rt-transport',
  },
  {
    id: 'rt-storage',
    name: 'RT Storage',
    subtitle: 'Lockable Storage Rooms & Student Move-Out Packages',
    category: 'Services',
    shortDescription: 'Secure, lockable brick storage units with special multi-month student holiday discount packages.',
    fullDescription: 'Safe, gated, and secure lockable storage facilities built with durable brick units in Bloemfontein. Tailored specifically for student holiday breaks, furniture safeguarding, and commercial overflow. Flexible discounted rates for 1 month (R300), 2 months (R500), and 3 months (R800) for standard 5-item packs.',
    established: '2022',
    highlights: ['1 Month Storage: R300', '2 Months Storage: R500', '3 Months Storage: R800', 'Secure Lockable Brick Units'],
    pricingNote: '1 Mo: R300 | 2 Mo: R500 | 3 Mo: R800',
    image: storageFacilityStaffImg,
    flyerImage: studentStorageFlyerImg,
    galleryImages: [storageFacilityStaffImg, storageUnitPhotoImg, studentStorageFlyerImg, storageTransportLogoImg],
    customLogo: storageTransportLogoImg,
    logoType: 'rt-storage',
  },
  {
    id: 'bfn-fridge-masters',
    name: 'BFN Fridge Masters',
    subtitle: 'Commercial Refrigeration, Chiller Repairs & Student Rentals',
    category: 'Refrigeration',
    shortDescription: 'On-site fridge servicing, cold room maintenance, display chiller repairs, and student bar fridge rentals.',
    fullDescription: 'Operating under the slogan "Where Every Chill Counts", BFN Fridge Masters delivers professional diagnostic and repair servicing for commercial cold rooms, supermarket display fridges, freezers, and domestic units, alongside flexible student bar fridge rentals starting from R250/month.',
    established: '2022',
    highlights: ['Student Bar Fridge Rentals from R250/m', 'Commercial Cold Room & Display Fridge Repair', 'On-Site Diagnostic & Gas Regas', 'Emergency Fast Response (067 794 8973)'],
    pricingNote: 'Student Rentals from R250/m',
    image: fridgeMastersPhotoImg,
    flyerImage: fridgeMastersArtImg,
    galleryImages: [fridgeMastersPhotoImg, fridgeMastersArtImg],
    logoType: 'bfn-fridge',
  },
  {
    id: 'rt-cleaning-projects',
    name: 'RT Cleaning Projects',
    subtitle: 'Residential, Yard, Braai, Venue & Grave Maintenance',
    category: 'Cleaning',
    shortDescription: 'Full-spectrum cleaning for private residences, ceremony yards, braai entertainment areas, and grave sites.',
    fullDescription: 'Simplify your sanitation with RT Cleaning Projects! Based in Atteridgeville, Pretoria and servicing the Free State, our teams specialize in deep residential cleaning, post-event and traditional ceremony yard cleanup, braai area sanitation, corporate venue maintenance, and dignified cemetery grave care.',
    established: '2022',
    highlights: ['Home & Deep Sanitation Cleaning', 'Traditional Ceremony & Yard Cleanup', 'Post-Braai Area Scrubbing', 'Dignified Grave Site Maintenance'],
    pricingNote: 'Custom quotes for events & homes',
    image: rtCleaningFlyerImg,
    flyerImage: rtCleaningFlyerImg,
    galleryImages: [rtCleaningFlyerImg],
    logoType: 'rt-cleaning',
  },
  {
    id: 'rt-spits',
    name: 'RT Spits',
    subtitle: 'Traditional Spit Braai Masters & Event Roasting',
    category: 'Food Services',
    shortDescription: 'Slow-roasted succulent whole lamb and pork spit braai catering with sides for events and ceremonies.',
    fullDescription: 'Delivering the authentic South African spit braai experience! Our seasoned braai masters roast whole seasoned lamb, pork, and beef on custom mobile rotisseries directly at your venue, accompanied by garlic rolls, savory pap, chakalaka, potato bakes, and post-event cleanup.',
    established: '2022',
    highlights: ['On-Site Whole Lamb & Pork Spits', 'Traditional Pap, Chakalaka & Sides', 'Weddings, Birthdays & Corporate Events', 'Complete Setup & Station Cleanup'],
    pricingNote: 'Custom guest per-head packages',
    image: rtSpitsActionImg,
    galleryImages: [rtSpitsActionImg, rtSpitsEquipmentImg],
    logoType: 'rt-spits',
  },
  {
    id: 'rt-vegetables',
    name: 'RT Vegetables',
    subtitle: 'Farm-Gate Harvest & Fresh Produce Wholesale',
    category: 'Agriculture',
    shortDescription: 'Farm-direct fresh spinach, cabbage, potatoes, onions, and tomatoes distributed to markets and kitchens.',
    fullDescription: 'Connecting agricultural producers directly with consumer tables, RT Vegetables supplies fresh, grade-A spinach, green cabbages, bulk potatoes, onions, and ripe tomatoes with farm-gate freshness, eliminating unnecessary middleman markups for local vendors and families.',
    established: '2022',
    highlights: ['Farm-Gate Fresh Spinach & Cabbage', 'Bulk Potato & Onion Distribution', 'Daily Supply to Kitchens & Retailers', 'Direct Smallholder Farmer Support'],
    image: rtVegetablesPhotoImg,
    galleryImages: [rtVegetablesPhotoImg, rtVegetablesCornImg],
    logoType: 'rt-vegetables',
  },
  {
    id: 'rt-cash-assist',
    name: 'RT Cash Assist',
    subtitle: 'Responsible Entrepreneur & Short-Term Bridge Financing',
    category: 'Financial Services',
    shortDescription: 'Fast, ethical micro-financial bridging solutions for entrepreneurs and short-term individual needs.',
    fullDescription: 'Providing responsible, discreet micro-financial assistance to help local entrepreneurs, students, and workers bridge unexpected short-term cash flow gaps with straightforward terms, transparent fee structures, and expedited turnaround.',
    established: '2022',
    highlights: ['Same-Day Approval Turnaround', 'Transparent Terms & Simple Repayment', 'Direct Emergency Cash Flow Relief', 'Dedicated Client Service Support'],
    image: rtOfficialLogoImg,
    galleryImages: [rtOfficialLogoImg],
    logoType: 'rt-cash',
  },
];

export const developmentProjects: ProjectEntity[] = [
  {
    id: 'rt-piggery-home',
    name: 'RT Piggery Home',
    subtitle: 'Sustainable Swine Farming & Breeding',
    category: 'Livestock & Meat',
    shortDescription: 'Modern piggery facility committed to biosecure breeding and high-quality pork production.',
    fullDescription: 'RT Piggery Home is a dedicated division of Farmers Lovers PTY (LTD). Focused on ethical animal husbandry, modern housing, and supplying healthy pork livestock to processing plants and local meat markets.',
    divisionNote: 'A division of FARMERS LOVERS PTY (LTD)',
    visionGoals: ['Biosecure Breeding Facilities', 'Sustainable Feed Management', 'Expansion to 500+ Breeding Sows', 'Local Youth Employment in Agriculture'],
    image: rtPiggeryPhotoImg,
    flyerImage: piggeryHomeLogoImg,
    galleryImages: [rtPiggeryPhotoImg, piggeryHomeLogoImg],
    customLogo: piggeryHomeLogoImg,
    logoType: 'rt-piggery',
  },
  {
    id: 'rt-livestock-sales',
    name: 'RT Livestock Sales',
    subtitle: 'Commercial & Traditional Animal Trading',
    category: 'Livestock & Meat',
    shortDescription: 'Premium livestock sale for Sheep/Lamb (R78), Goat/Chevon (R80), and Cattle/Beef (R67).',
    fullDescription: 'Facilitating fair-value livestock sales for cattle (300-350kg from R67), sheep/lamb (30-35kg from R78), and goat/chevon (30-35kg from R80). Providing guaranteed quality animals handled with care.',
    visionGoals: ['Sheep/Lamb (30-35 kg) from R78', 'Goat/Chevon (30-35 kg) from R80', 'Cattle/Beef (300-350 kg) from R67', 'Guaranteed Quality & Health Documentation'],
    image: rtLivestockCattleImg,
    flyerImage: livestockSaleFlyerImg,
    galleryImages: [rtLivestockCattleImg, rtMeatRanchCattleImg, livestockSaleFlyerImg],
    logoType: 'rt-livestock',
  },
  {
    id: 'rt-meat-ranch',
    name: 'RT Meat Ranch',
    subtitle: 'Meat @ Your Doorstep',
    category: 'Livestock & Meat',
    shortDescription: 'Quality & affordable meat direct to your door, sourced ethically from local ranches.',
    fullDescription: 'Operating under the promise "Quality & Affordable Meat is Our Priority", RT Meat Ranch connects piggery and livestock farms directly to households and restaurants through cold-chain home delivery.',
    divisionNote: 'A division of RT TRADING AND RT Piggery Home',
    visionGoals: ['Cold-Chain Doorstep Delivery', 'Affordable Bulk Meat Packs', 'Standardized Butchery Cuts', 'Support for Local Small Ranches'],
    image: rtMeatRanchBrandUpdatedImg,
    galleryImages: [rtMeatRanchBrandUpdatedImg, rtMeatRanchCattleImg, rtLivestockCattleImg, rtPiggeryPhotoImg, livestockSaleFlyerImg],
    logoType: 'rt-meat-ranch',
  },
  {
    id: 'rt-agricultural-consultations',
    name: 'RT Agricultural Consultations',
    subtitle: 'Farming Advisory & Soil Management',
    category: 'Consulting',
    shortDescription: 'Agriculture consulting services covering crop, livestock, soil health, and farm advisory.',
    fullDescription: 'Empowering new and developing farmers with consultations on crop management, livestock management, soil health & conservation, farm support & advisory, and animal/crop health. First session consultation free, starting from R500/session.',
    visionGoals: ['First Session Free Consultation', 'Sessions from R500.00', 'Crop & Livestock Management', 'Soil Health & Conservation'],
    image: rtAgricultureConsultingUpdatedImg,
    flyerImage: rtAgricultureConsultingUpdatedImg,
    galleryImages: [rtAgricultureConsultingUpdatedImg, rtAgriculturalFieldworkImg, rtLivestockCattleImg, agriConsultingFlyerImg],
    logoType: 'rt-consult',
  },
  {
    id: 'rt-egg-supply',
    name: 'RT Egg Supply',
    subtitle: 'Poultry & Fresh Egg Production',
    category: 'Poultry',
    shortDescription: 'Fresh, graded egg production and distribution for bakeries, retail, and local communities.',
    fullDescription: 'Building a sustainable layer hen facility to produce fresh, high-grade eggs daily. Designed to combat local food insecurity and supply wholesale buyers with reliable fresh eggs.',
    visionGoals: ['Automated Egg Grading & Packing', 'Local Bakery Supply Agreements', 'Zero-Waste Organic Feed Integration', 'Affordable Protein Access'],
    image: rtEggDeliveryImg,
    galleryImages: [rtEggDeliveryImg, rtEggStockImg],
    logoType: 'rt-egg',
  },
  {
    id: 'farmers-lovers-npo',
    name: 'Farmers Lovers NPO',
    subtitle: 'Community Farming & Youth Empowerment',
    category: 'Community & NPO',
    shortDescription: 'Non-profit initiative focused on agricultural skills training, food security, and rural upliftment.',
    fullDescription: 'Farmers Lovers NPO works on the ground to train young South Africans in modern agricultural techniques, establish community vegetable gardens, and support emergent black-owned farming ventures.',
    visionGoals: ['Community Garden Workshops', 'Youth Agricultural Bursaries', 'Equipment Sharing Co-ops', 'Rural Food Security Projects'],
    image: farmersLoversPhotoImg,
    galleryImages: [farmersLoversPhotoImg],
    logoType: 'farmers-lovers',
  },
];

export const authenticMediaList = [
  {
    url: rtMeatRanchBrandUpdatedImg,
    title: 'RT Meat Ranch Official Brand',
    subtitle: 'Quality and affordable meat at your door',
    originalLabel: 'Meat Ranch Logo.jpeg',
  },
  {
    url: rtAgricultureConsultingUpdatedImg,
    title: 'RT Agriculture Consulting Services',
    subtitle: 'Crop, livestock, soil health and farm advisory services',
    originalLabel: 'Agriculture Consulting.jpg',
  },
  {
    url: rtPiggeryPhotoImg,
    title: 'RT Piggery Home Livestock',
    subtitle: 'Pigs at the RT Piggery Home facility',
    originalLabel: 'Pigs RT Pigger Home(2).jpeg',
  },
  {
    url: rtEggDeliveryImg,
    title: 'RT Egg Supply Team and Fresh Eggs',
    subtitle: 'Fresh eggs prepared for customer supply',
    originalLabel: 'RT Egg supply 1(1).jpeg',
  },
  {
    url: rtEggStockImg,
    title: 'RT Egg Supply Fresh Egg Stock',
    subtitle: 'Fresh eggs packed and ready for distribution',
    originalLabel: 'RT Egg supply(1).jpeg',
  },
  {
    url: rtLivestockCattleImg,
    title: 'RT Livestock Cattle Operations',
    subtitle: 'Hands-on cattle care and livestock management',
    originalLabel: 'Meat and Cows(1).jpeg',
  },
  {
    url: rtMeatRanchCattleImg,
    title: 'RT Meat Ranch Cattle',
    subtitle: 'Authentic cattle farming operations',
    originalLabel: 'Meat Ranch.jpeg',
  },
  {
    url: rtSpitsActionImg,
    title: 'RT Spits Braai in Action',
    subtitle: 'Spit-braai equipment operating at an event',
    originalLabel: 'RT Spits(1).jpeg',
  },
  {
    url: rtSpitsEquipmentImg,
    title: 'RT Spits Professional Roasting Equipment',
    subtitle: 'Professional mobile spit-braai equipment',
    originalLabel: 'RT Spits 1(1).jpeg',
  },
  {
    url: rtAgriculturalFieldworkImg,
    title: 'RT Agricultural Field Consultation',
    subtitle: 'Practical livestock and farm advisory work',
    originalLabel: 'Livestock Refilwe.jpg',
  },
  {
    url: rtVegetablesPhotoImg,
    title: 'RT Vegetables Fresh Prepared Produce Range',
    subtitle: 'Freshly packed vegetables supplied by RT Vegetables',
    originalLabel: 'RT Vegatable.jpeg',
  },
  {
    url: rtVegetablesCornImg,
    title: 'RT Vegetables Fresh Sweetcorn Pack',
    subtitle: 'Farm-fresh sweetcorn prepared for customer delivery',
    originalLabel: 'RT Vegetable 2.jpeg',
  },
  {
    url: rtOfficialLogoImg,
    title: 'Refilwe Thapelo Trading & Projects (Pty) Ltd Emblem',
    subtitle: 'Official Group Circular Seal',
    originalLabel: 'Official RT Logo',
  },
  {
    url: delicacyEatsLogoImg,
    title: 'De Delicacy Eats Official Mascot Logo',
    subtitle: 'Food Truck & Catering Division',
    originalLabel: 'De Delicay Eats (2).jpg',
  },
  {
    url: delicacyDishPhotoImg,
    title: 'De Delicacy Eats Gourmet Kota & Fries Dish',
    subtitle: 'Signature Menu Item',
    originalLabel: 'De Delicay Eats dish.jpg',
  },
  {
    url: delicacyDagwoodDishImg,
    title: 'De Delicacy Eats Gourmet Dagwood & Sausage Plate',
    subtitle: 'Signature Toasted Breakfast & Loaded Dagwood',
    originalLabel: 'De Delicay Eats dish (2).jpg',
  },
  {
    url: spitsDishPhotoImg,
    title: 'RT Spits Succulent Spit Braai Catering Dish',
    subtitle: 'Catering & Event Platter',
    originalLabel: 'De Delicay Eats dish (3).jpg',
  },
  {
    url: delicacyMenuFlyerImg,
    title: 'De Delicacy Eats Food Truck Menu Flyer',
    subtitle: 'Arndt Street Universitas (UFS Gate)',
    originalLabel: 'Official Menu Flyer',
  },
  {
    url: rtTransportFlyerImg,
    title: 'RT Transport & Logistics Official Operations Flyer',
    subtitle: 'Featuring Founder & MAN Freight Truck ("We Never Miss")',
    originalLabel: 'RT general.jpeg',
  },
  {
    url: storageFacilityStaffImg,
    title: 'RT Storage Secure Units & On-Site Personnel',
    subtitle: 'Storage Facility and Management',
    originalLabel: 'Storage.jpeg',
  },
  {
    url: storageUnitPhotoImg,
    title: 'RT Storage Brick Units Facility',
    subtitle: 'Secure lockable storage rooms',
    originalLabel: 'Storage (2).jpeg',
  },
  {
    url: studentStorageFlyerImg,
    title: 'RT Storage Student Special Promotion Flyer',
    subtitle: '1 Month R300 | 2 Months R500 | 3 Months R800',
    originalLabel: 'Storage Student Flyer',
  },
  {
    url: rtCleaningFlyerImg,
    title: 'RT Cleaning Projects Official Service Flyer',
    subtitle: 'Home, Yard, Venue, Ceremonies, Braais, Graves',
    originalLabel: 'RT Cleaning sercives.jpeg',
  },
  {
    url: piggeryHomeLogoImg,
    title: 'RT Piggery Home Official Division Emblem',
    subtitle: 'Swine Breeding & Livestock Division',
    originalLabel: 'RT Pigger Home.jpeg',
  },
  {
    url: farmersLoversPhotoImg,
    title: 'Farmers Lovers NPO & Agricultural Youth Training',
    subtitle: 'Syngenta Landbou Agricultural Group',
    originalLabel: 'Farmers Lovers.jpg',
  },
  {
    url: fridgeMastersPhotoImg,
    title: 'BFN Fridge Masters Technical Servicing Photo',
    subtitle: 'On-site Commercial Refrigeration Repair',
    originalLabel: 'Fridge Masters Technical Photo',
  },
  {
    url: fridgeMastersArtImg,
    title: 'BFN Fridge Masters "Where Every Chill Counts" Flyer',
    subtitle: 'Cooling & Student Fridge Rentals',
    originalLabel: 'Fridge Masters Flyer',
  },
  {
    url: livestockSaleFlyerImg,
    title: 'RT Livestock Sales Price Chart Flyer',
    subtitle: 'Sheep/Lamb R78 | Goat/Chevon R80 | Cattle/Beef R67',
    originalLabel: 'RT Livestock Sales Flyer',
  },
  {
    url: agriConsultingFlyerImg,
    title: 'RT Agricultural Consultations Advisory Flyer',
    subtitle: 'First Session Free | Consultations from R500',
    originalLabel: 'RT Agri Consultations Flyer',
  },
];
