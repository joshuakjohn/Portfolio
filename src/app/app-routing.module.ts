import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { IntroComponent } from './components/intro/intro.component';
import { CareerComponent } from './components/career/career.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [ 
      {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full'
      },   
      {
      path:"home",
      component: IntroComponent
    },
      {
      path: "contact",
      component: ContactComponent
    },
    {
      path: "career",
      component: CareerComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
