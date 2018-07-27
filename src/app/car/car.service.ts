export class CarService {
  private isVisible = true;

  getVisible() {
    return this.isVisible;
  }

  showCar() {
    this.isVisible = true;
  }

  hideCar() {
    return this.isVisible = false;
  }
}
