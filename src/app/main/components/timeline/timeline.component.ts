import { Component, OnInit } from '@angular/core';
import {Experience} from './experience/experience.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  experiences: Experience[] = [];
  constructor() { }

  ngOnInit() {
    this.addExperiences();
  }

  addExperiences() {
    this.experiences.push(new Experience('Software Engineer', 2017, 2018, 'Hanlon Financial Group', 'Marietta, GA',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
      'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
      'nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ' +
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.', ['Lorem ipsum dolor sit amet', 'Maecenas ' +
      'tempus tellus eget', 'Donec pede justo ante'], true));
    this.experiences.push(new Experience('Software Engineer', 2016, 2017, 'The Home Depot', 'Atlanta, GA', 'Lorem ipsum ' +
      'dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
      'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
      'nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ' +
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.', ['Lorem ipsum dolor sit amet', 'Maecenas ' +
    'tempus tellus eget', 'Donec pede justo ante'], false));
    this.experiences.push(new Experience('Fullstack Junior Developer', 2015, 2015, 'LAMP Camp', 'Peachtree Corners, GA',
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
      'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
      'nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ' +
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.', ['Lorem ipsum dolor sit amet', 'Maecenas ' +
      'tempus tellus eget', 'Donec pede justo ante'], false));
  }
}
