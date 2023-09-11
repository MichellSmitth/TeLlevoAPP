import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  gotoLoginScreen() {
    this.router.navigate(['/loginscreen']);
}

gotoSignUp() {
  this.router.navigate(['/signup']);
}

  ngOnInit() {
  }

}
