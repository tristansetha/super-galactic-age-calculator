export default class Date {
  constructor(age, planet, lifeExpectancy) {
    this.age = age;
    this.planet = planet;
    this.lifeExpectancy = lifeExpectancy;
  }
  
  age() {
    let earthDays = this.age * 365;
    if (this.planet == "Mercury") {
      return earthDays / 87.6;
    }
    else if (this.planet == "Venus") {
      return earthDays / 226.3;
    }
    else if (this.planet == "Mars") {
      return earthDays / 686.2;
    }
    else if (this.planet == "Jupiter") {
      return earthDays / 4328.9;
    }
  }

  lifeExpectancy() {

  }
}