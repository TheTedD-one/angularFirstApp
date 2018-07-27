import {CarComponent} from './car.component';
import {TestBed} from '@angular/core/testing';
import {CarService} from './car.service';

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

  it('shoold inject CarService', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    const carService = fixture.debugElement.injector.get(CarService);
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisible());
  });

  it('shoold display car if is visible', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    const carService = fixture.debugElement.injector.get(CarService);
    carService.showCar();
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  it('shooldn\'t display car if is visible', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    const carService = fixture.debugElement.injector.get(CarService);
    carService.hideCar();
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('span').textContent;
    expect(text).not.toEqual('Car is visible');
  });
});
