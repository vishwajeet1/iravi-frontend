export interface BaseJournalInterface {
  name: string;
  description: string;
}
export interface JournalInterface extends BaseJournalInterface {
  id: number;
  author: number;
}

export interface BaseJournalSectionInterface {
  name: string;
  description: string;
  background: string;
  journal: number;
}
export interface JournalSectionInterface extends BaseJournalSectionInterface {
  id: number;
}
