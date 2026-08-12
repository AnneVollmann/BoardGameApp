import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleDigits } from './possible-digits';

describe('PossibleDigits', () => {
  let component: PossibleDigits;
  let fixture: ComponentFixture<PossibleDigits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PossibleDigits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PossibleDigits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
