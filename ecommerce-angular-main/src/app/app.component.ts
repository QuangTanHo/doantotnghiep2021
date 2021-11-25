// import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
// import { UserService } from './service/user.service';
// import { Category, User } from './modal/Modal';
// import { CategoryService } from './service/category.service';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // user: User = {} as User;
  // categories: Category[];

  constructor(public dialog: MatDialog ) {
   
  }
  ngOnInit(): void {
    
  }

  login() {
    this.dialog.open(LoginComponent);
  }
  
}
