import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDisplaySizeComponent } from './blog-display-size.component';

describe('BlogDisplaySizeComponent', () => {
  let component: BlogDisplaySizeComponent;
  let fixture: ComponentFixture<BlogDisplaySizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDisplaySizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDisplaySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
