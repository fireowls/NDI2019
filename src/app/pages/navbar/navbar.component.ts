import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuth: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isAuth = new Observable<boolean>(subscriber => {
      this.auth.user.subscribe(user => {
        if (user) {
          subscriber.next(true);
        } else {
          subscriber.next(false);
        }
      })
    })
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('home');
  }



}
