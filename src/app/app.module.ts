import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

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
import { ArtworkModalComponent } from './main/components/artwork/artwork-modal/artwork-modal.component';
import {FormsModule} from '@angular/forms';
import { BlogSidebarComponent } from './main/components/blog/blog-sidebar/blog-sidebar.component';
import { BlogPaginationComponent } from './main/components/blog/blog-pagination/blog-pagination.component';
import {HttpClientModule} from '@angular/common/http';
import { BlogDisplaySizeComponent } from './main/components/blog/blog-display-size/blog-display-size.component';

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
    ArtworkModalComponent,
    BlogSidebarComponent,
    BlogPaginationComponent,
    BlogDisplaySizeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
