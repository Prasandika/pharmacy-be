import { Product } from 'src/api/products/interfaces/product.interface';

export interface Cart {
  id?: string;
  userId?: string;
  products?: Product[];
  total?: number;
  isOrdered: boolean;
}
