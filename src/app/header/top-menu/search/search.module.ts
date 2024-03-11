import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        SearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ButtonModule
    ],
    exports: [
        SearchComponent
    ]
})
export class SearchModule {}