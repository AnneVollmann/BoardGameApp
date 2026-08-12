import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInformation } from './game-information';

describe('GameInformation', () => {
  let component: GameInformation;
  let fixture: ComponentFixture<GameInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
