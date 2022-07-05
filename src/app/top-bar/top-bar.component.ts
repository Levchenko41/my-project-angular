import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.auth.isAuthenticated())
    console.log(typeof this.auth.isAuthenticated())
  }
  signOut() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  isAuth(){
    return this.auth.isAuthenticated()
  }
}
