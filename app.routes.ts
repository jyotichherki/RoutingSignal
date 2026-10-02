import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { AboutComp } from './about-comp/about-comp';
import { ContactComp } from './contact-comp/contact-comp';
import { Dasboard } from './dasboard/dasboard';
import { Profile } from './dasboard/profile/profile';
import { Setting } from './dasboard/setting/setting';
import { Home } from './home/home';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { PageNotFound } from './page-not-found/page-not-found';
import { Dasboard1 } from './dasboard1/dasboard1';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Login1 } from './login1/login1';
import { Profile1 } from './profile1/profile1';
import { canDeactivateGuard } from './can-deactivate-guard';
import { Product } from './product/product';
import { Products } from './products/products';
import { LoginComp } from './login-comp/login-comp';
import { DasboardComp } from './dasboard-comp/dasboard-comp';
import { ProductdComp } from './productd-comp/productd-comp';
import { ProductdComp11 } from './productd-comp11/productd-comp11';

export const routes: Routes = [
    // { path: '', component:HomeComp},
    // { path: 'about', component:AboutComp},
  //   // { path: 'contact', component:ContactComp}
  //  {
  //   path: 'dasboard', 
  //   component:Dasboard,
  //   children: [
  //     {path: 'profile', component:Profile},
  //     {path: '', component:Setting}
  //   ]
  //  },
  //  {path:'', redirectTo:'', pathMatch:'full'}
  // {path: 'home', component: Home},
  // {
  //   path: 'admin',
  //   loadComponent: ()=> import ('./admin/admin').then(m => m.Admin)
//   // },


//  { path: '',component: HomeComponent},
//  { path: '', component: AboutComponent},
//  { path: '', component:ContactComponent},
//  //wildcard route for a 404 page can be added here 
//  {path: '**',component:PageNotFound}


// {path:'login',component: Login1},
// {
//   path:'dasboard1',
//   component: Dasboard1,
//   canActivate: [authGuard]
// },
// {
//   path: 'profile1',
//   component:Profile1,
//   canDeactivate:[canDeactivateGuard]
// },
// {path: '', redirectTo: 'login', pathMatch:'full'}


// { path:'product/:id',component:Product},
// { path:'products',component:Products}


// { path:'logincomp',component:LoginComp},
// { path:'dasboardcomp',component:DasboardComp},
// { path:'productcomp/:id',component:ProductdComp},
// {path: '', redirectTo:'logincomp', pathMatch:'full'}

{ path:'productcomp11', component:ProductdComp11}


];
