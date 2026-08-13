import { Injectable } from '@angular/core';
import { TuringMachineState } from '../states/turing-machine-state';

@Injectable({
  providedIn: 'root'
})
export class TuringMachineStorageService {

  private readonly storageKey = 'turing-machine-game';

  save(game: TuringMachineState): void {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(game)
    );
  }

  load(): TuringMachineState | null {
    const stored = localStorage.getItem(this.storageKey);

    if (!stored) {
      return null;
    }

    return JSON.parse(stored);
  }

  delete(): void {
    localStorage.removeItem(this.storageKey);
  }
}