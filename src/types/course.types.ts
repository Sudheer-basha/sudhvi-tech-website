// Course types
export type CourseCategory =
  | 'AI & Machine Learning'
  | 'Programming & Development'
  | 'Quality & Testing'
  | 'Data Analytics';

export type CourseLevel =
  | 'Beginner'
  | 'Beginner to Intermediate'
  | 'Intermediate to Advanced'
  | 'Advanced'
  | 'All Levels';

export interface CourseModule {
  moduleNumber: number;
  title: string;
  duration: string;
  summary: string;
  topics: string[];
}

export interface CourseFAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  level: CourseLevel;
  description: string;
  fullDescription: string;
  duration: string;
  mode: string;
  schedule: string;
  badge?: string;
  icon: string;
  color: string;
  // 12 Required Sections & Data
  whoShouldEnroll: string[];
  prerequisites: string[];
  learningObjectives: string[];
  syllabus: CourseModule[];
  practicalExercises: string[];
  projects: string[];
  toolsAndTech: string[];
  trainingMethodology: string[];
  learningOutcomes: string[];
  careerOpportunities: string[];
  faqs: CourseFAQ[];
}

export type CourseFilterCategory = 'All' | CourseCategory;
