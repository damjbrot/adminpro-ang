import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-donut',
  templateUrl: './grafico-donut.component.html',
  styles: []
})
export class GraficoDonutComponent implements OnInit {

  // Doughnut
  @Input() infoGrafico: any;
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = 'doughnut';
  leyenda: string;

  constructor() { }

  ngOnInit(): void {

    this.getParametrosGrafico();
  }

  getParametrosGrafico(){
    this.doughnutChartLabels = this.infoGrafico.labels;
    this.doughnutChartData = this.infoGrafico.data;
    this.leyenda = this.infoGrafico.leyenda;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
