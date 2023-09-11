import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./pages/loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'recoverpass',
    loadChildren: () => import('./pages/recoverpass/recoverpass.module').then( m => m.RecoverpassPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./menu/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'travel',
    loadChildren: () => import('./menu/travel/travel.module').then( m => m.TravelPageModule)
  },
  {
    path: 'transportrequest',
    loadChildren: () => import('./menu/transportrequest/transportrequest.module').then( m => m.TransportrequestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
