import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.page.html',
  styleUrls: ['./recoverpass.page.scss'],
})
export class RecoverpassPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
