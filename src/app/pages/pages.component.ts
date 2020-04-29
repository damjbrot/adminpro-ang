import { Component, OnInit } from '@angular/core';

// Initialization of plugins from custom.js
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
