import type { FaqItem } from "@/components/Faq";

export type SpaceType = { title: string; desc: string };

export type AreaGuide = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string[];
  spaceTypes: SpaceType[];
  servicesIntro: string;
  services: string[];
  afterHours: string[];
  landmarksTitle: string;
  landmarks: string;
  faqs: FaqItem[];
};

export const AREA_GUIDES: AreaGuide[] = [
  {
    slug: "downtown-core",
    name: "Downtown Core",
    metaTitle: "Office Cleaning in Downtown Core, Calgary | Free Quote",
    metaDescription:
      "Nightly office cleaning in Calgary's Downtown Core — towers, corporate floors & boardrooms. Insured, after-hours crews. Get a free quote.",
    tagline:
      "Nightly janitorial for the towers and corporate floors at the centre of Calgary's business district.",
    intro: [
      "Calgary's Downtown Core is the city's business engine — office towers clustered around Stephen Avenue and linked by the +15 skyway network, home to energy companies, banks, law firms, and corporate headquarters. It's also where cleaning standards are highest: lobbies that impress clients, boardrooms that host deals, and open-plan floors that hundreds of people move through every day.",
      "D.C.O.C. cleans offices throughout the Core, from full-floor corporate suites to multi-tenant towers. Our crews are used to downtown building protocols — security desks, fob access, loading docks, and freight elevators — so service runs smoothly without adding work for your property manager.",
    ],
    spaceTypes: [
      {
        title: "Corporate floors & head offices",
        desc: "Full-floor nightly cleaning: workstations, private offices, boardrooms, and kitchens, reset before the morning rush.",
      },
      {
        title: "Multi-tenant towers",
        desc: "Common-area and suite cleaning coordinated with building management and security protocols.",
      },
      {
        title: "Boardrooms & client-facing spaces",
        desc: "Detail-level cleaning for the rooms where first impressions are made — glass, tables, and floors kept flawless.",
      },
      {
        title: "Lobbies & amenity areas",
        desc: "High-traffic entrance and amenity cleaning that keeps the building's front door looking sharp.",
      },
    ],
    servicesIntro:
      "Every Downtown Core service plan is built around your floor and your schedule. Core services include:",
    services: [
      "Nightly janitorial: trash and recycling, dusting, vacuuming, and mopping",
      "Restroom cleaning and sanitizing, restocked nightly",
      "Kitchen and breakroom deep cleaning",
      "High-touch disinfection: door handles, elevator buttons, shared equipment",
      "Interior glass, boardroom tables, and detail dusting",
      "Carpet cleaning and hard-floor care programs",
    ],
    afterHours: [
      "Downtown towers run on strict access schedules, and so do we. Our crews typically work between 6 pm and 6 am, coordinating with your building's security desk for fob and alarm access. Weekend and holiday cleaning is available for deep cleans that need empty floors.",
      "Because the same insured and bonded crew returns every visit, they learn your floor's quirks — which boardroom needs extra attention, where the kitchen trash overflows — and the quality stays consistent.",
    ],
    landmarksTitle: "Around the neighbourhood",
    landmarks:
      "We clean offices steps from Stephen Avenue Walk, around The Bow and Brookfield Place, near Bankers Hall and the Suncor Energy Centre, and throughout the +15-connected towers — with Calgary Tower watching over it all.",
    faqs: [
      {
        q: "Can you work with our building's security and access rules?",
        a: "Yes. We're used to downtown tower protocols — signing in at security desks, fob and alarm code handling, and freight elevator bookings. We coordinate directly with your property manager so setup is painless.",
      },
      {
        q: "Do you clean on weekends or holidays?",
        a: "Yes. Weekends and holidays are ideal for deep cleans, carpet work, and anything that needs an empty floor. Just tell us the window and we'll staff it.",
      },
      {
        q: "How do quotes work for large corporate floors?",
        a: "We start with a walkthrough — in person or virtual — then send a free quote within 24 hours, priced around your square footage, restrooms, kitchens, and schedule.",
      },
    ],
  },
  {
    slug: "beltline",
    name: "Beltline",
    metaTitle: "Office Cleaning in Beltline, Calgary | Free Quote",
    metaDescription:
      "Office cleaning in Calgary's Beltline — agencies, studios, clinics & street-level businesses. Flexible after-hours service. Get a free quote.",
    tagline:
      "Flexible office cleaning for Beltline's agencies, studios, clinics, and street-level businesses.",
    intro: [
      "The Beltline is Calgary's densest inner-city neighbourhood — a mix of low- and mid-rise offices above 17th Avenue's shops and restaurants, converted character spaces, and modern mixed-use buildings along 11th and 12th Avenues. It's home to creative agencies, tech startups, design studios, clinics, and professional firms that want cleaning as flexible as they are.",
      "D.C.O.C. serves Beltline offices of every size, from two-person studios to full agencies. Smaller spaces get the same consistent crew and checklist discipline as our downtown tower clients — scaled to fit your square footage and your budget.",
    ],
    spaceTypes: [
      {
        title: "Creative agencies & studios",
        desc: "Cleaning that respects open creative spaces — dust-free desks, spotless meeting rooms, and kitchens that survive Friday afternoons.",
      },
      {
        title: "Clinics & professional practices",
        desc: "Sanitizing-focused cleaning for waiting rooms, treatment rooms, and reception areas.",
      },
      {
        title: "Street-level businesses",
        desc: "After-hours cleaning for storefronts and showrooms along 17th Avenue and the surrounding blocks.",
      },
      {
        title: "Small & growing offices",
        desc: "Right-sized service plans for teams of 2 to 50 — nightly, weekly, or a few times a week.",
      },
    ],
    servicesIntro:
      "Beltline service plans are built around smaller, busier spaces. Popular services include:",
    services: [
      "Recurring office cleaning: nightly or a few times per week",
      "Kitchen and breakroom cleaning — the heart of small offices",
      "Restroom sanitizing and restocking",
      "Dusting, vacuuming, and mopping for open-plan spaces",
      "High-touch disinfection for shared desks and meeting rooms",
      "Move-in and move-out cleans for growing teams",
    ],
    afterHours: [
      "Beltline businesses keep all kinds of hours, so we flex around yours. Evening cleaning after your team heads out is the most popular option, with early-morning and weekend slots available too.",
      "For street-level spaces, after-hours service means your storefront is spotless before the morning foot traffic — no cleaners in the way of customers, ever.",
    ],
    landmarksTitle: "Around the neighbourhood",
    landmarks:
      "We clean offices along 17th Avenue SW, around Central Memorial Park, and throughout the mixed-use blocks between 10th and 17th Avenues — in the middle of one of Calgary's liveliest neighbourhoods.",
    faqs: [
      {
        q: "Our office is small. Is it worth hiring a cleaning company?",
        a: "Absolutely — small offices show dirt faster because every surface gets used. Our plans scale to your square footage, so a studio or small agency pays for what it needs and nothing more.",
      },
      {
        q: "Can you clean our street-level storefront after hours?",
        a: "Yes. After-hours cleaning is ideal for street-level businesses: we clean when you're closed, so the space is spotless for the morning rush.",
      },
      {
        q: "Do you offer flexible schedules for growing teams?",
        a: "Yes. Start with a few visits a week and scale up as you grow — frequency, checklists, and pricing adjust with your team.",
      },
    ],
  },
  {
    slug: "eau-claire",
    name: "Eau Claire",
    metaTitle: "Office Cleaning in Eau Claire, Calgary | Free Quote",
    metaDescription:
      "Discreet office cleaning in Eau Claire, Calgary — professional suites & riverside offices. Insured crews, after-hours. Get a free quote.",
    tagline:
      "Discreet, detail-focused cleaning for Eau Claire's professional suites and riverside offices.",
    intro: [
      "Eau Claire sits along the Bow River at the edge of downtown — a polished district of professional towers like Eau Claire Tower, boutique offices, and condo developments with street-level commercial space. The businesses here — wealth management, law, consulting, and medical practices — expect quiet, meticulous service.",
      "D.C.O.C. provides discreet after-hours cleaning for Eau Claire offices, with a consistent crew that learns your space and treats it like their own. Low disruption, high detail, every visit.",
    ],
    spaceTypes: [
      {
        title: "Professional suites",
        desc: "Law, finance, and consulting offices where polished reception areas and private offices matter.",
      },
      {
        title: "Medical & dental practices",
        desc: "Hygiene-first cleaning for waiting rooms, operatories, and sterilization-adjacent areas.",
      },
      {
        title: "Boutique & riverside offices",
        desc: "Smaller premium offices that want white-glove attention without a big-company contract.",
      },
      {
        title: "Condo commercial units",
        desc: "Street-level commercial spaces in residential developments, cleaned around building rules.",
      },
    ],
    servicesIntro:
      "Eau Claire clients tend to choose detail-heavy service plans, including:",
    services: [
      "Nightly or weekly office cleaning with detailed checklists",
      "Reception and waiting-area presentation cleaning",
      "Restroom sanitizing with premium restocking",
      "Interior glass, millwork dusting, and floor detailing",
      "Kitchen and breakroom deep cleaning",
      "High-touch disinfection throughout",
    ],
    afterHours: [
      "Discretion is the whole point of after-hours service in Eau Claire. Our crews work evenings and early mornings, coordinate with concierge or building security where needed, and leave the office ready before your first appointment.",
      "The same crew every visit means no re-explaining your preferences — they know which desk needs a light touch and which boardroom hosts clients on Tuesdays.",
    ],
    landmarksTitle: "Around the neighbourhood",
    landmarks:
      "We serve offices around Eau Claire Tower and Eau Claire Plaza, along the Bow River pathway, and steps from Prince's Island Park — one of Calgary's most scenic places to work.",
    faqs: [
      {
        q: "Can you coordinate with our building's concierge or security?",
        a: "Yes. We work with concierge desks, security protocols, and fob systems regularly, and we handle access details directly so you don't have to.",
      },
      {
        q: "Do you clean medical or dental offices?",
        a: "Yes. We offer hygiene-focused cleaning for practices, including waiting rooms, treatment areas, and restrooms — with checklists built around your standards.",
      },
      {
        q: "Can we get the same crew every time?",
        a: "That's our standard. A consistent crew is how we keep quality steady, and it's especially important in professional offices where trust matters.",
      },
    ],
  },
  {
    slug: "east-village",
    name: "East Village",
    metaTitle: "Office Cleaning in East Village, Calgary | Free Quote",
    metaDescription:
      "Office cleaning in Calgary's East Village — new builds, studios & nonprofits. After-hours crews, free quotes. Get a free quote today.",
    tagline:
      "Cleaning for East Village's new builds, creative studios, and growing organizations.",
    intro: [
      "East Village is Calgary's newest neighbourhood — a redeveloped district of striking new buildings, converted heritage spaces like the Simmons Building, and cultural landmarks including Studio Bell and the Central Library. It's home to nonprofits, design studios, tech teams, and organizations drawn to the area's energy.",
      "D.C.O.C. cleans East Village offices from brand-new developments to character conversions. New builds often need post-construction detailing before move-in; established teams need reliable recurring service that grows with them. We do both.",
    ],
    spaceTypes: [
      {
        title: "New-build offices",
        desc: "Recurring cleaning for recently completed developments, plus post-construction detailing before move-in.",
      },
      {
        title: "Studios & creative workplaces",
        desc: "Cleaning for design studios and creative teams in converted and contemporary spaces.",
      },
      {
        title: "Nonprofits & organizations",
        desc: "Budget-conscious, dependable cleaning for mission-driven teams and their meeting spaces.",
      },
      {
        title: "Cafés with offices & mixed spaces",
        desc: "Flexible cleaning for hybrid spaces that blend public-facing and back-office areas.",
      },
    ],
    servicesIntro:
      "Popular services for East Village workplaces include:",
    services: [
      "Post-construction cleanup and detailing for new builds",
      "Recurring nightly or weekly office cleaning",
      "Kitchen, breakroom, and shared amenity cleaning",
      "Restroom sanitizing and restocking",
      "Dusting, vacuuming, and hard-floor care",
      "Event and meeting-space reset cleans",
    ],
    afterHours: [
      "East Village teams work flexible hours, so our crews do too. Evening cleaning is standard, with early-morning and weekend options for deep cleans and event turnarounds.",
      "Moving into a new build? We can schedule post-construction detailing right before your move-in date, then roll straight into recurring service.",
    ],
    landmarksTitle: "Around the neighbourhood",
    landmarks:
      "We work around the Simmons Building, Studio Bell (National Music Centre), Calgary's Central Library, and St. Patrick's Island — in the middle of Calgary's most ambitious neighbourhood rebuild.",
    faqs: [
      {
        q: "Do you offer post-construction cleaning for new builds?",
        a: "Yes. We detail new and renovated spaces — dust removal, window and fixture detailing, floor finishing — so your team moves into a truly clean office.",
      },
      {
        q: "We're a nonprofit with a tight budget. Can you help?",
        a: "Yes. We'll build a plan around your must-haves and your budget, and scale it as your organization grows.",
      },
      {
        q: "Can you handle event or meeting-space turnarounds?",
        a: "Yes. We offer reset cleans for meeting rooms and event spaces — scheduled after hours so the space is ready for the next day.",
      },
    ],
  },
];

export function getAreaGuide(slug: string): AreaGuide | undefined {
  return AREA_GUIDES.find((guide) => guide.slug === slug);
}

export const AREA_SLUGS = AREA_GUIDES.map((guide) => guide.slug);
