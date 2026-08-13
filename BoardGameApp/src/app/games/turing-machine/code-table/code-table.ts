import {
  Component,
  input,
  output,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CodeTest } from '../../../states/turing-machine-state';

@Component({
  selector: 'app-code-table',
  imports: [],
  templateUrl: './code-table.html',
  styleUrl: './code-table.scss',
})
export class CodeTable {
  codeTests = input.required<CodeTest[]>();
  codeTestsChange = output<CodeTest[]>();
  
  @ViewChildren('codeDigit')
  codeDigits!: QueryList<ElementRef<HTMLInputElement>>;

  onDigitInput(event: Event, row: number, column: number) {
    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/\D/g, '').slice(0, 1);

    if (input.value === '') {
      this.codeTests()[row].code[column] = '';
      this.codeTests()[row].code[column] = input.value;
      return;
    }

    this.codeTests()[row].code[column] = input.value;

    this.codeTestsChange.emit([...this.codeTests()]);

    const inputs = this.codeDigits.toArray();
    const currentIndex = inputs.findIndex(
      (item) => item.nativeElement === input,
    );
    
    if ((currentIndex + 1) % 3 === 0) {
      input.blur();
      return;
    }

    inputs[currentIndex + 1].nativeElement.focus();
  }
}
