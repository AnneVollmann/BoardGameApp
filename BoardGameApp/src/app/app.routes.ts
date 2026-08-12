import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TuringMachine } from './games/turing-machine/turing-machine';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'games/turing-machine',
    component: TuringMachine,
  },
];
