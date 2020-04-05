import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
{ path: 'home' , component:HomeComponent },
{ path: "login", component: LoginComponent },
{ path: '' , redirectTo:'home' , pathMatch:'full' }, 
{ path: "**", component: PageNotFoundComponent } 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent,LoginComponent,
 								  HeaderComponent,FooterComponent,
 								  PageNotFoundComponent];
