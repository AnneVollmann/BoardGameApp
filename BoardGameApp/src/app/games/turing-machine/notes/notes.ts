import { Component, input, output } from '@angular/core';
import { TestNote } from './test-note/test-note';
import { Note } from '../../../states/turing-machine-state';

@Component({
  selector: 'app-notes',
  imports: [TestNote],
  templateUrl: './notes.html',
  styleUrl: './notes.scss',
})
export class Notes {
  notes = input.required<Note[]>();
  columns = ['A', 'B', 'C', 'D', 'E', 'F'];
  noteChange = output<Note[]>();

  updateNote(index: number, note: Note) {
    const updatedNotes = [...this.notes()];
    updatedNotes[index] = note;

    this.noteChange.emit(updatedNotes);
  }
}
