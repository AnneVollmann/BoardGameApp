import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fluegelschlag',
  imports: [RouterLink],
  templateUrl: './fluegelschlag.html',
  styleUrl: './fluegelschlag.scss',
})
export class Fluegelschlag {
  scoringCategories: string[] = [
    'Vögel',
    'Bonuskarten',
    'Rundenziele',
    'Duell-Marker',
    'Nektar',
    'Eier',
    'Futter',
    'Karten',
  ];
}
