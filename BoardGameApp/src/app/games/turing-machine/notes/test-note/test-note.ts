import { Component, input } from '@angular/core';

@Component({
  selector: 'app-test-note',
  imports: [],
  templateUrl: './test-note.html',
  styleUrl: './test-note.scss',
})

export class TestNote {
  letter = input.required<string>();
}
