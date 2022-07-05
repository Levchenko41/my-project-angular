import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoAuthGuard } from 'src/app/classes/noAuth-guard';
import { AuthGuard } from 'src/app/classes/auth-guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  aSub!: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
      } else if (params['accessDenied']) {
      }
    });
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  onSubmit() {
    this.aSub = this.auth.login(this.form.value).subscribe(
      (value) => {
        console.log('login success', value);
        this.router.navigate(['/myPage']);
      },
      (error) => {
        console.warn(error);
      }
    );
  }
}
