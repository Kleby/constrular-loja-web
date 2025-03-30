import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevarReceberCardsComponent } from './levar-receber-cards.component';

describe('LevarReceberCardsComponent', () => {
  let component: LevarReceberCardsComponent;
  let fixture: ComponentFixture<LevarReceberCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevarReceberCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevarReceberCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
