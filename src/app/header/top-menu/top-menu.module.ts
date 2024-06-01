import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopMenuComponent } from './top-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        TopMenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        TopMenuComponent
    ]
})
export class TopMenuModule {}