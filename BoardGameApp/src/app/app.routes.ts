import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TuringMachine } from './games/turing-machine/turing-machine';
import { Fluegelschlag } from './games/fluegelschlag/fluegelschlag';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'games/turing-machine',
    component: TuringMachine,
  },
  {
    path: 'games/fluegelschlag',
    component: Fluegelschlag,
  },
];
