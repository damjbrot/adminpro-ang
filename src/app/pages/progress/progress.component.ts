import { Component, OnInit, Input } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcBarra1: number = 50;
  porcBarra2: number = 25;

  constructor() { }

  ngOnInit(): void {
  }
}
