import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu.component';

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        MainMenuComponent
    ]
})
export class MainMenuModule {}