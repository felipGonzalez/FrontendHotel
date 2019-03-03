import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material';


import { UserService } from './user.service';
import { UserModel } from '../model/UserModel';


export interface Gender {
  nameGender: string;
  domainGender: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  private users: Array<UserModel>;
  private dataSource;
  private domainsList: string[] = ['M', 'F', 'I','N'];


  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'document', 'phone', 'email', 'city', 'action'];


  constructor(private userService: UserService, private router: Router) {
    sessionStorage.clear();
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.loadUsers();

  }

  private loadUsers(): void {
    this.userService.getUser().subscribe(
      res => {
        this.users = res;
      },
      (error: any) => (this.users = [])
    );
  }

  public edit(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/createUserComponent']);
  }

   applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get userList() { return this.users; }
  get genderDomain() {return this.domainsList; }
}
