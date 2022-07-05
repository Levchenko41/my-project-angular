import { Component, OnInit } from '@angular/core';
import { MyPageComponent } from 'src/app/pages/my-page/my-page.component';




@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  
// public componentOne: MyPageComponent
  constructor() { }

  ngOnInit(): void {
  }
// onSubmit(){
  
//   this.componentOne.setActiveModal()
// }
}
