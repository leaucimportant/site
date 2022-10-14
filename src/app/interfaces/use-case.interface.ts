import { Block } from './block.interface';

export interface UseCase {
  id: string;
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
  seo: {
    title: string;
    description: string;
    image: string;
  };
}
