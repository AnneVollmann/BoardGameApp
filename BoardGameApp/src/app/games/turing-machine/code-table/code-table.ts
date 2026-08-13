import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-code-table',
  imports: [],
  templateUrl: './code-table.html',
  styleUrl: './code-table.scss',
})
export class CodeTable {
  @ViewChildren('codeDigit')
  codeDigits!: QueryList<ElementRef<HTMLInputElement>>;

  onDigitInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '').slice(0, 1);
    if (input.value.length !== 1) return;
    const inputs = this.codeDigits.toArray();
    const currentIndex = inputs.findIndex((item) => item.nativeElement === input,);
    if ((currentIndex + 1) % 3 === 0) {
      input.blur();
      return;
    }
    inputs[currentIndex + 1].nativeElement.focus();
  }
}
