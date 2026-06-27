export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: string;
  cover: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "cu-now",
    title: "CU Now",
    client: "Christ University",
    year: "2026",
    role: "Event Management",
    category: "MANAGEMENT",
    cover: "/mockups/cu-now.jpg",
    summary: "A comprehensive platform detailing venues, locations, and schedules across the campus.",
    problem: "Students and guests struggled to find event venues and keep track of schedules.",
    approach: "We centralized all event data, added interactive campus maps, and built a seamless flow.",
    outcome: "Improved event attendance and reduced confusion regarding venue locations on campus."
  },
  {
    slug: "cu-nav-app",
    title: "CU Nav App",
    client: "Christ University",
    year: "2026",
    role: "Campus Navigation",
    category: "NAVIGATION",
    cover: "/mockups/cu-nav.jpg",
    summary: "A navigation guide app helping guests and new students easily find their way around the campus.",
    problem: "The campus is large and complex, making it difficult for visitors to navigate.",
    approach: "We mapped out the entire campus and created a step-by-step navigation guide.",
    outcome: "Visitors can now confidently explore the campus without getting lost."
  },
  {
    slug: "coming-soon-1",
    title: "Coming Soon",
    client: "Christ University",
    year: "2026",
    role: "Upcoming Project",
    category: "COMING SOON",
    cover: "/mockups/coming-soon.jpg",
    summary: "Stay tuned for more exciting projects coming soon.",
    problem: "N/A",
    approach: "N/A",
    outcome: "N/A"
  },
  {
    slug: "coming-soon-2",
    title: "Coming Soon",
    client: "Christ University",
    year: "2026",
    role: "Upcoming Project",
    category: "COMING SOON",
    cover: "/mockups/coming-soon.jpg",
    summary: "Stay tuned for more exciting projects coming soon.",
    problem: "N/A",
    approach: "N/A",
    outcome: "N/A"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: null, next: null };

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length]
  };
}
