export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  paragraphs: string[];
};

export const articles: Article[] = [
  {
    slug: "science-fair-2026",
    title: "Students present original research at the 2026 Science Fair",
    excerpt:
      "From water quality on Lake Kivu to low-cost sensors, this year’s fair showed what patient inquiry can become.",
    date: "2026-09-12",
    category: "Science",
    image: "/images/lab.svg",
    paragraphs: [
      "The courtyard and laboratories filled with posters, prototypes, and quiet conversations this month as École des Sciences de Gisenyi held its annual Science Fair. Families, teachers, and visiting researchers from Rubavu moved from stand to stand as students explained months of work.",
      "Projects ranged from a study of shoreline water quality on Lake Kivu to a low-cost soil sensor designed for school gardens. Several teams worked in Kinyarwanda, French, and English — a reminder that scientific clarity and linguistic care belong together.",
      "“We ask students not only to find an answer, but to show their method,” said Jean-Baptiste Hakizimana, Director of Studies. “The fair is where that discipline becomes public.”",
      "A jury of teachers and university guests awarded distinctions in experimental sciences, engineering, and environmental studies. All projects remain on display in the library gallery through October.",
    ],
  },
  {
    slug: "new-laboratories",
    title: "New laboratories open for chemistry and life sciences",
    excerpt:
      "Twelve teaching labs now serve the school, with benches, fume hoods, and light designed for serious practical work.",
    date: "2026-08-28",
    category: "Campus",
    image: "/images/lab.svg",
    paragraphs: [
      "The school has opened two new laboratories dedicated to chemistry and the life sciences, completing a campus plan that now counts twelve teaching labs.",
      "Benches, storage, and fume hoods were specified for safety and for advanced practical science work. Large windows look onto the gardens, so experiment and landscape sit in the same frame.",
      "Dr. Clarisse Uwase, Head of School, described the rooms as “a promise to our students that science at ESG is something you do with your hands, not only something you read.”",
      "First practical sessions began with O’Level classes in the week after opening. A Level research groups will use the spaces in the evenings for long-form projects.",
    ],
  },
  {
    slug: "lake-kivu-field-week",
    title: "Field week on Lake Kivu: geology, ecology, and place",
    excerpt:
      "Lycée students spent five days reading the landscape they live beside — shoreline, hills, and the science of the lake.",
    date: "2026-07-03",
    category: "School life",
    image: "/images/lake.svg",
    paragraphs: [
      "Gisenyi is not a backdrop. For one week in July, lycée students treated Lake Kivu as a classroom: shoreline transects, simple water measures, sketches of volcanic hills, and conversations with local fishermen and park staff.",
      "The week mixed earth sciences, ecology, and civics. Students kept field notebooks and returned with questions about methane, biodiversity, and the duties of a school that sits on this water.",
      "“Place is a teacher if we let it be,” said Aline Mukamana, Head of Pastoral Care. “We want our students to know this lake with both precision and gratitude.”",
      "A public exhibition of notebooks and photographs will open in the library at the start of the next term.",
    ],
  },
  {
    slug: "a-level-results",
    title: "A Level 2026: a year of strong results and wide doors",
    excerpt:
      "Graduates move on to universities in Rwanda and abroad, carrying the school’s demand for rigour and character.",
    date: "2026-06-18",
    category: "Academics",
    image: "/images/library.svg",
    paragraphs: [
      "The class of 2026 received its A Level results in June, with a pass rate that continues the school’s record of academic seriousness and a spread of distinctions across scientific tracks.",
      "Offers have arrived from universities in Rwanda, East Africa, and further afield. Counselling continues through the summer for students still weighing paths in medicine, engineering, research, and the humanities.",
      "At a quiet gathering in the courtyard, the Head of School thanked families and teachers “for a long companionship — excellence is never the work of a single year.”",
      "Alumni from earlier cohorts returned to speak with the new graduates, a tradition the school intends to keep.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
