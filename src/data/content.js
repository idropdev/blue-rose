// Single source of truth for all site copy & assets.
// Copy mirrors the live site archive (RECREATE.md).

const wix = (id, w, h) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},q_90,enc_avif,quality_auto/${id}`;

export const CONTACT = {
  name: 'Blue Rose Aesthetics & Wellness, PLLC',
  address: '801 Myrtle Ave, Suite 104, El Paso, TX 79901',
  phone: '915-588-9508',
  phoneHref: 'tel:+19155889508',
  email: 'bluerosemedspa@gmail.com',
  emailHref: 'mailto:bluerosemedspa@gmail.com',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  booking: 'https://www.blueroseaestheticswellness.com/book-online',
  mapsEmbed:
    'https://www.google.com/maps?q=801+Myrtle+Ave+Suite+104,+El+Paso,+TX+79901&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=801+Myrtle+Ave+Suite+104+El+Paso+TX+79901',
};

export const LOGO = wix('1d5344_b71a322af9d548c9a0dcbb38979962a3~mv2.jpg', 600, 600);

export const SERVICES = [
  {
    slug: 'facial-injections',
    name: 'Facial Injections',
    short: 'Botox, Xeomin & wrinkle smoothing',
    duration: '1 hr',
    price: 'From $8 / unit',
    image: wix('1d5344_eff1f327e6524ab3badc2ed9521dea34~mv2.jpg', 800, 1000),
    description:
      'Botox, Xeomin, and other top brands to smooth out wrinkles and rejuvenate your appearance. Priced per unit or by area, customized by our skilled professionals.',
  },
  {
    slug: 'lip-fillers',
    name: 'Lip Fillers',
    short: 'Fuller, natural-looking lips',
    duration: '1 hr',
    price: '$250',
    image: wix('43e5d3f2b08340f985528fdd190b20e9.jpg', 1000, 800),
    description:
      'Achieve fuller, plumper lips and redefine your lip shape for a more confident smile — enhancing your natural beauty with a comfortable, safe procedure.',
  },
  {
    slug: 'iv-hydration',
    name: 'IV Hydration & Vitamins',
    short: 'Recover, energize, glow',
    duration: '1 hr',
    price: '$150',
    image: wix('1d5344_a5db0449bd864a35b869528b4681370a~mv2.jpg', 802, 876),
    description:
      'Personalized IV infusions that deliver essential nutrients to help you recover, energize, and enhance your natural beauty — leaving you revitalized and glowing.',
  },
  {
    slug: 'hormone-replacement-therapy',
    name: 'Hormone Replacement',
    short: 'Pellet therapy & balance',
    duration: '1 hr 30 min',
    price: 'From $550',
    image: wix('1d5344_09f6fa94d1874e6abd1276cbe43cf305~mv2.jpg', 934, 934),
    description:
      'A comprehensive, medically-guided hormone evaluation with a personalized pellet treatment plan — restoring balance, energy, and metabolism.',
  },
  {
    slug: 'weight-loss',
    name: 'Weight Loss Program',
    short: 'Medical, personalized plans',
    duration: '45 min',
    price: 'From $40',
    image: wix('11062b_e5946d9cad94409383e36c98ab1c80c9~mv2.jpg', 970, 970),
    description:
      'A tailored medical weight loss program with monthly packages and energizing LIPO injections — designed around your needs, lifestyle, and medical history.',
  },
  {
    slug: 'facials',
    name: 'Medical & Relaxing Facials',
    short: 'Medical-grade skin renewal',
    duration: '1 hr',
    price: 'From $80',
    image: wix('11062b_7ee911d5f888476cafaac3d17bc2c278~mv2.jpg', 780, 1029),
    description:
      'Customized medical-grade treatment: comprehensive skin assessment, deep cleansing, exfoliation, and targeted extractions for clarity, texture, and glow.',
  },
  {
    slug: 'prp',
    name: 'PRP Therapy',
    short: 'Collagen, hair & skin renewal',
    duration: '1 hr 30 min',
    price: '$250',
    image: wix('1d5344_41a4fe97431f4325815bfb78ce92ef8e~mv2.jpg', 970, 970),
    description:
      "Platelet-Rich Plasma therapy harnesses your body's own regenerative power — stimulating collagen, supporting hair growth, and renewing skin texture.",
  },
];

export const PILLARS = [
  {
    n: '01',
    title: 'Clinically-Led Care',
    body: 'Treatments performed by a Family Nurse Practitioner and a team of experienced professionals with advanced training in aesthetics and wellness.',
  },
  {
    n: '02',
    title: 'Natural, Safe Results',
    body: 'Evidence-based techniques that enhance your features without looking overdone.',
  },
  {
    n: '03',
    title: 'Personalized Plans',
    body: 'Every service is tailored to your goals, lifestyle, and skin needs.',
  },
  {
    n: '04',
    title: 'Boutique Experience',
    body: 'A calm, supportive environment where you feel seen, heard, and cared for.',
  },
];

export const BEFORE_AFTERS = [
  {
    label: 'Skin Rejuvenation',
    image: wix('11062b_7ee911d5f888476cafaac3d17bc2c278~mv2.jpg', 780, 1029),
  },
  {
    label: 'Under-Eye Refresh',
    image: wix('43e5d3f2b08340f985528fdd190b20e9.jpg', 1422, 686),
  },
  {
    label: 'Weight Loss Program',
    image: wix('11062b_e5946d9cad94409383e36c98ab1c80c9~mv2.jpg', 970, 970),
  },
  {
    label: 'PRP Hair Restoration',
    image: wix('1d5344_41a4fe97431f4325815bfb78ce92ef8e~mv2.jpg', 970, 970),
  },
];

export const PRODUCTS = [
  {
    name: 'Petal PH Toner',
    price: 32,
    tag: 'Toner',
    description:
      'A soothing, alcohol-free toner that gently refines pores, restores pH balance, and delivers lightweight hydration.',
    ingredients: 'Peptide Complex · Aloe · Cucumber',
    size: '6.8 oz',
    image: wix('1d5344_deed50265a044632867e65ce43e19235~mv2.png', 700, 700),
  },
  {
    name: 'Revitalizing Cleanser',
    price: 37,
    tag: 'Cleanser',
    description:
      'A gentle, hydrating cleanser that removes impurities while maintaining the skin’s moisture barrier.',
    ingredients: 'Peptide Complex · Hyaluronic Acid · Aloe Extract',
    size: '7.1 oz',
    image: wix('1d5344_215e7567d99445478a0552139a86f84d~mv2.png', 700, 700),
  },
  {
    name: 'HA Physical Tint',
    price: 46,
    tag: 'SPF · Medical Grade',
    description:
      'A physical sunscreen with broad-spectrum UV protection and a tinted finish. Water resistant (40 min).',
    ingredients: 'Titanium Dioxide 5.5% · Hyaluronic Acid',
    size: '2.1 oz',
    image: wix('1d5344_d4220ad04a7047d29425020e8114f979~mv2.png', 700, 700),
  },
  {
    name: 'Glow Guard',
    price: 48,
    tag: 'SPF · Medical Grade',
    description:
      'A sheer, lightweight sunscreen that layers seamlessly under makeup with an elegant finish.',
    ingredients: 'Zinc Oxide 10% · Octinoxate 7.5% · Knotweed',
    size: '2 oz',
    image: wix('1d5344_e3fa45da905841ed8919685762d02ece~mv2.png', 700, 700),
  },
  {
    name: 'Nectar R CoQ10',
    price: 73,
    tag: 'Serum · Medical Grade',
    description: 'Hydrating antioxidant serum powered by CoQ10.',
    ingredients: 'CoQ10',
    size: '1 fl oz',
    image: wix('1d5344_64a00860a0fc47fd8f30fff0186cd717~mv2.png', 700, 700),
  },
  {
    name: 'Celestial Peptide Renewal',
    price: 92,
    tag: 'Treatment · Medical Grade',
    description:
      'A restorative treatment that supports moisture and promotes a firm, rejuvenated complexion.',
    ingredients: 'Peptide Complexes · Ceramides · Shea Butter',
    size: '2.1 oz',
    image: wix('1d5344_562ebf158be841979ac84705bf7cbd8a~mv2.png', 700, 700),
  },
  {
    name: 'Wrinkle Repair Serum',
    price: 98,
    tag: 'Retinol · Medical Grade',
    description:
      'A high-potency retinol serum that reduces fine lines and uneven tone while promoting collagen synthesis.',
    ingredients: 'Retinol 0.5% · Bakuchiol',
    size: '1 fl oz',
    image: wix('1d5344_df533ff3d6804994b57320a60623b6a4~mv2.png', 700, 700),
  },
  {
    name: 'Bloom C & E',
    price: 112,
    tag: 'Vitamin C · Medical Grade',
    description:
      'A high-potency vitamin C & E serum that brightens, reduces hyperpigmentation, and shields against environmental stressors.',
    ingredients: 'Vitamin C 20% · Vitamin E 1% · Ferulic Acid',
    size: '1 fl oz',
    image: wix('1d5344_1873291cc2614b2583925f380c697b5e~mv2.png', 700, 700),
  },
];

export const WHY = [
  {
    title: 'Clinically-Led Expertise',
    body: 'Every treatment is performed by a Family Nurse Practitioner with advanced training in aesthetics, wellness, and evidence-based practice. Your safety and outcomes are always the priority.',
  },
  {
    title: 'Natural, Subtle Results',
    body: 'We enhance your features — never overpower them. Our approach focuses on balance, harmony, and results that look like you, only refreshed.',
  },
  {
    title: 'Personalized Treatment Plans',
    body: 'No two faces are the same. Your care is tailored to your anatomy, goals, lifestyle, and long-term wellness.',
  },
  {
    title: 'Boutique, Patient-Centered Care',
    body: 'From the moment you walk in, you’re treated with warmth, intention, and respect. We create a calm, supportive environment where you feel seen, heard, and cared for.',
  },
];

export const STORY_QUOTE =
  'Blue roses do not occur naturally; they are created through vision, persistence, and the belief that beauty can be shaped even when it doesn’t exist yet.';
