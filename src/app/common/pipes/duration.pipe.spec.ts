import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 120 to 2 h 0 min', () => {
    expect(pipe.transform(120)).toBe('2 h 0 min');
  });

  it('transforms 121 to 2 h 1 min', () => {
    expect(pipe.transform(121)).toBe('2 h 1 min');
  });

  it('transforms 21 to 21 min', () => {
    expect(pipe.transform(21)).toBe('21 min');
  });
});
