export interface Product {
  id: number;
  name: string;
  category: string;
  original_price: number;
  cost_price: number;
  max_discount: number;
  description: string;
  image_url?: string | null;
  created_at?: string;
}
