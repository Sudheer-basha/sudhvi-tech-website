// Project types
export type ProjectCategory =
  | 'B.Tech Projects'
  | 'Degree & BCA'
  | 'MCA Projects'
  | 'IEEE Research'
  | 'Live Industry'
  | 'AI & Generative AI'
  | 'Java & Python Full Stack';

export type ProjectDifficulty =
  | 'Beginner to Intermediate'
  | 'Intermediate'
  | 'Intermediate to Advanced'
  | 'Advanced';

export interface Project {
  id: string;
  title: string;
  domain: string;
  category: ProjectCategory;
  difficulty: ProjectDifficulty;
  description: string;
  problemStatement: string;
  keyFeatures: string[];
  skillsLearned: string[];
  techStack: string[];
  isSampleConcept: boolean;
}

export interface ProjectService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface MethodologyStage {
  step: string;
  title: string;
  summary: string;
  activities: string[];
}
