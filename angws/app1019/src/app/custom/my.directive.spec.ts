import { MyDirective } from './my.directive';

describe('MyDirective', () => {
  it('should create an instance', () => {
    const directive = new MyDirective(null);
    expect(directive).toBeTruthy();
  });
});
