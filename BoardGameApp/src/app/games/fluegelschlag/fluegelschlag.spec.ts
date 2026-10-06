import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fluegelschlag } from './fluegelschlag';

describe('Fluegelschlag', () => {
  let component: Fluegelschlag;
  let fixture: ComponentFixture<Fluegelschlag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fluegelschlag]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fluegelschlag);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
