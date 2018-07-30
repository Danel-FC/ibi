import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DataService } from '../data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-yields-chart',
  templateUrl: './yields-chart.component.html',
  styleUrls: ['./yields-chart.component.css']
})
export class YieldsChartComponent implements OnInit {
  chart:any;
  @ViewChild('canvas')canvas:ElementRef;
  constructor(public service:DataService) { }

  ngOnInit() {
    let data = this.service.groupedYields();
    let points = data.Months.map(i=>({
      x:i.DateText,
      y:i.PortfolioValue
    }));

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        datasets: [{  
            data: points,
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
