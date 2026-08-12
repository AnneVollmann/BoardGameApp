import { Component } from '@angular/core';

@Component({
  selector: 'app-test-table',
  imports: [],
  templateUrl: './test-table.html',
  styleUrl: './test-table.scss',
})
export class TestTable {
  columns = ['A', 'B', 'C', 'D', 'E', 'F'];
  states: Record<string, 'none' | 'cross' | 'check'> = {};

  toggleState(row: number, column: string) {
    const key = `${row}-${column}`;

    switch (this.states[key]) {
      case undefined:
      case 'none':
        this.states[key] = 'cross';
        break;
      case 'cross':
        this.states[key] = 'check';
        break;

      case 'check':
        this.states[key] = 'none';
        break;
    }
  }

  getState(row: number, column: string) {
    return this.states[`${row}-${column}`] ?? 'none';
  }
}
