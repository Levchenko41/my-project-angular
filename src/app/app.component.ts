import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private auth:AuthService, private route:Router  ){

  }
  title = 'test-angular';
 


  ngOnInit(){
    const potentialToken=localStorage.getItem('auth-token')
    if(potentialToken !==null){
      this.auth.getId()
      this.auth.setToken(potentialToken)
      this.auth.fetchUser(this.auth.getId())
      this.auth.getUserData()
      this.route.navigate(['myPage'])
    }

  }
}
