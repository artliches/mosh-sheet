import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshSheetComponent } from './mosh-sheet.component';

describe('MoshSheetComponent', () => {
  let component: MoshSheetComponent;
  let fixture: ComponentFixture<MoshSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoshSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
