import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() public experience: Experience;
  constructor() { }

  ngOnInit() {
  }

}

export class Experience {
  title: string;
  start: number;
  end: number;
  company: string;
  location: string;
  description: string;
  points: string[];
  isPresent: boolean;
  constructor(title: string, start: number, end: number, company: string, location: string,
              description: string, points: string[], isPresent: boolean) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.company = company;
    this.location = location;
    this.description = description;
    this.points = points;
    this.isPresent = isPresent;
  }
}
