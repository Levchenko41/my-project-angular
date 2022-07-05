import { Component, OnInit } from '@angular/core';
import { myFriends } from 'src/app/interfaces';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
myFriends=myFriends
pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor() { }

  ngOnInit(): void {
    console.log(myFriends)
  }

}
