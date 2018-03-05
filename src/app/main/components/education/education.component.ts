import { Component, OnInit } from '@angular/core';

class School {
  name: string;
  major: string;
  start: number;
  end: number;
  description: string;
  constructor(name: string, major: string, start: number, end: number, description: string) {
    this.name = name;
    this.major = major;
    this.start = start;
    this.end = end;
    this.description = description;
  }
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  schools: School[] = [];
  constructor() { }

  ngOnInit() {
    this.addSchools();
  }
  addSchools() {
    this.schools.push(new School('University of Wisconsin - Milwaukee', 'Information Science and Technology', 2014, 2016,
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
      'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
      'nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ' +
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'));
    this.schools.push(new School('Milwaukee Area Technical College', 'Information Science', 2011, 2013,
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
      'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
      'nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ' +
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'));
    this.schools.push(new School('Middle Georgia College', 'Computer Science', 2008, 2010,
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
      'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
      'nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ' +
      'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'));
    // this.schools.push(new School('South Cobb High School', 'H.S. Diploma', null, 2008,
    //   'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum ' +
    //   'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies ' +
    //   'nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ' +
    //   'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.'));
  }

}
