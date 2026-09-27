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
  { to: "/students", label: "Students" },
] as const;

export const navRight = [
  { to: "/academics", label: "Academics" },
  { to: "/programs", label: "Levels" },
  { to: "/school-life", label: "School life" },
  { to: "/conduct", label: "Conduct" },
  { to: "/contact", label: "Contact" },
] as const;

export const navAll = [...navLeft, ...navRight];

export const navMenus = {
  academics: [
    { to: "/academic-calendar", label: "Academic calendar" },
    { to: "/library", label: "Library" },
    { to: "/ict-rooms", label: "ICT rooms" },
    { to: "/self-study", label: "Self-study (étude)" },
  ],
  levels: [
    { to: "/o-level", label: "O’Level" },
    { to: "/a-level", label: "A Level" },
  ],
  schoolLife: [
    { to: "/school-life", label: "Overview" },
    { to: "/gallery", label: "Gallery" },
    { to: "/dormitory", label: "Dormitory" },
    { to: "/parent-visits", label: "Parent visits" },
    { to: "/news", label: "News" },
  ],
} as const;

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
    id: "o-level",
    title: "O’Level",
    summary: "Build strong foundations in science and learning.",
    icon: "book",
    ages: "Lower secondary",
    duration: "Ordinary level",
    intro:
      "O’Level at ESG builds confident, curious learners through a broad foundation in sciences, mathematics, languages, and responsible citizenship.",
    points: [
      "A balanced grounding in mathematics, sciences, languages, and humanities",
      "Practical learning, study habits, and guided preparation for national assessment",
      "Clubs and student activities that build confidence and collaboration",
      "Individual guidance as learners prepare for their next academic stage",
    ],
  },
  {
    id: "a-level",
    title: "A Level",
    summary: "Specialise, investigate, and prepare for what comes next.",
    icon: "flask",
    ages: "Upper secondary",
    duration: "Advanced level",
    intro:
      "A Level offers focused subject combinations and deeper scientific study, supported by practical work, independent learning, and academic mentorship.",
    points: [
      "Subject combinations aligned with Rwanda’s upper-secondary curriculum",
      "Laboratory investigations, research habits, and structured discussion",
      "Academic mentoring and independent study routines",
      "Preparation for national examinations and future study pathways",
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
    bio: "Oversees the O’Level and A Level curriculum, with a focus on scientific method and languages.",
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
