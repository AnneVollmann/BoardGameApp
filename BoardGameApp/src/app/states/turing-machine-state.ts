export interface TuringMachineState {
  name: string;
  gameNumber: string;
  codeTests: CodeTest[];
  possibleDigits: PossibleDigits;
  notes: TestNote[];
}

export type TestState = 'empty' | 'crossed' | 'checked';

export type TestColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export interface CodeTest {
  code: string[];
  tests: Record<TestColumn, TestState>;
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
  codeTests: createCodeTests(),
  possibleDigits: {
    blueTriangle: createDigits(),
    yellowSquare: createDigits(),
    purpleCircle: createDigits(),
  },
  notes: [],
};

function createCodeTests(): CodeTest[] {
  return Array.from({ length: 5 }, () => ({
    code: ['', '', ''],
    tests: {
      A: 'empty',
      B: 'empty',
      C: 'empty',
      D: 'empty',
      E: 'empty',
      F: 'empty'
    }
  }));
}

function createDigits(): DigitState[] {
  return [1, 2, 3, 4, 5].map((value) => ({
    value,
    state: 'empty',
  }));
}