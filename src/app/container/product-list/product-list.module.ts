import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from './filter/filter.module';
import { ProductListComponent } from './product-list.component';
import { ProductModule } from './product/product.module';

@NgModule({
    declarations: [
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        FilterModule,
        ProductModule
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductListModule {}