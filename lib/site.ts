/**
 * Single source of truth for site identity, and for the FAQ content that is
 * rendered on the page AND emitted as FAQPage structured data. Google requires
 * schema to match visible content, so both must read from here.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel to the real production domain — canonical
 * URLs, the sitemap and OG tags all derive from it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayuragentlabs.com"
).replace(/\/$/, "");

export const SITE = {
  name: "AyurAgent Labs",
  legalName: "AyurAgent Labs Pvt Ltd",
  url: SITE_URL,
  email: "mothalali@ayuragentlabs.com",
  /** E.164 for wa.me / tel: links, plus a readable form for display. */
  phone: "+919645372369",
  phoneDisplay: "+91 96453 72369",
  instagramHandle: "ayuragentlabs",
  tagline: "The best Ayurveda marketer your clinic deserves",
  description:
    "AyurAgent Labs is an Ayurveda marketing agency in Kerala, India. We build patient acquisition systems for Ayurveda clinics, panchakarma retreats, practising vaidyas and D2C ayurvedic brands — brand, website, Meta and Google campaigns, and WhatsApp automation, run end to end.",
  shortDescription:
    "Ayurveda marketing agency in Kerala — patient acquisition systems for clinics, retreats and ayurvedic brands.",
  region: "Kerala",
  country: "India",
  founder: {
    name: "Aswin Reghu",
    role: "Founder",
    bio: "Aswin Reghu is the founder of AyurAgent Labs, an Ayurveda marketing agency based in Kerala, India. He works with clinics, panchakarma retreats and ayurvedic brands on positioning, patient acquisition and the automation their front desk runs on.",
  },
  social: {
    // Only real, specific profile URLs belong here — they are emitted as
    // schema.org sameAs, where a bare platform homepage is worse than nothing.
    instagram: "https://instagram.com/ayuragentlabs",
  },
} as const;

/** Pre-filled WhatsApp deep link — opens the app on mobile, web on desktop. */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi AyurAgent Labs — I'd like to talk about growing my clinic.",
)}`;

export const MAILTO_URL = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Working with AyurAgent Labs",
)}`;

export const SERVICES = [
  {
    id: "acquisition",
    title: "Patient Acquisition",
    summary:
      "Meta and Google campaigns built around treatment intent, not vanity reach — measured to the consultation, not the click.",
    deliverables: [
      "Campaign architecture",
      "Creative testing",
      "Click-to-WhatsApp",
      "Attribution",
    ],
  },
  {
    id: "brand",
    title: "Brand & Web",
    summary:
      "Identity and a site that carries the authority your practice already has offline, and converts the people it brings in.",
    deliverables: ["Positioning", "Visual identity", "Website build", "Landing systems"],
  },
  {
    id: "automation",
    title: "AI & Automation",
    summary:
      "The follow-up that clinics lose money on, running itself — enquiry routing, reminders and recall sequences that never miss.",
    deliverables: ["CRM pipelines", "WhatsApp flows", "Booking automation", "Reporting"],
  },
  {
    id: "content",
    title: "Content Studio",
    summary:
      "Malayalam-first reels, carousels and patient education that build the trust an ad can only borrow.",
    deliverables: ["Reel scripting", "Shoot direction", "Carousels", "Content calendar"],
  },
] as const;

/**
 * Answer-engine content. Each answer is written to stand alone when quoted out
 * of context by an AI assistant or a featured snippet — direct first sentence,
 * no build-up, no claims we cannot support.
 */
export const FAQS = [
  {
    q: "What does AyurAgent Labs do?",
    a: "AyurAgent Labs is an Ayurveda marketing agency based in Kerala, India. We build patient acquisition systems for Ayurveda businesses — positioning and brand identity, the website, Meta and Google campaigns, and the WhatsApp and CRM automation that handles enquiry follow-up. We run all of it end to end rather than handing pieces to separate vendors.",
  },
  {
    q: "Who does AyurAgent Labs work with?",
    a: "We work with Ayurveda clinics, panchakarma centres and retreats, multi-branch clinic groups, individual practising vaidyas building a personal brand, and D2C ayurvedic product companies. Most of our work is in Kerala, and we take engagements across India.",
  },
  {
    q: "Can you advertise Ayurveda treatments on Meta and Google?",
    a: "Yes, within real limits. Meta restricts targeting based on personal health attributes and disallows before-and-after imagery and body-shaming angles, so campaigns have to be built around treatment intent rather than inferred conditions. In India, the Drugs and Magic Remedies (Objectionable Advertisements) Act also restricts advertising that claims to cure certain listed conditions. We write and structure campaigns to work inside those rules instead of risking rejections and account strikes.",
  },
  {
    q: "How do you measure whether the marketing is working?",
    a: "We report to consultations, not impressions. The two numbers that matter are how many qualified patients booked and what each booked consultation cost, tracked per campaign and — for multi-branch groups — per branch, so budget can follow the locations that actually fill.",
  },
  {
    q: "How long does it take to see results?",
    a: "Campaign infrastructure and tracking typically go live in the first few weeks, and paid acquisition can produce enquiries almost immediately once it does. Organic content and local SEO compound more slowly and are usually judged over a few months rather than a few weeks. Any agency promising guaranteed patient numbers on a fixed date is guessing.",
  },
  {
    q: "Do you write content in Malayalam?",
    a: "Yes. Malayalam-first reels, carousels and patient education are a core part of what we do, because that is what earns trust with patients in Kerala. We handle scripting and shoot direction as well as the edit.",
  },
  {
    q: "Who founded AyurAgent Labs?",
    a: "AyurAgent Labs was founded by Aswin Reghu. He works directly with clinics, panchakarma retreats and ayurvedic brands on positioning, patient acquisition and front-desk automation, and is based in Kerala, India.",
  },
  {
    q: "How do I start working with AyurAgent Labs?",
    a: "Message us on WhatsApp at +91 96453 72369, or email mothalali@ayuragentlabs.com, with where your clinic is today and where you want it in twelve months. We will tell you honestly whether we are the right fit before proposing any work.",
  },
] as const;
