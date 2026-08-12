import { Component } from '@angular/core';
import { TestNote } from './test-note/test-note';

@Component({
  selector: 'app-notes',
  imports: [TestNote],
  templateUrl: './notes.html',
  styleUrl: './notes.scss',
})
export class Notes {
  columns = ['A', 'B', 'C', 'D', 'E', 'F'];
}
