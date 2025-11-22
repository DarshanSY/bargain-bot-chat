-- Create products table
CREATE TABLE public.products (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  original_price INTEGER NOT NULL,
  cost_price INTEGER NOT NULL,
  max_discount INTEGER NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read products (public products)
CREATE POLICY "Anyone can view products"
  ON public.products
  FOR SELECT
  USING (true);

-- Insert the 10 sample products
INSERT INTO public.products (name, category, original_price, cost_price, max_discount, description) VALUES
  ('Redmi Note 13', 'Electronics – Smartphone', 14999, 11200, 18, '5G smartphone with AMOLED display.'),
  ('Boat Airdopes 181', 'Electronics – Earbuds', 1299, 850, 22, 'Lightweight TWS earbuds with ENC.'),
  ('Puma Men''s Running Shoes', 'Footwear', 3499, 2200, 15, 'Stylish and comfortable daily running shoes.'),
  ('Milton Thermosteel 1L Bottle', 'Home & Kitchen', 899, 520, 20, 'Keeps beverages hot/cold for 24 hours.'),
  ('Usha Electric Kettle 1.5L', 'Kitchen Appliances', 1199, 770, 19, 'Stainless steel electric kettle with auto shut-off.'),
  ('Campus Women''s Casual Sneakers', 'Footwear', 999, 620, 18, 'Lightweight daily wear sneakers.'),
  ('Noise ColorFit Pulse 3 Smartwatch', 'Wearables', 1499, 950, 20, 'Smartwatch with large display & health tracking.'),
  ('Lenovo Wireless Keyboard + Mouse Combo', 'Computer Accessories', 1299, 880, 17, 'Slim wireless keyboard and mouse set.'),
  ('Mamaearth Onion Shampoo 250ml', 'Personal Care', 349, 210, 25, 'Anti-hairfall shampoo with natural ingredients.'),
  ('Wildcraft 30L Backpack', 'Bags & Travel', 1599, 1050, 16, 'Durable travel and college backpack.');