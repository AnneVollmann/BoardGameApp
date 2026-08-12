import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeTable } from './code-table/code-table';
import { TestTable } from './test-table/test-table';
import { PossibleDigits } from './possible-digits/possible-digits';
import { Notes } from './notes/notes';

@Component({
  selector: 'app-turing-machine',
  imports: [RouterLink, CodeTable, TestTable, PossibleDigits, Notes],
  templateUrl: './turing-machine.html',
  styleUrl: './turing-machine.scss',
})
export class TuringMachine {

}
