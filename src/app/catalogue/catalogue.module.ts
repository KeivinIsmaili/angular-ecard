import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './catalogue.component';
import { TopHeaderModule } from '../top-header/top-header.module';
import { HeaderModule } from '../header/header.module';
import { ContainerModule } from '../container/container.module';

@NgModule({
    declarations: [
        CatalogueComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        ContainerModule,
        HeaderModule,
        TopHeaderModule
    ],
    providers: [],
    exports: [
        CatalogueComponent
    ]
})
export class CatalogueModule { }