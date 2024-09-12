import { compileNgModule, Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  public loginForm: FormGroup;

  constructor(private authService:AuthService, private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/)]),
  
    });
  }
 
  login(){
    console.warn(this.loginForm.value);
    
    this.authService.getLogin(this.loginForm.value).subscribe(
      value=>{
          sessionStorage.setItem('token',value.token);
          alert("Login Success");
          this.router.navigateByUrl("/dashboard");
      },
      error=>{
        alert("Login failed")
      }
    )
  }
  
}

