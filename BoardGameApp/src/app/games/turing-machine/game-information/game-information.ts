import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-game-information',
  imports: [],
  templateUrl: './game-information.html',
  styleUrl: './game-information.scss',
})
export class GameInformation {
  name = input.required<string>();
  gameNumber = input.required<string>();

  nameChange = output<string>();
  gameNumberChange = output<string>();

  onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.nameChange.emit(value);
  }

  onGameNumberInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.gameNumberChange.emit(value);
  }
}
