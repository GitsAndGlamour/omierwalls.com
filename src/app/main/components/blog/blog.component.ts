import {Component, Input, OnInit, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';

class LocationData {
  stuff: string;
}

class WeatherData {
  stuff: string;
}

class BlogData {
  starred: boolean;
  creationDate: string;
  location: LocationData;
  text: string;
  duration: number;
  timeZone: string;
  uuid: string;
  weather: WeatherData;
}

class BlogType {
  className: string;
  tags: string[];
  constructor(className: string, tags: string[]) {
    this.className = className;
    this.tags = tags;
  }
}

class BlogTag {
  className: string;
  name: string;
  constructor(name: string) {
    this.name = name;
    this.className = this.getClass(name);
  }
  getClass(name: string) {
    const successTags = new BlogType('success', ['pros and cons', 'productivity', 'goals', 'life']);
    const dangerTags = new BlogType('danger', ['kids', 'children', 'fun', 'kiddie kode', 'parenting']);
    const warningTags = new BlogType('warning', ['learning', 'mindless clutter', 'tutorial', 'activities', 'lessons', 'google']);
    const royalTags = new BlogType('royal', ['oop', 'php', 'women', 'xp', 'spring framework', 'pair programming', 'mamp', 'domain', 'mysql',
      'sql', 'oracle', 'domain', 'domain', 'java', 'kanban', 'scrum', 'containerization', 'docker', 'agile',
      'object oriented programming', 'coding', 'fullstack development', 'javascript']);
    const infoTags = new BlogType('info', ['industry', 'resume', 'freelancing', 'jobs', 'job searching', 'networking', 'employment',
      'recruiters', 'interviews', 'personal branding']);
    const secondaryTags = new BlogType('secondary', ['stress', 'conflicts', 'philosophy', 'minorities', 'communication', 'social media',
      'lefties', 'african american']);
    const tagsArray = [successTags, dangerTags, warningTags, royalTags, infoTags, secondaryTags];
    for (const set of tagsArray) {
      for (const tag of set.tags) {
        if (tag === name.toLowerCase()) {
          return set.className;
        }
      }
    }
    return 'secondary';
  }
}

class Blog {
  id: number;
  title: string;
  subtitle: string;
  body: string[];
  tags: BlogTag[];
  photoUrl: string;
  date: string;
  serialize(blog: Object) {
    this.id = blog['uuid'];
    let text = blog['text'];
    const titleEnd = text.indexOf('\n');
    this.title = text.substring(0, titleEnd);
    text = text.substring(titleEnd + 1);
    const subTitleEnd = text.indexOf('\n') > -1 ? text.indexOf('\n') : text.length;
    this.subtitle = text.substring(0, subTitleEnd);
    text = text.substring(subTitleEnd);
    const body = text.split('\n');
    this.body = [];
    body.forEach(paragraph => {
      if (paragraph) {
        this.body.push(paragraph);
      }
    });
    this.tags = [];
    blog['tags'] ? blog['tags'].forEach(tag => {
      this.tags.push(new BlogTag(tag));
    }) : this.tags = [];
    this.date = new Date(blog['creationDate']).toDateString();
  }
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  expandBlog: boolean;
  blogs: Blog[] = [];
  @Input() activePageIndex = 0;
  @Input() minPageIndex  = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBlogs().subscribe(response => {
      response.entries.forEach(dayOneData => {
        const blog = new Blog();
        blog.serialize(dayOneData);
        this.blogs.push(blog);
      });
    });
  }

  getBlogs(): Observable<any> {
    return this.http.get('assets/files/blogs.json');
  }

  onPaginationChange(event) {
    this.minPageIndex = event;
    console.log(this.minPageIndex);
  }
  onActivePageChange(event) {
    this.activePageIndex = event;
    console.log(this.activePageIndex);
  }

}
