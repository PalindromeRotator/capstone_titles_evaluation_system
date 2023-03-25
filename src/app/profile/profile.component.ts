import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/tutorial.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  editUser(): void {
    const data = {
      username: 'Kenneth12',
      email: 'ken@gmail.com',
      fullname: 'Kenn Galvez',
    };
    this.registerService.update(0, data).subscribe(response => {
      alert('Successfully Edited data')
    },
      error => {
        alert('error')
        console.log(error)
      })
  }
}
