import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        MatToolbar,
        MatIcon
    ],
    exports: [
        MainMenuComponent
    ]
})
export class MainMenuModule {}