import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeaturedBrandsComponent } from './featured-brands.component';

@NgModule({
    declarations: [
        FeaturedBrandsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        FeaturedBrandsComponent
    ]
})
export class FeaturedBrandsModule {}