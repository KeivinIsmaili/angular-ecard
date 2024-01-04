import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products = [
    { id: 1, name: "Acetazolamide", description: "Oth hypersomnia not due to a substance or known physiol cond", brand: "Medique CCP Caffeine Free", gender: "Female", category: "Structural and Misc Steel (Fabrication)", size: 1, color: "Goldenrod", price: 77, is_in_inventory: false, items_left: 1, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6edde7c-6730-428b-b1ef-8dc5d7af97d7/dunk-low-retro-mens-shoes-7zsVZN.png" },
    { id: 2, name: "Levetiracetam", description: "Civilian injured by military aircraft, subsequent encounter", brand: "Select OB", gender: "Male", category: "Framing (Steel)", size: 2, color: "Violet", price: 94, is_in_inventory: false, items_left: 2, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99175768-9c5d-4563-b1a7-684be4f5e1db/dunk-low-retro-mens-shoes-b7qQN2.png" },
    { id: 3, name: "SENSAI CELLULAR PERFORMANCE WRINKLE REPAIR COLLAGENERGY", description: "Water transport accident involving military watercraft", brand: "Oxandrolone", gender: "Male", category: "Electrical", size: 3, color: "Fuscia", price: 4, is_in_inventory: false, items_left: 3, image_url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9cb75678-361f-408a-8974-da1fc4a567c2/alphafly-3-proto-mens-road-racing-shoes-fwGfLF.png" },
    { id: 4, name: "IPKN Moist and Firm BB 04 Medium", description: "Unsp fracture of unsp toe(s), init for clos fx", brand: "Epinephrine", gender: "Male", category: "Doors, Frames & Hardware", size: 4, color: "Yellow", price: 26, is_in_inventory: true, items_left: 4, image_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/76b9f62a6e244f22bef5af47011d555d_9366/Adilette_Platform_Slides_Black_HQ6179_02_standard_hover.jpg" },
    { id: 5, name: "Alka-Seltzer Plus", description: "Unspecified early complication of trauma, sequela", brand: "Lamivudine and Zidovudine", gender: "Male", category: "Temp Fencing, Decorative Fencing and Gates", size: 5, color: "Red", price: 65, is_in_inventory: false, items_left: 5, image_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg" },
    { id: 6, name: "Lithium Carbonate", description: "Brkdwn implanted electronic stimulator of nervous sys, subs", brand: "Dorama-Neo", gender: "Female", category: "Structural and Misc Steel (Fabrication)", size: 6, color: "Pink", price: 7, is_in_inventory: false, items_left: 6, image_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b3094187e3ff464cbd41ad110116759b_9366/NMD_R1_Primeblue_Shoes_Black_GX8312_01_standard.jpg" },
    { id: 7, name: "Lagicam", description: "Toxic effect of detergents, undetermined, subs encntr", brand: "hair regrowth treatment", gender: "Male", category: "Landscaping & Irrigation", size: 7, color: "Puce", price: 98, is_in_inventory: false, items_left: 7, image_url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ad6a3258d914abba226ae8400304876_9366/Nizza_Platform_Shoes_Yellow_GX4607_01_standard.jpg" },
    { id: 8, name: "HealthMart", description: "Displaced transverse fracture of shaft of left ulna, init", brand: "Synthroid", gender: "Male", category: "Elevator", size: 8, color: "Orange", price: 54, is_in_inventory: false, items_left: 8, image_url: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/22c6d996c5704db9bd27ac5a01205c22_9366/Essentials_Big_Logo_Tee_White_GK9121_01_laydown.jpg" },
    { id: 9, name: "Nighttime Cold and Flu", description: "Fall (on)(from) sidewalk curb, subsequent encounter", brand: "Banzel", gender: "Female", category: "Retaining Wall and Brick Pavers", size: 9, color: "Orange", price: 95, is_in_inventory: false, items_left: 9, image_url: "https://assets.adidas.com/images/w_1366,h_1366,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b9a6b4fa8904e14894fad2a008056b7_9366/Essentials_Warm-Up_Tapered_3-Stripes_Track_Pants_Black_H46107_01_laydown.jpg" },
    { id: 10, name: "CD DiorSnow White Reveal UV Shield Foundation 012-Porcelain", description: "Trisomy 18, unspecified", brand: "Diurex", gender: "Female", category: "Framing (Wood)", size: 10, color: "Puce", price: 26, is_in_inventory: false, items_left: 10, image_url: "https://assets.adidas.com/images/w_1366,h_1366,f_auto,q_auto,fl_lossy,c_fill,g_auto/743ba16e96604f23bbb0af1e00e38fce_9366/NMD_R1_Shoes_Grey_FZ5708_01_standard.jpg" },
    { id: 11, name: "CD DiorSnow White Reveal UV Shield Foundation 012-Porcelain", description: "Trisomy 18, unspecified", brand: "Diurex", gender: "Female", category: "Framing (Wood)", size: 10, color: "Puce", price: 26, is_in_inventory: false, items_left: 10, image_url: "https://assets.adidas.com/images/w_1366,h_1366,f_auto,q_auto,fl_lossy,c_fill,g_auto/743ba16e96604f23bbb0af1e00e38fce_9366/NMD_R1_Shoes_Grey_FZ5708_01_standard.jpg" },
    { id: 12, name: "CD DiorSnow White Reveal UV Shield Foundation 012-Porcelain", description: "Trisomy 18, unspecified", brand: "Diurex", gender: "Female", category: "Framing (Wood)", size: 10, color: "Puce", price: 26, is_in_inventory: false, items_left: 10, image_url: "https://assets.adidas.com/images/w_1366,h_1366,f_auto,q_auto,fl_lossy,c_fill,g_auto/743ba16e96604f23bbb0af1e00e38fce_9366/NMD_R1_Shoes_Grey_FZ5708_01_standard.jpg" }
  ]

  totalCount = this.products.length;
  totalProductsInStock = this.products.filter( p => p.is_in_inventory === true).length;
  totalProductsOutOfStock = this.products.filter( p => p.is_in_inventory === false).length;

  selectedFilterRadioButton: string = 'all';

  onFilterChanged(event: string) {
    this.selectedFilterRadioButton = event;
  }
}