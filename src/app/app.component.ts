import { Component, OnInit } from '@angular/core';
import {UsersService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {

  users = [];

  constructor(private usersService: UsersService) {}

  ngOnInit () {

    this.usersService.getUsers().subscribe(users =>  {

      this.users = users
    })
  }
}

