import { Component, input, output } from '@angular/core';
import { CodeTest, TestColumn, TestState } from '../../../states/turing-machine-state';

@Component({
  selector: 'app-test-table',
  imports: [],
  templateUrl: './test-table.html',
  styleUrl: './test-table.scss',
})
export class TestTable {
  codeTests = input.required<CodeTest[]>();
  codeTestsChange = output<CodeTest[]>();
  columns: TestColumn[] = ['A', 'B', 'C', 'D', 'E', 'F'];

  toggleState(row: number, column: TestColumn) {
    const test = this.codeTests()[row].tests;

    switch (test[column]) {
      case 'empty':
        test[column] = 'crossed';
        break;

      case 'crossed':
        test[column] = 'checked';
        break;

      case 'checked':
        test[column] = 'empty';
        break;
    }
    this.codeTestsChange.emit([...this.codeTests()]);
    console.log(this.codeTests())
  }

  getState(row: number, column: TestColumn): TestState {
    return this.codeTests()[row].tests[column];
  }
}
