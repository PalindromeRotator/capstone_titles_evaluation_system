import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-register-faculty',
  templateUrl: './register-faculty.component.html',
  styleUrls: ['./register-faculty.component.css']
})
export class RegisterFacultyComponent {

  constructor(private router: Router, private registerService: RegisterService) { }
  errorHelper = false;
  messageHelper = '';
  userData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    user: 'faculty'
  };

  ngOnInit(): void {
  }

  registerUser(): void {
    console.log(this.userData)
    if (this.userData.username === '' || this.userData.email === '' || this.userData.password === '') {
      this.messageHelper = 'All fields are required.'
      this.errorHelper = true;
      alert(this.messageHelper)
    }
    else {
      if (this.userData.password.length > 7 && this.userData.password.length < 17) {
        if (this.userData.password === this.userData.confirmPassword) {
          if (this.userData.username.length > 7 && this.userData.username.length < 17) {
            if (this.userData.email.includes('@') && this.userData.email.substring(this.userData.email.length - 4, this.userData.email.length) == '.com' && !this.userData.email.includes('@.com')) {
              const data = {
                username: this.userData.username,
                email: this.userData.email,
                password: this.userData.password,
                user: this.userData.user,
              };
              this.registerService.create(data)
                .subscribe(
                  response => {
                    alert('Success')
                    console.log(response);
                    this.router.navigate(['']);
                  },
                  error => {
                    if (error.error.message.includes('Duplicate entry') && error.error.message.includes('unique_username')) {
                      alert(`Username ${this.userData.username} exist`)
                    }
                    if (error.error.message.includes('Duplicate entry') && error.error.message.includes('unique_email')) {
                      alert(`Email ${this.userData.email} exist`);
                    }
                  });
            } else {
              alert('Invalid email format')
            }

          } else {
            alert('Username is minimum of 8 characters and maximum of 16 characters')
          }

        }
        else {
          this.messageHelper = 'Password and confirm password did not match'
          this.errorHelper = true;
          alert(this.messageHelper)
        }
      }
      else {
        alert('Password should atleast 8-16 characters')
      }
    }
  }



}
