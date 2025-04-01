import { ValueIsNullPipe } from './value-is-null.pipe';

describe('ValueIsNullPipe', () => {
  it('create an instance', () => {
    const pipe = new ValueIsNullPipe();
    expect(pipe).toBeTruthy();
  });
});
