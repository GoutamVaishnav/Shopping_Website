export type ProductType = {
  id: string | number;        // Product का unique identifier
  name: string;               // Product का नाम
  shortDescription: string;   // संक्षिप्त विवरण
  description: string;        // विस्तृत विवरण
  price: number;              // कीमत (संख्या में)
  sizes: string[];            // उपलब्ध sizes की array
  colors: string[];           // उपलब्ध colors की array
  images: Record<string, string>; // Images का object (key-value pairs)
};

export type ProductsType = ProductType[];
