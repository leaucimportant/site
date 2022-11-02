export interface Block {
  text: string;
  images?: string[];
  items?: string[];
  people?: {
    name: string;
    job: string;
  }[];
  logo?: string;
}
