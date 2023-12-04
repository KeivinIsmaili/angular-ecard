import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    TopHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }