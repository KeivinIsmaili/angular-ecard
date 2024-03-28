import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    { id: 1, name: "Acetazolamide", description: "Oth hypersomnia not due to a substance or known physiol cond", brand: "Medique CCP Caffeine Free", gender: "Female", category: "Structural and Misc Steel (Fabrication)", size: 1, color: "Goldenrod", price: 77, rating: 4, is_in_inventory: false, items_left: 1, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 2, name: "Levetiracetam", description: "Civilian injured by military aircraft, subsequent encounter", brand: "Select OB", gender: "Male", category: "Framing (Steel)", size: 2, color: "Violet", price: 94, rating: 4, is_in_inventory: false, items_left: 2, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 3, name: "SENSAI CELLULAR PERFORMANCE WRINKLE REPAIR COLLAGENERGY", description: "Water transport accident involving military watercraft", brand: "Oxandrolone", gender: "Male", category: "Electrical", size: 3, color: "Fuscia", price: 4, rating: 4, is_in_inventory: false, items_left: 3, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 4, name: "IPKN Moist and Firm BB 04 Medium", description: "Unsp fracture of unsp toe(s), init for clos fx", brand: "Epinephrine", gender: "Male", category: "Doors, Frames & Hardware", size: 4, color: "Yellow", price: 26, rating: 4, is_in_inventory: true, items_left: 4, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 5, name: "Alka-Seltzer Plus", description: "Unspecified early complication of trauma, sequela", brand: "Lamivudine and Zidovudine", gender: "Male", category: "Temp Fencing, Decorative Fencing and Gates", size: 5, color: "Red", price: 65, rating: 4, is_in_inventory: false, items_left: 5, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 6, name: "Lithium Carbonate", description: "Brkdwn implanted electronic stimulator of nervous sys, subs", brand: "Dorama-Neo", gender: "Female", category: "Structural and Misc Steel (Fabrication)", size: 6, color: "Pink", price: 7, rating: 4, is_in_inventory: false, items_left: 6, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 7, name: "Lagicam", description: "Toxic effect of detergents, undetermined, subs encntr", brand: "hair regrowth treatment", gender: "Male", category: "Landscaping & Irrigation", size: 7, color: "Puce", price: 98, rating: 4, is_in_inventory: false, items_left: 7, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 8, name: "HealthMart", description: "Displaced transverse fracture of shaft of left ulna, init", brand: "Synthroid", gender: "Male", category: "Elevator", size: 8, color: "Orange", price: 54, rating: 4, is_in_inventory: false, items_left: 8, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 9, name: "Nighttime Cold and Flu", description: "Fall (on)(from) sidewalk curb, subsequent encounter", brand: "Banzel", gender: "Female", category: "Retaining Wall and Brick Pavers", size: 9, color: "Orange", price: 95, rating: 4, is_in_inventory: false, items_left: 9, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 10, name: "CD DiorSnow White Reveal UV Shield Foundation 012-Porcelain", description: "Trisomy 18, unspecified", brand: "Diurex", gender: "Female", category: "Framing (Wood)", size: 10, color: "Puce", price: 26, rating: 4, is_in_inventory: false, items_left: 10, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 11, name: "CD DiorSnow White Reveal UV Shield Foundation 012-Porcelain", description: "Trisomy 18, unspecified", brand: "Diurex", gender: "Female", category: "Framing (Wood)", size: 10, color: "Puce", price: 26, rating: 4, is_in_inventory: false, items_left: 10, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 12, name: "CD DiorSnow White Reveal UV Shield Foundation 012-Porcelain", description: "Trisomy 18, unspecified", brand: "Diurex", gender: "Female", category: "Framing (Wood)", size: 10, color: "Puce", price: 26, rating: 4, is_in_inventory: false, items_left: 10, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" }
  ]

  selectedFilterRadioButton: string = 'all';

  @Input() searchText: string = '';

  selectedProduct: Product;

}