import { Component, OnInit } from '@angular/core';

class CanvasChart {
  data: Array<any>;
  options: any;
  colors: Array<any>;
  type: string;
  labels: Array<any>;
  constructor () {
    this.data = [];
    this.options = null;
    this.colors = [];
    this.type = null;
    this.labels = [];
  }
}

class Skill {
  name: string;
  description: string;
  percentage: number;
  chart: CanvasChart;
  constructor(name: string, description: string, percentage: number, chart: CanvasChart) {
    this.name = name;
    this.description = description;
    this.percentage = percentage;
    this.chart = chart;
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  chart: CanvasChart = new CanvasChart();
  public doughnutChartLabels: string[] = ['Angular', 'Java', 'HTML/CSS'];
  public doughnutChartData: number[] = [350, 100, 450];
  public doughnutChartType = 'doughnut';
  constructor() {
    this.chart.data = this.doughnutChartData;
    this.chart.type = this.doughnutChartType;
    this.chart.labels = this.doughnutChartLabels;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnInit() {
    this.addSkills();
  }
  addSkills() {
    this.skills.push(new Skill('JavaScript', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis ' +
      'ex sed aliquam posuere. Quisque sollicitudin odio sit amet purus ornare, quis vehicula massa lacinia.', 95, new CanvasChart()));
    this.skills.push(new Skill('Angular', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis ex' +
      ' sed aliquam posuere. Quisque sollicitudin odio sit amet purus ornare, quis vehicula massa lacinia.', 90, new CanvasChart()));
    this.skills.push(new Skill('Java', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mollis ' +
      'ex sed aliquam posuere. Quisque sollicitudin odio sit amet purus ornare, quis vehicula massa lacinia.', 80, new CanvasChart()));
    for (const skill of this.skills) {
      skill.chart.type = this.doughnutChartType;
      skill.chart.labels = this.doughnutChartLabels;
      skill.chart.data = this.doughnutChartData;
    }
  }
}
