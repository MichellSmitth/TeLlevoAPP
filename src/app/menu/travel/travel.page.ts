import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.page.html',
  styleUrls: ['./travel.page.scss'],
})
export class TravelPage implements OnInit {

  constructor(private router: Router) { }

  gotoTransportRequest() {
    this.router.navigate(['/TransportRequest']);
}

  gotoTravel() {
    this.router.navigate(['/travel']);
}


  gotoMain() {
    this.router.navigate(['/main']);
}

  ngOnInit() {
  }

}
