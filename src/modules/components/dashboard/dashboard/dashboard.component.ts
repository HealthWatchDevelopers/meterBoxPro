import * as echarts from 'echarts';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  chartInstance: echarts.ECharts | null = null;
  option: echarts.EChartsOption | undefined;


  ngOnInit(): void {
    this.attendanceChart();
    this.productionChart();

    this.qualityChart();
  }


  //#region Attendance Chart
  attendanceChart() {
    // Your code for attendance chart goes here

    // type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('attendanceChart')!;
    var myChart = echarts.init(chartDom);
    // var option: EChartsOption;

    this.option = {

      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
        align:'left',
        itemWidth: 8,
        itemHeight: 25.5,

      },
      

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 66.7, name: 'Workdays' },
            { value: 3.3, name: 'Holidays' },
            { value: 10, name: 'Paid leave' },
            { value: 6.7, name: 'Lop' },
            { value: 13.3, name: 'Weekly offs' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    this.option && myChart.setOption(this.option);
  }
  //#endregion



  //#region  Quality Chart
  qualityChart() {


    // type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('qualityChart')!;
    var myChart = echarts.init(chartDom);
    // var option: EChartsOption;

    this.option = {
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.25, '#082467'],
                [0.50, '#005DA4'],
                [0.75, '#318BE6'],
                [1, '#87CEFA'],
              ]
            }
          },
          pointer: {
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: 'inherit',
            distance: -40,
            fontSize: 20
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}%',
            color: 'inherit'
          },
          data: [
            {
              value: 70
            }
          ]
        }
      ]
    };

    setInterval(function () {
      myChart.setOption<echarts.EChartsOption>({
        series: [
          {
            data: [
              {
                value: +(Math.random() * 100).toFixed(2)
              }
            ]
          }
        ]
      });
    }, 2000);

    this.option && myChart.setOption(this.option);

  }
  //#endregion


  //#region Production
  productionChart() {
    // type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('productionChart')!;
    var myChart = echarts.init(chartDom);
    // var option: EChartsOption;
    
    this.option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      
      toolbox: {
        feature: {
          magicType: { show: true, type: ['line', 'bar'] },
        }
      },
      legend: {
        data: ['Achieved', 'Allocated'],
           orient: 'vertical',
            left: 'right', 
            top: "5%",
            align: "left"
            
      },
      xAxis: [
        {
          type: 'category',
          name:'Month',
          data: ['Mar 24', 'Apr 24', 'May 24', 'Jun 24', 'July 24'],
          axisPointer: {
            type: 'shadow'
          },
          nameLocation:'middle',
          nameTextStyle:{
            lineHeight:50
          }
    
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Percentage  of target achieved',    
          nameLocation: "middle",  
          nameTextStyle: {
          verticalAlign: "bottom",
          lineHeight: 50
        },
         
          min: 0,
          max: 240,
          interval: 40,
          axisLabel: {
            formatter: '{value}',
            
          }
        }
      ],
      series: [
        {
          name: 'Achieved',
          type: 'bar',
          color:'#318CE7',
          tooltip: {
            valueFormatter: function (value) {
              return value as string;
            }
          },
          data: [
            160.0, 200.9, 130.0, 123.2, 185.6
          ]
        },
        {
          name: 'Allocated',
          type: 'bar',
          color:'#87CEFA',
          tooltip: {
            valueFormatter: function (value) {
              return value as string;
            }
          },
          data: [
            170.6, 190.9, 220.0, 126.4, 138.7
          ]
        }    
      ]
    };
    
    
    this.option && myChart.setOption(this.option);

  }
  //#endregion
  ngOnDestroy(): void { }
}