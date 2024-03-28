import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';

@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        SidebarModule,
        ButtonModule,
        TabMenuModule
    ],
    exports: [
        MainMenuComponent
    ]
})
export class MainMenuModule {}