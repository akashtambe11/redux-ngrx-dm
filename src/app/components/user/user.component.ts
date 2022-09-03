import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    // this.userservice.getUsers().subscribe(res => {
    //   console.log('====================================');
    //   console.log(res);
    //   console.log('====================================');
    // })
 
  }
}
