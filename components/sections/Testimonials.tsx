import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";

const testimonials = [
  {
    quote: "Very good work by developer's society",
    name: "Student User",
    role: "Student",
    rating: "5.0",
    avatar: "/avatars/person-1.svg"
  },
  {
    quote: "excellent app, smart work by developers",
    name: "Student User",
    role: "Student",
    rating: "5.0",
    avatar: "/avatars/person-3.svg"
  },
  {
    quote: "very useful and helpul app for freshiers",
    name: "Student User",
    role: "Student",
    rating: "5.0",
    avatar: "/avatars/person-2.svg"
  },
  {
    quote: "very nice, very good UI/UX",
    name: "Student User",
    role: "Student",
    rating: "5.0",
    avatar: "/avatars/person-1.svg"
  },
  {
    quote: "Actually the UI/UX developer build crazy UI/UX design",
    name: "Student User",
    role: "Student",
    rating: "5.0",
    avatar: "/avatars/person-3.svg"
  },
  {
    quote: "It's a great app, hoping to make something similar and cool in my tenure here. This initiative really has inspired me. Thank you",
    name: "Student User",
    role: "Student",
    rating: "5.0",
    avatar: "/avatars/person-2.svg"
  }
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-main overflow-hidden">
        <SectionHeader eyebrow="Testimonials" title="Good work gets noticed" />
        <div className="mt-16">
          <TestimonialsMarquee testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}
