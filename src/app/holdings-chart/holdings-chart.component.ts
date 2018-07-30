import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-holdings-chart',
  templateUrl: './holdings-chart.component.html',
  styleUrls: ['./holdings-chart.component.css']
})
export class HoldingsChartComponent implements OnInit {
  chart:any;
  @ViewChild('canvas')canvas:ElementRef;
  constructor(public service:DataService) { }

  ngOnInit() {
    let data = this.service.groupedHoldings();
    let names = data.Categories.map(i=>i.Name);
    let values = data.Categories.map(i=>i.PercentOfPortfolio);

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'pie',
      data: {
        labels: names,
        datasets: [{  
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],    
        }],
        
      }
    });
  }

}
