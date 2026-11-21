export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  program: string;
  category: 'Student' | 'College Representative';
  rating: number;
  avatarBg: string;
  initials: string;
  quote: string;
  verifiedLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'feedback-1',
    name: 'Aravind K.',
    role: 'B.Tech CSE Final Year Student',
    institution: 'Engineering College, Hyderabad',
    program: 'IEEE Project Mentoring & AI Implementation',
    category: 'Student',
    rating: 5,
    avatarBg: 'from-blue-600 to-cyan-500',
    initials: 'AK',
    quote:
      'The project mentoring at SUDHVI TECH completely transformed how our team built our final-year capstone. Instead of handing us generic copy-paste code, our mentor walked us through the IEEE research paper architecture, guided us through FastAPI and React microservices, and conducted rigorous mock viva reviews. Our external review panel awarded our project an A+ grade.',
    verifiedLabel: 'Verified Project Mentee',
  },
  {
    id: 'feedback-2',
    name: 'Priyanka M.',
    role: 'MCA Graduate',
    institution: 'University PG Center, Telangana',
    program: 'Java Full Stack & Placement Readiness',
    category: 'Student',
    rating: 5,
    avatarBg: 'from-emerald-600 to-teal-500',
    initials: 'PM',
    quote:
      'Coming from an MCA background, academic courses left a noticeable gap in enterprise application development. SUDHVI TECH’s Java Full Stack training focused directly on Spring Boot, PostgreSQL, Docker, and Git workflows. The mock technical interviews gave me the exact confidence needed to crack core engineering hiring drives.',
    verifiedLabel: 'Verified Course Graduate',
  },
  {
    id: 'feedback-3',
    name: 'Dr. R. V. Prasad',
    role: 'Professor & Head of Training & Placements',
    institution: 'Affiliated Engineering College, Telangana',
    program: 'Institutional On-Campus Technology Bootcamp',
    category: 'College Representative',
    rating: 5,
    avatarBg: 'from-purple-600 to-indigo-500',
    initials: 'RP',
    quote:
      'Partnering with SUDHVI TECH for our 5-day on-campus Generative AI and Python Bootcamp was one of the most productive institutional initiatives we ran this semester. Their trainers are real practitioners who engaged over 140 engineering students with live coding and industry tools. The students’ technical depth noticeably improved.',
    verifiedLabel: 'Verified Institutional Partner',
  },
  {
    id: 'feedback-4',
    name: 'K. Sai Teja',
    role: 'BCA Final Year Student',
    institution: 'Degree College, Hyderabad',
    program: 'Python Programming & Data Analytics',
    category: 'Student',
    rating: 5,
    avatarBg: 'from-amber-600 to-orange-500',
    initials: 'ST',
    quote:
      'I wanted practical, mentor-led guidance to build a solid career in data analytics. At SUDHVI TECH, every module was centered on real datasets, data cleaning pipelines, and interactive dashboards. Having mentors review my code repository one-on-one helped me build a portfolio I am proud to showcase on GitHub and LinkedIn.',
    verifiedLabel: 'Verified Course Graduate',
  },
];
