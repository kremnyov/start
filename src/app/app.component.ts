import { Component, OnInit } from '@angular/core';
import {UsersService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent  {

  users = [];

  constructor(private usersServive: UsersService) {}

  ngOnInit () {
    //this.users = this.usersServive.users
    this.usersServive.gerUsers().subscribe(users => {
      this.users = users

    })
  }


}

