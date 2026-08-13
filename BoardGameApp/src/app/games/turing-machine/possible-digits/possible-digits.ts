import { Component, input } from '@angular/core';
import { CodeDigits } from '../../../states/turing-machine-state';

@Component({
  selector: 'app-possible-digits',
  imports: [],
  templateUrl: './possible-digits.html',
  styleUrl: './possible-digits.scss',
})
export class PossibleDigits {
  codeDigits = input.required<CodeDigits>();

  columns: (keyof CodeDigits)[] = [
    'blueTriangle',
    'yellowSquare',
    'purpleCircle',
  ];

  toggleState(row: number, column: keyof CodeDigits) {
    const digit = this.codeDigits()[column].find(
      (digit) => digit.value === row,
    );

    if (!digit) return;

    switch (digit.state) {
      case 'empty':
        digit.state = 'crossed';
        break;

      case 'crossed':
        digit.state = 'checked';
        break;

      case 'checked':
        digit.state = 'empty';
        break;
    }

    console.log(this.codeDigits());
  }

  getState(row: number, column: keyof CodeDigits) {
    return (
      this.codeDigits()[column].find((digit) => digit.value === row)?.state ??
      'empty'
    );
  }
}
