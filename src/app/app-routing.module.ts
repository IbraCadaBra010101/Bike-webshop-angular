import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavComponent} from './nav/nav.component';
import {ContactComponent} from './contact/contact.component';
import {StridaEvoComponent} from './strida-evo/strida-evo.component';
import {StridaLTComponent} from './strida-lt/strida-lt.component';
import {AccessoriesComponent} from './accessories/accessories.component';
import {AboutComponent} from './vision/about/about.component';
import {VisionComponent} from './vision/vision.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'about', component: AboutComponent},
  {path: 'stridaLT', component: StridaLTComponent},
  {path: 'stridaEVO', component: StridaEvoComponent},
  {path: 'accessories', component: AccessoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
