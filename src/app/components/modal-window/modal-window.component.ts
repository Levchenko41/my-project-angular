import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataAll } from 'src/app/interfaces';


@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css'],
})
export class ModalWindowComponent implements OnInit {
  formEdit!: FormGroup;
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

  constructor(private auth: AuthService, private route: Router,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.formEdit = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
    this.auth.fetchUser(this.auth.getId()).subscribe((value: any) => {
      this.data=value
      this.cdr.detectChanges();
    });
  }
  onSubmit() {
    this.auth.changeUser(
      this.auth.getId(),
      this.formEdit.value.name,
      this.formEdit.value.lastName,
      this.formEdit.value.email,
      'USER'
    ).subscribe((value:any)=>{
       this.route.navigate(['/myPage']);
    })

   
  }
}
