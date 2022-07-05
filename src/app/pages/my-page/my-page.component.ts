import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { UserDataAll } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css'],
})
export class MyPageComponent implements OnInit {
  data: UserDataAll = {
    createdAt: '',
    email: '',
    id: 0,
    lastName: '',
    name: '',
    password: '',
    role: '',
    updatedAt: '',
  };
  userr!: any;
  constructor(
    private auth: AuthService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.auth.fetchUser(this.auth.getId()).subscribe((value: any) => {
      this.data=value
      this.cdr.detectChanges();
    });
  }
}

