import {
  ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-blog-pagination',
  templateUrl: './blog-pagination.component.html',
  styleUrls: ['./blog-pagination.component.css']
})
export class BlogPaginationComponent implements OnInit {
  @Output() activePageIndex: EventEmitter<number> = new EventEmitter();
  @Output() minPageIndex: EventEmitter<number> = new EventEmitter();
  @Input() total: number;
  totalQuotient: number;
  totalPages: number;
  activePage = 1;
  minPage = 1;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.activePageIndex.emit(this.activePage);
    this.activePageIndex.emit((this.minPage - 1) * 5);
    this.totalQuotient = Math.floor(this.total / 5);
    this.totalPages = this.totalQuotient + 1;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.cdr.detectChanges();
  }

  changeActivePage(increment: number) {
    this.activePage = this.minPage + increment;
    this.activePageIndex.emit((this.activePage - 1) * 5);
  }

  changePageSet(isAdd?: boolean) {
    if (isAdd) {
      if (this.minPage + 4 >= this.totalPages - 4) {
        this.minPage = this.totalPages - 4;
      } else {
        this.minPage += 4;
      }
    } else {
      if (this.minPage - 4 < 1) {
        this.minPage = 1;
      } else {
        this.minPage -= 4;
      }
    }
    this.activePageIndex.emit((this.activePage - 1) * 5);
    this.activePageIndex.emit((this.minPage - 1) * 5);
  }

}
