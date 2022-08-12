import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixInchComponent } from './six-inch.component';

describe('SixInchComponent', () => {
  let component: SixInchComponent;
  let fixture: ComponentFixture<SixInchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixInchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixInchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
