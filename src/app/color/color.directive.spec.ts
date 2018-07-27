import {ColorDirective} from './color.directive';

describe('ColorDirective', () => {
  let directive: ColorDirective;

  beforeEach(() => {
    directive = new ColorDirective();
  });

  it('shoold create instance', () => {
    expect(directive).toBeTruthy();
  });

  it('shoold change color to red when click', () => {
    directive.onClick();
    expect(directive.color).toBe('red');
  });
});
