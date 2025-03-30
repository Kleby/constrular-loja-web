import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevarReceberComponent } from './levar-receber.component';

describe('LevarReceberComponent', () => {
  let component: LevarReceberComponent;
  let fixture: ComponentFixture<LevarReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevarReceberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevarReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
