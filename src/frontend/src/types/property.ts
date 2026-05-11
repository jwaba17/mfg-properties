export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  type:
    | "Prime Residential"
    | "Commercial Development"
    | "Country Estate"
    | "New Development";
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
  imageUrl: string;
}
