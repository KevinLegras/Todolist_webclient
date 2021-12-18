import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxUtilsComponent } from './box-utils.component';

describe('BoxUtilsComponent', () => {
  let component: BoxUtilsComponent;
  let fixture: ComponentFixture<BoxUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxUtilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
