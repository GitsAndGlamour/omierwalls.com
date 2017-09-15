import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { AccountModalComponent } from './account-modal/account-modal.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguratorComponent,
    AccountModalComponent,
    HeaderComponent,
    NavigationComponent,
    HomeHeroComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
