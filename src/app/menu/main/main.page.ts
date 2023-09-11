import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router) { }

  gotoTravel() {
    this.router.navigate(['/travel']);
}


  gotoMain() {
    this.router.navigate(['/main']);
}

  gotoLoginScreen() {
    this.router.navigate(['/loginscreen']);
}

  ngOnInit() {
  }

}
