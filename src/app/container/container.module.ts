import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../container/container.component';
import { FeaturedBrandsModule } from './featured-brands/featured-brands.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductListModule } from './product-list/product-list.module';
import { SearchModule } from './search/search.module';

@NgModule({
    declarations: [
        ContainerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        FeaturedBrandsModule,
        ProductDetailModule,
        ProductListModule,
        SearchModule
    ],
    exports: [
        ContainerComponent
    ]
})
export class ContainerModule { }