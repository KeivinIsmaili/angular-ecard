
export class Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number;
    color: string;
    price: number;
    rating: number;
    discountPrice?: number;
    is_in_inventory: boolean;
    items_left: number;
    image_url: string;
}