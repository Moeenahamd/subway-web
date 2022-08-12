import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseItemsDialogComponent } from './choose-items-dialog.component';

describe('ChooseItemsDialogComponent', () => {
  let component: ChooseItemsDialogComponent;
  let fixture: ComponentFixture<ChooseItemsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseItemsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
