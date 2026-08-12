import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuringMachine } from './turing-machine';

describe('TuringMachine', () => {
  let component: TuringMachine;
  let fixture: ComponentFixture<TuringMachine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuringMachine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuringMachine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
