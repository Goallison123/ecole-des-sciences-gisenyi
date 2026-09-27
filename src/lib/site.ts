export const school = {
  name: "École des Sciences de Gisenyi",
  nameLines: ["École des Sciences", "de Gisenyi"] as const,
  shortName: "ESG",
  motto: "Know · Innovate · Build Tomorrow",
  tagline:
    "A school of excellence, training today's students to become tomorrow's leaders.",
  city: "Gisenyi, Rwanda",
  phone: "+250 78 123 45 67",
  phoneHref: "tel:+250781234567",
  email: "contact@esg.rw",
  emailHref: "mailto:contact@esg.rw",
  copyright: "© 2026 École des Sciences de Gisenyi. All rights reserved.",
};

export const navLeft = [
  { to: "/", label: "Home" },
  { to: "/our-school", label: "Our school" },
  { to: "/programs", label: "Programs" },
] as const;

export const navRight = [
  { to: "/school-life", label: "School life" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
] as const;

export const navAll = [...navLeft, ...navRight];

export const social = [
  { name: "Facebook", href: "https://www.facebook.com" },
  { name: "X", href: "https://x.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "YouTube", href: "https://www.youtube.com" },
] as const;

export const values = [
  {
    id: "excellence",
    title: "Excellence",
    text: "Quality teaching that reveals every talent.",
    icon: "graduation",
  },
  {
    id: "respect",
    title: "Respect",
    text: "A caring and inclusive environment.",
    icon: "users",
  },
  {
    id: "innovation",
    title: "Innovation",
    text: "Modern methods for lasting learning.",
    icon: "lightbulb",
  },
  {
    id: "engagement",
    title: "Engagement",
    text: "Responsible students for a positive impact.",
    icon: "leaf",
  },
] as const;

export const programs = [
  {
    id: "preschool",
    title: "Preschool",
    summary: "Spark curiosity, lay the foundations.",
    icon: "sprout",
    ages: "Ages 3–6",
    duration: "3 years",
    intro:
      "A gentle first step into school life, where play, language, and discovery sit at the heart of every day.",
    points: [
      "Play-based learning that builds language, motor skills, and confidence",
      "Small classes with attentive teachers and a bilingual environment",
      "Gardens, stories, music, and first encounters with numbers and nature",
      "A safe, welcoming setting that prepares children for primary school",
    ],
  },
  {
    id: "primary",
    title: "Primary",
    summary: "Build the foundations.",
    icon: "book",
    ages: "Ages 6–12",
    duration: "6 years",
    intro:
      "Solid foundations in literacy, numeracy, science, and character — so every child can think clearly and care deeply.",
    points: [
      "A rigorous core in reading, writing, mathematics, and the sciences",
      "Inquiry projects that connect classroom learning to the world around Gisenyi",
      "Arts, sport, and civic education alongside academic work",
      "Close follow-up so no talent is left unseen",
    ],
  },
  {
    id: "middle",
    title: "Middle school",
    summary: "Deepen knowledge.",
    icon: "flask",
    ages: "Ages 12–15",
    duration: "3 years",
    intro:
      "The collège years stretch curiosity into method: students learn to analyse, experiment, and work with growing independence.",
    points: [
      "Strengthened sciences, mathematics, and languages",
      "Laboratory work, research habits, and structured debate",
      "Guidance as interests begin to take shape",
      "A culture of respect, effort, and intellectual honesty",
    ],
  },
  {
    id: "high",
    title: "High school",
    summary: "Prepare for the future, open new horizons.",
    icon: "file",
    ages: "Ages 15–18",
    duration: "3 years",
    intro:
      "Lycée at ESG is ambitious and outward-looking: students prepare for the baccalaureate while discovering the paths that await them.",
    points: [
      "Specialised tracks with a strong science core",
      "University counselling, research projects, and public speaking",
      "Partnerships, visits, and a culture of intellectual excellence",
      "Leadership through service, clubs, and student voice",
    ],
  },
  {
    id: "baccalaureate",
    title: "Baccalaureate",
    summary: "Towards excellence and success.",
    icon: "star",
    ages: "Final year",
    duration: "Examination year",
    intro:
      "The baccalaureate is both a destination and a beginning. We prepare students to sit it with confidence — and to walk beyond it with purpose.",
    points: [
      "Intensive preparation, past papers, and individual mentoring",
      "Orientation towards universities in Rwanda and abroad",
      "A final-year culture of rigour, calm, and mutual support",
      "Alumni network and ongoing guidance after results",
    ],
  },
] as const;

export const leadership = [
  {
    name: "Dr. Clarisse Uwase",
    role: "Head of School",
    bio: "A scientist and educator committed to forming students who think rigorously and act with integrity.",
  },
  {
    name: "Jean-Baptiste Hakizimana",
    role: "Director of Studies",
    bio: "Oversees curriculum from preschool to the baccalaureate, with a focus on scientific method and languages.",
  },
  {
    name: "Aline Mukamana",
    role: "Head of Pastoral Care",
    bio: "Leads student wellbeing, inclusion, and the daily life that makes ESG a true community.",
  },
] as const;

export const stats = [
  { value: "1,200+", label: "Students" },
  { value: "90", label: "Teachers" },
  { value: "18", label: "Years of excellence" },
  { value: "12", label: "Laboratories" },
] as const;

export const clubs = [
  {
    title: "Science & robotics",
    text: "Experiments, olympiads, and machines that move — curiosity with a method.",
  },
  {
    title: "Debate & Model UN",
    text: "Voice, listening, and argument in service of ideas that matter.",
  },
  {
    title: "Arts & choir",
    text: "Music, theatre, and visual arts as a second language of the school.",
  },
  {
    title: "Sports",
    text: "Football, basketball, athletics, and a culture of fair play.",
  },
  {
    title: "Environment club",
    text: "Gardens, Lake Kivu, and the habit of caring for the place we live.",
  },
  {
    title: "Community service",
    text: "Partnerships in Gisenyi that teach students they belong to more than a classroom.",
  },
] as const;
