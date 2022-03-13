export enum ChatKeys {
  Chat = 'chat',
}

export interface Chat {
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: number;
  created: string;
  isOwner: boolean;
  message: string;
}

export interface ChatMessageCreate {
  message: string;
}
