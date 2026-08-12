import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNote } from './test-note';

describe('TestNote', () => {
  let component: TestNote;
  let fixture: ComponentFixture<TestNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
