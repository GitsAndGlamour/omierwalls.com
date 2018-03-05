import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioComponent } from './porfolio.component';

describe('PorfolioComponent', () => {
  let component: PorfolioComponent;
  let fixture: ComponentFixture<PorfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
