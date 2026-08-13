export interface TuringMachineState {
  name: string;
  gameNumber: string;
  codeTests: CodeTest[];
  possibleDigits: PossibleDigits;
  notes: TestNote[];
}

export type TestState = 'empty' | 'crossed' | 'checked';

export interface CodeTest {
  code: string;
  tests: {
    A: TestState;
    B: TestState;
    C: TestState;
    D: TestState;
    E: TestState;
    F: TestState;
  };
}

export interface PossibleDigits {
  blueTriangle: DigitState[];
  yellowSquare: DigitState[];
  purpleCircle: DigitState[];
}

export interface DigitState {
  value: number;
  state: TestState;
}

export interface TestNote {
  letter: string;
  notes: string;
  resolution: string;
}

export const initialTuringMachineState: TuringMachineState = {
  name: '',
  gameNumber: '',
  codeTests: [],
  possibleDigits: {
    blueTriangle: createDigits(),
    yellowSquare: createDigits(),
    purpleCircle: createDigits(),
  },
  notes: [],
};

function createDigits(): DigitState[] {
  return [1, 2, 3, 4, 5].map((value) => ({
    value,
    state: 'empty',
  }));
}
