import { Component } from '@angular/core';

@Component({
  selector: 'app-test-table',
  imports: [],
  templateUrl: './test-table.html',
  styleUrl: './test-table.scss',
})
export class TestTable {
  columns = ['A', 'B', 'C', 'D', 'E', 'F'];
  rows = [
    { A: false, B: false, C: false, D: false, E: false, F: false },
    { A: false, B: false, C: false, D: false, E: false, F: false },
    { A: false, B: false, C: false, D: false, E: false, F: false },
    { A: false, B: false, C: false, D: false, E: false, F: false },
    { A: false, B: false, C: false, D: false, E: false, F: false },
  ];
}
