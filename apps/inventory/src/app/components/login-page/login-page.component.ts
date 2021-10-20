import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'inventory-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  error!: boolean;

  loading!: boolean;

  errorMessage = 'Try again Spy Person';

  constructor(private authservice: AuthenticationService) {}

  ngOnInit(): void {
    this.loading = false;
    this.error = false;
  }

  async submit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.error = false;
      const notAnImposter = await this.authservice.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      );
      if (!notAnImposter) {
        this.loading = false;
        this.error = true;
      } else {
        this.loading = false;
        this.error = false;
        alert('works');
      }
    } else {
      this.error = true;
    }
  }
}
