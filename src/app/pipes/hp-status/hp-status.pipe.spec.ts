import { HpStatusPipe } from './hp-status.pipe';

describe('HpStatusPipe', () => {
  let pipe: HpStatusPipe;

  beforeEach(() => {
    pipe = new HpStatusPipe();
  });

  it('should return "Low HP" when HP is 30% or below', () => {
    expect(pipe.transform(30, 100)).toBe('Low HP');
    expect(pipe.transform(15, 100)).toBe('Low HP');
    expect(pipe.transform(0, 100)).toBe('Low HP');
  });

  it('should return "Medium HP" when HP is between 30% and 70%', () => {
    expect(pipe.transform(50, 100)).toBe('Medium HP');
    expect(pipe.transform(69, 100)).toBe('Medium HP');
  });

  it('should return "High HP" when HP is above 70%', () => {
    expect(pipe.transform(80, 100)).toBe('High HP');
    expect(pipe.transform(100, 100)).toBe('High HP');
  });

  it('should return "text-red-500" when HP is 30% or below', () => {
    expect(pipe.transform(30, 100, 'class')).toBe('text-red-500');
    expect(pipe.transform(15, 100, 'class')).toBe('text-red-500');
  });

  it('should return "text-yellow-500" when HP is between 30% and 70%', () => {
    expect(pipe.transform(50, 100, 'class')).toBe('text-yellow-500');
  });

  it('should return "text-green-500" when HP is above 70%', () => {
    expect(pipe.transform(80, 100, 'class')).toBe('text-green-500');
  });

  it('should return "Low HP" and "text-red-500" when HP is 0', () => {
    expect(pipe.transform(0, 100)).toBe('Low HP');
    expect(pipe.transform(0, 100, 'class')).toBe('text-red-500');
  });

  it('should handle max HP case correctly', () => {
    expect(pipe.transform(100, 100)).toBe('High HP');
    expect(pipe.transform(100, 100, 'class')).toBe('text-green-500');
  });
});
