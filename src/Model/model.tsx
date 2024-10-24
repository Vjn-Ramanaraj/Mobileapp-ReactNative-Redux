export interface Feature {
  attribute: string;
  value: string;
}

export interface Products {
  id: string;
  name: string;
  description: string;
  price: string;
  mainImage: string[]; 
  features: Feature[];  
  benefits: string[];    
  category: string;
}
