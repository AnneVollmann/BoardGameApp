import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTestTable } from './code-test-table';

describe('CodeTestTable', () => {
  let component: CodeTestTable;
  let fixture: ComponentFixture<CodeTestTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeTestTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeTestTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
