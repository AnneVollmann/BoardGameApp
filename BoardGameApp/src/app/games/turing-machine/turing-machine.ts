import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeTable } from './code-table/code-table';
import { TestTable } from './test-table/test-table';
import { PossibleDigits } from './possible-digits/possible-digits';
import { Notes } from './notes/notes';
import { GameInformation } from './game-information/game-information';
import {
  TuringMachineState, createInitialTuringMachineState
} from '../../states/turing-machine-state';
import { TuringMachineStorageService } from '../../services/turing-machine-storage';

@Component({
  selector: 'app-turing-machine',
  imports: [RouterLink, GameInformation, CodeTable, TestTable, PossibleDigits, Notes],
  templateUrl: './turing-machine.html',
  styleUrl: './turing-machine.scss',
})
export class TuringMachine {
  game: TuringMachineState;

  constructor(
    private storage: TuringMachineStorageService
  ) {
    this.game =
      this.storage.load()
      ?? createInitialTuringMachineState();
  }

  saveGame() {
    this.storage.save(this.game);
  }
}
