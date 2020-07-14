import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  title = 'dashboard';
  chart: any;
  pie: any;
  doughnut: any;
  line: any;
  horizontalbar: any;
  radar: any;


  constructor() { }

  ngOnInit(): void {

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Bar Chart'
        },
      },
      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {
            type: 'bar',
            label: 'My First dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543],
            backgroundColor: 'rgba(255,0,255,0.4)',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },
          {
            type: 'bar',
            label: 'My Second dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          }
        ]
      }
    });

    this.pie = new Chart('pie',{
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Pie Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15].reverse(),
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['Red','Orange','Yellow','Green','Blue']
			}
    });

    this.doughnut =  new Chart('doughnut',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Doughnut Chart'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [45,10,5,25,15],
					backgroundColor: ["red","orange","yellow","green","blue"],
					label: 'Dataset 1'
				}],
				labels: ['Red','Orange','Yellow','Green','Blue']
			}
    });

    this.line = new Chart('line',{
     type: 'line',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'line Chart'
        },
      },
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
              label: "My First dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              backgroundColor:'rgba(105, 0, 132, .2)',
              borderColor:'rgba(200, 99, 132, .7)',
              borderWidth: 2
          },
          {
              label: "My Second dataset",
              data: [28, 48, 40, 19, 86, 27, 90],
              backgroundColor:'rgba(0, 137, 132, .2)',
              borderColor:'rgba(0, 10, 130, .7)',
              borderWidth: 2
          }
        ]
      },
    });

    this.radar = new Chart('radar',{
      type: 'radar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Radar Chart'
        },
      },
      data: {
          labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
          datasets: [
            {
                label: "My First dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                backgroundColor:'rgba(105, 0, 132, .2)',
                borderColor:'rgba(200, 99, 132, .7)',
                borderWidth: 2
            },
            {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
                backgroundColor:'rgba(0, 250, 220, .2)',
                borderColor:'rgba(0, 213, 132, .7)',
                borderWidth: 2
            }
          ]
      },
    });
    
    this.horizontalbar = new Chart('horizontalbar',{
    type: "horizontalBar",
    options: {
      responsive: true,
      scales: {
        xAxes: [{
        ticks: {
        beginAtZero: true
        }
        }]
        },
      title: {
        display: true,
        text: 'HorizontalBar Chart'
      },
    },
    data: {
      labels: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey"],
      datasets: [
        {
            label: "My First Dataset",
            data: [22, 33, 55, 12, 86, 23, 14],
            fill: false,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)", 
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)", 
              "rgba(75, 192, 192, 0.2)", 
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)"
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)", 
              "rgb(54, 162, 235)", 
              "rgb(153, 102, 255)", 
              "rgb(201, 203, 207)"
            ],
            borderWidth: 1
        }
      ]}
    });
   
  }
}
