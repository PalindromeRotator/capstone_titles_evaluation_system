import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private router: Router, private RegisterService: RegisterService) { }
  backToLogin() {
    this.router.navigate(['']);
  }
  goToRegisterFaculty() {
    this.router.navigate(['/register/faculty'])
  }
  // userData = {
  //   username: '',
  //   email: '',
  //   password: '',
  // };

  // ngOnInit(): void {
  // }

  // registerUser(): void {
  //   const data = {
  //     username: this.userData.username,
  //     email: this.userData.email,
  //     password: this.userData.password
  //   };

  //   this.RegisterService.create(data)
  //     .subscribe(
  //       response => {
  //         alert('')
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}
