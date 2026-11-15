import { TakeNotes, UsesAbilities } from '@serenity-js/core';

/** Lo que cada actor anota durante un escenario (habilidad TakeNotes). */
export interface ChatwootNotes {
  conversationId: number;
  contactId: number;
  contactEmail: string;
  label: string;
  teamName: string;
  teamId: number;
  macroName: string;
  shortCode: string;
  ruleName: string;
  attributeKey: string;
  searchTerm: string;
  emails: string[];
  phone: string;
  personalMacro: string;
  globalMacro: string;
  lastStatus: number;
  lastBody: any;
}

/** Anota un valor en el cuaderno del actor. */
export const remember = <K extends keyof ChatwootNotes>(actor: UsesAbilities, key: K, value: ChatwootNotes[K]): void => {
  TakeNotes.as<TakeNotes<ChatwootNotes>>(actor).notepad.set(key, value);
};

/** Lee un valor del cuaderno del actor. */
export const recall = <K extends keyof ChatwootNotes>(actor: UsesAbilities, key: K): ChatwootNotes[K] =>
  TakeNotes.as<TakeNotes<ChatwootNotes>>(actor).notepad.get(key);
