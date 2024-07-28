import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {

  // eChartOptions: EChartsOption = {
  //   title: {
  //     text: 'ECharts Example',
  //     subtext: 'Demo Chart',
  //     left: 'center'
  //   },
  //   tooltip: {},
  //   legend: {
  //     data: ['Sales']
  //   },
  //   xAxis: {
  //     data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  //   },
  //   yAxis: {},
  //   series: [
  //     {
  //       name: 'Sales',
  //       type: 'bar',
  //       data: [5, 20, 36, 10, 10, 20, 40]
  //     }
  //   ]
  // };

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}