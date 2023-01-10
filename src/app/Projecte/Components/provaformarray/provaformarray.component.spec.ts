import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaformarrayComponent } from './provaformarray.component';

describe('ProvaformarrayComponent', () => {
  let component: ProvaformarrayComponent;
  let fixture: ComponentFixture<ProvaformarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaformarrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvaformarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
