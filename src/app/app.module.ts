import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsArticleComponent } from './footer/news-article/news-article.component';
import { SubscribeComponent } from './footer/subscribe/subscribe.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/components/home/home.component';
import { TimelineComponent } from './main/components/timeline/timeline.component';
import { EducationComponent } from './main/components/education/education.component';
import { SkillsComponent } from './main/components/skills/skills.component';
import { PorfolioComponent } from './main/components/porfolio/porfolio.component';
import { ArtworkComponent } from './main/components/artwork/artwork.component';
import { InformationComponent } from './main/components/information/information.component';
import { ExperienceComponent } from './main/components/timeline/experience/experience.component';
import { BlogComponent } from './main/components/blog/blog.component';
import {ChartsModule} from 'ng2-charts';
import { ArtworkModalComponent } from './main/components/artwork/artwork-modal/artwork-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguratorComponent,
    NavigationComponent,
    FooterComponent,
    SidebarComponent,
    NewsArticleComponent,
    SubscribeComponent,
    MainComponent,
    HomeComponent,
    TimelineComponent,
    EducationComponent,
    SkillsComponent,
    PorfolioComponent,
    ArtworkComponent,
    InformationComponent,
    ExperienceComponent,
    BlogComponent,
    ArtworkModalComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
