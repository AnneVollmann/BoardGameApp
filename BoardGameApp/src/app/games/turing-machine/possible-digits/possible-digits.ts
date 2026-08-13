import { Component } from '@angular/core';

@Component({
  selector: 'app-possible-digits',
  imports: [],
  templateUrl: './possible-digits.html',
  styleUrl: './possible-digits.scss',
})
export class PossibleDigits {
  states: Record<string, 'none' | 'cross' | 'check'> = {};

  toggleState(row: number, column: number) {
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

  getState(row: number, column: number) {
    return this.states[`${row}-${column}`] ?? 'none';
  }
}
