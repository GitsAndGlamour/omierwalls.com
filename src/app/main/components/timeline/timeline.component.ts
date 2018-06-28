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
      'Developed front-end for investment analytics with bootstrap Angular 2+ w/ Type-\n' +
      'Script, JavaScript, HTML, and CSS.\n' +
      '• Designed UI solutions that allowed our team to deliver 40% more features in the same amount of time given than what our previous designs would allow by making a prototype with Angular 2+ and Angular Material.\n' +
      '• Hosted a company-wide learning session on Angular CLI.\n' +
      '• Optimized and refactored stylesheets with SASS which drastically cut down on the time spent translating mockups from the prototyping phase.\n' +
      '• Solved complex solutions for our back-end REST service using Spring Boot, Maven, and SQL Server on a Tomcat server.\n' +
      '• Wrote complex SQL queries to fix database issues that halted all development.\n' +
      '• Enhanced several features of the mainframe application, utilizing GWT (Google Web Toolkit).', ['JavaScript', 'Typescript',
        'SQL Server', 'Java', 'Angular', 'AngularJS', 'jQuery', 'Spring', 'Git', 'HTML/CSS', 'Bootstrap', 'Thymeleaf',
        'GWT', 'Maven'], true));
    this.experiences.push(new Experience('Software Engineer', 2016, 2017, 'The Home Depot', 'Atlanta, GA', 'Spearheaded design, development, and management of front-end products for supply chain business analysts using a wide-range of technologies (jQuery, Boot- strap, Angular Material, HTML, CSS, AngularJS, Gulp, and NodeJS).\n' +
      '• Caught and fixed existing errors in the Java batch logic that affected all shipments and costed the corporation over $10 million per day.\n' +
      '• As a stand-in for the lead developer during extended leave of absences, ensured that the velocity of code production never went down.\n' +
      '• Automated dependency management, npm, Bower, and Gradle for several ap- plications reducing time and complexity when adding and updating dependencies for each.\n' +
      '• Cleaned up, prioritized, and oversaw the entire backlog on Pivotal Tracker which contained user stories I wrote that were pertaining to 6 major applications.\n' +
      '• Trained existing and new hires on technologies and simplified the complex data model and shipping scenarios with diagrams and illustrations I created.\n' +
      '• Elected to be in a team coding competition held at Home Depot which built a cus- tom tool designed to reduce checkout time by minutes.\n' +
      '• Optimized deployments by moving from Tomcat Grid to cloud deployments and customized environment settings from within Jenkins.\n' +
      '• Held training sessions for end users to learn how to write and organize user stories.\n' +
      '• Advocated TDD in Java to ensure 75% code coverage and proper exception han- dling.',
      ['Java', 'Oracle SQL', 'JavaScript', 'AngularJS', 'Spring', 'Microservices', 'Git', 'HTML/CSS', 'Material Design',
        'Gradle', 'Bower', 'Gulp', 'Maven', 'Ivy'], false));
    this.experiences.push(new Experience('Fullstack Jr Developer', 2015, 2015, 'LAMP Camp', 'Peachtree Corners, GA',
      'Developed UI for e-commerce backend-processing web application using Boot-\n' +
      'strap, jQuery, JavaScript, PHP, MySQL, HTML and CSS.\n' +
      '• Planned and prioritized sprints in JIRA while delegating the workload amongst co- workers.\n' +
      '• Created and enhanced existing user stories in JIRA.', ['PHP', 'MySQL', 'JavaScript', 'HTML', 'Bootstrap CSS', 'jQuery', 'Git'], false));
  }
}
