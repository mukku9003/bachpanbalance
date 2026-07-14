
export enum AppView {
  LANDING = 'landing',
  DASHBOARD = 'dashboard',
  ACTIVITIES = 'activities',
  COMMUNITY = 'community',
  LEARN = 'learn',
  SCREENING = 'screening',
  ROUTINE = 'routine'
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  ageGroup: string;
  image: string;
  difficulty: 'Low' | 'Medium' | 'High';
  instructions?: string[];
}

export interface Milestone {
  id: string;
  category: 'social' | 'motor' | 'language' | 'cognitive';
  title: string;
  status: 'achieved' | 'in_progress' | 'locked';
  age: string;
}
