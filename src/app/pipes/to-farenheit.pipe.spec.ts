import { ToFarenheitPipe } from './to-farenheit.pipe';

describe('ToFarenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new ToFarenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
