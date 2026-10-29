export type SpeakerId = 'A' | 'B';

export interface SpeakerInfo {
  id: SpeakerId;
  name: string;
  role: string;
  timeSlot: string;
  durationMinutes: number;
  slideRange: [number, number];
  color: string;
  avatarText: string;
}

export interface SlideItem {
  id: number;
  speaker: SpeakerId;
  timeRange: string;
  part: string;
  title: string;
  subtitle: string;
  funMetaphor: string;
  speakerScript: string;
  keyTakeaway: string;
  tags: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GreenBuildingMetric {
  label: string;
  value: string;
  icon?: string;
}

export interface GreenBuildingExample {
  slideId: number;
  name: string;
  location: string;
  ratingBadge: string;
  imageUrl: string;
  is3dRender: boolean;
  tagline: string;
  structuralHighlights: string[];
  metrics: GreenBuildingMetric[];
  description: string;
}
