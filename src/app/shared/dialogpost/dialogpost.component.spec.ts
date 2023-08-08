import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogpostComponent } from './dialogpost.component';

describe('DialogpostComponent', () => {
  let component: DialogpostComponent;
  let fixture: ComponentFixture<DialogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
