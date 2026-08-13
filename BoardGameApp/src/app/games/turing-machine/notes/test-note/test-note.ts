import { Component, input, output } from '@angular/core';
import { Note } from '../../../../states/turing-machine-state';

@Component({
  selector: 'app-test-note',
  imports: [],
  templateUrl: './test-note.html',
  styleUrl: './test-note.scss',
})
export class TestNote {
  note = input.required<Note>();
  noteChange = output<Note>();

  updateNotes(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;

    this.noteChange.emit({
      ...this.note(),
      notes: value,
    });
  }

  updateResolution(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.noteChange.emit({
      ...this.note(),
      resolution: value,
    });
  }
}
