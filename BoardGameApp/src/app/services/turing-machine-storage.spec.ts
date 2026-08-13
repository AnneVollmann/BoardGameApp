import { TestBed } from '@angular/core/testing';

import { TuringMachineStorage } from './turing-machine-storage';

describe('TuringMachineStorage', () => {
  let service: TuringMachineStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuringMachineStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
