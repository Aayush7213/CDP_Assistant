export type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

export type DocEntry = {
  title: string;
  content: string;
};

export type CDPData = {
  segment: DocEntry[];
  mparticle: DocEntry[];
  lytics: DocEntry[];
  zeotap: DocEntry[];
  comparisons: DocEntry[];
  advanced: DocEntry[];
};