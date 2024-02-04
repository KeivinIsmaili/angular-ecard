import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { MainMenuModule } from './main-menu/main-menu.module';
import { TopMenuModule } from './top-menu/top-menu.module';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        MainMenuModule,
        TopMenuModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {}