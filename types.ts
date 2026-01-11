export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string; // Optional for this demo, usually would be a video source
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type Theme = 'light' | 'dark' | 'system';

export enum Section {
  HERO = 'hero',
  WORK = 'work',
  PLUGINS = 'plugins',
  ABOUT = 'about',
  CONTACT = 'contact',
  CHAT = 'chat'
}