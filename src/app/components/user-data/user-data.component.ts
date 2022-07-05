import { Component, OnInit, Input } from '@angular/core';
import {  UserDataAll } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  @Input() userData:UserDataAll={
    createdAt:'',
    email:'',
    id: 0,
    lastName:'',
    name:'',
    password:'',
    role:'',
    updatedAt:'',

  }

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

}
