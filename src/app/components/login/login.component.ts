import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  public loginForm: FormGroup;

  constructor(private authService:AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/)]),
  
    });
  }
 
  login(){
    console.warn(this.loginForm.value);
    
    this.authService.getLogin(this.loginForm.value).subscribe(
      value=>{
          alert("Login Successfully")
      },
      error=>{
        alert("Login failed")
      }
    )
  }
  
}

