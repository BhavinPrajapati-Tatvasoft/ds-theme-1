import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Aos from 'aos';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private title: Title) {
    this.title.setTitle('Dashboard');
  }

  // AOS Initialization
  ngOnInit(): void {
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });

    // Device Chart
    new Chart('learningCurveChart', {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            data: [12, 32, 60, 19, 5, 35, 70, 28, 10, 50, 22, 32],
            backgroundColor: 'rgba(68, 152, 152, 0.6)',
            borderWidth: 0,
            borderRadius: {
              topRight: 5,
              topLeft: 5,
            },
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            ticks: {
              color: '#AAABA6',
              font: {
                size: 13,
                lineHeight: '16px',
              },
              padding: 6,
            },
            grid: {
              drawTicks: false,
              display: false,
            },
            border: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: '#AAABA6',
              font: {
                size: 13,
                lineHeight: '16px',
              },
              padding: 6,
              stepSize: 10,
            },
            grid: {
              drawTicks: false,
              color: '#F0F0F0',
            },
            border: {
              display: false,
            },
          },
        },
        animation: {
          duration: 2000,
          easing: 'easeOutSine',
        },
      },
    });
  }
}
