import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';




@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent, 
    UsersComponent,
    LoginComponent,
    AuthLayoutComponent,
    RegisterComponent,
    SiteLayoutComponent,
    MyPageComponent,
    UserDataComponent,
    SideBarComponent,
    FooterComponent,
    ModalWindowComponent,
    UserPageComponent,
    FriendsComponent,
    MyProjectsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
