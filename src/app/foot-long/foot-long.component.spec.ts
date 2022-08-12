import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootLongComponent } from './foot-long.component';

describe('FootLongComponent', () => {
  let component: FootLongComponent;
  let fixture: ComponentFixture<FootLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
