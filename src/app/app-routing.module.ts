import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AuthGuard } from './classes/auth-guard';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { NoAuthGuard } from './classes/noAuth-guard';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FriendsComponent } from './pages/friends/friends.component';

const routes: Routes = [ 
  {path:'', component: AuthLayoutComponent, canActivate:[NoAuthGuard], children: [ 
     { path: 'auth', redirectTo: '/login', pathMatch:'full' },
{path: 'login', component:LoginComponent},
{path:'register', component:RegisterComponent}
]},
{path:'', component:SiteLayoutComponent, canActivate:[AuthGuard], children:[
  { path: '', redirectTo: '/myPage', pathMatch:'full' },
  {path:'myPage', component:MyPageComponent},
  {path: 'users', component: UsersComponent},
  {path: 'changeData', component: ModalWindowComponent},
  {path: 'user/:userId', component: UserPageComponent},
  {path: 'friends', component: FriendsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
