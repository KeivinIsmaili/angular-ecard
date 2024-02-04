import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopHeaderComponent } from './top-header.component';

@NgModule({
    declarations: [
        TopHeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    providers: [],
    exports: [
        TopHeaderComponent
    ]
})
export class TopHeaderModule {}