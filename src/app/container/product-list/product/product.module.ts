import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        ProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        CardModule,
        ButtonModule
    ],
    exports: [
        ProductComponent
    ]
})
export class ProductModule {}