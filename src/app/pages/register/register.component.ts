import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  formRegistr!: FormGroup;
  aSub!:Subscription;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.formRegistr = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      role: new FormControl('USER'),
    });
  }
  ngOnDestroy(): void {
    if(this.aSub){
      this.aSub.unsubscribe()
    }
  }
 
  onSubmit() {
   
    this.formRegistr.disable();
    this.aSub=this.auth.register(this.formRegistr.value).subscribe(
      () => {
        console.log('zare')
        this.router.navigate(['/myPage'])
       
      },
      (error) => {
        console.warn(error);
        this.formRegistr.enable();
      }
    );
  }
}
