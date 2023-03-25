import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    username: '',
    email: '',
    password: '',
  };
  constructor(private router: Router, private registerService: RegisterService) { }
  ngOnInit(): void {
  }

  loginUser(): void {
    const data = {
      username: this.userData.username,
      email: this.userData.email,
      password: this.userData.password,
    };
    this.registerService.loginUser(data)
      .subscribe(
        response => {
          alert('Success')
          console.log(response);
          // this.router.navigate(['']);
        },
        error => {
          console.log(error)
        });
  }

}
