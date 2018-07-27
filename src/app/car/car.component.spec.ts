import {CarComponent} from './car.component';
import {TestBed} from '@angular/core/testing';

describe('CarComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent]
    });
  });

  it('shoold create car component instance', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`shoold render h1 tag with title 'My car header'`, () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();

    const component = fixture.debugElement.nativeElement;
    const text = component.querySelector('h1').textContent;
    expect(text).toEqual('Car Header');
  });
});
