export class CreateProductDto {
    name: string;

    description: string;
  
    images: string[];  
  
    categoryId: string;
  
    userId: string;
    
    slug: string;

    active: boolean;
}
