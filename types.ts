
export interface Scenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Functional' | 'UI' | 'API' | 'Wait';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface LocatorChallenge {
  id: string;
  name: string;
  type: string;
  description: string;
  hint: string;
}
