import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImzouComponentComponent } from './imzou-component.component';

describe('ImzouComponentComponent', () => {
  let component: ImzouComponentComponent;
  let fixture: ComponentFixture<ImzouComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImzouComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImzouComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
