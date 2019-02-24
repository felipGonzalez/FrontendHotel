import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { UserModel } from '../model/UserModel';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [UserService]
})
export class UserComponent implements OnInit {

  private users: Array<UserModel>;


  constructor(private userService: UserService,
              private router: Router) {
                sessionStorage.clear();

               }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUser().subscribe(res => {
      this.users = res;
     },
      (error: any)  => this.users = []
    );
  }

  public edit(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/createUserComponent']);
  }

}
