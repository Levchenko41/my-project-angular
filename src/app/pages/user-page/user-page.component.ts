import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
data:any;


  constructor(private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('userId'));

  this.auth.fetchUser(productIdFromRoute).subscribe((value: any) => {
    this.data=value

  });

  }

}
