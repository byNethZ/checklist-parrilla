import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsApprovedComponent } from './buttons-approved.component';

describe('ButtonsApprovedComponent', () => {
  let component: ButtonsApprovedComponent;
  let fixture: ComponentFixture<ButtonsApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsApprovedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
