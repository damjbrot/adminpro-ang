import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Initialization of plugins from custom.js
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    init_plugins();
  }

  login() {
    this.router.navigateByUrl('/dashboard');
  }
}
