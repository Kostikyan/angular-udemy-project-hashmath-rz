import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  // @ts-ignore
  currentUserEmail: string;
  // @ts-ignore
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    let user = localStorage.getItem("user")!;
    this.currentUserEmail = JSON.parse(user).email;

    this.isLoggedIn$ = this.auth.isLoggedIn();
  }

  onLogout(){
    this.auth.logout();
  }
}
