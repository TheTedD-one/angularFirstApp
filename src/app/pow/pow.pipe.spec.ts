import {PowPipe} from './pow.pipe';

describe('PowPipe', () => {
  let pipe: PowPipe;

  beforeEach(() => {
    pipe = new PowPipe();
  });

  it('shoold create instance', () => {
    expect(pipe).toBeTruthy();
    expect(pipe.transform).toBeDefined();
  });

  it('shoold return 8 if called 2 and 3', () => {
    const result = pipe.transform(2, 3);
    expect(result).toBe(8);
  });
});