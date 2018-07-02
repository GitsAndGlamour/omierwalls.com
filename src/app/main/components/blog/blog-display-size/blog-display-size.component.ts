import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-blog-display-size',
  templateUrl: './blog-display-size.component.html',
  styleUrls: ['./blog-display-size.component.css']
})
export class BlogDisplaySizeComponent implements OnInit, OnChanges {
  @Input() total;
  @Input() activePageIndex;
  activePage = 0;
  min = this.activePage + 1;
  max = this.activePage + 5;
  constructor() { }

  ngOnInit() {
    this.calculateMinAndMax();
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.activePageIndex);
    this.activePage = changes.activePageIndex.currentValue;
    this.calculateMinAndMax();
  }
  calculateMinAndMax() {
    console.log(this.activePage);
    this.min = this.activePage + 1;
    this.max = this.min + 5 > this.total ? this.total : this.min + 5;
    console.log(this.min, this.max);
  }
}
