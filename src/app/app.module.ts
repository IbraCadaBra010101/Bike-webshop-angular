import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AboutComponent} from './vision/about/about.component';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {ContactComponent} from './contact/contact.component';
import {StoryComponent} from './vision/story/story.component';
import {VisionComponent} from './vision/vision.component';
import {StridaEvoComponent} from './strida-evo/strida-evo.component';
import {StridaLTComponent} from './strida-lt/strida-lt.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {TheGoodComponent} from './the-good/the-good.component';
import {TheSpecsComponent} from './the-specs/the-specs.component';
import {TheUpdatesComponent} from './the-updates/the-updates.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    StoryComponent,
    VisionComponent,
    StridaEvoComponent,
    StridaLTComponent,
    AccessoriesComponent,
    TheGoodComponent,
    TheSpecsComponent,
    TheUpdatesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
