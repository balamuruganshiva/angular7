import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeContentComponent} from './home-content/home-content.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {BindingComponent}  from './binding/binding.component';
import {LoopingComponent} from './looping/looping.component';
import {SharingComponent} from './sharing/sharing.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'binding', component:BindingComponent},
  {path:'looping', component:LoopingComponent},
  {path:'sharing', component:SharingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
