import { Component, OnInit } from '@angular/core';
import { myFriends } from 'src/app/interfaces';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
myFriends=myFriends
  constructor() { }

  ngOnInit(): void {
    console.log(myFriends)
  }

}
