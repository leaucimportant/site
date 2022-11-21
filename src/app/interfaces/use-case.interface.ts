import { Block } from './block.interface';

export interface UseCase {
  name: string;
  rank: number;
  slug: string;
  headerText: string;
  logo: string;
  title: string;
  subtitle: string;
  media: string;
  tags: string[];
  solutionsFiltered: string[];
  customerNeed: Block;
  challenge: Block;
  response: Block;
  quote: Block;
  resumeQuote: string;
  seo: {
    title: string;
    description: string;
    image: string;
  };
}
