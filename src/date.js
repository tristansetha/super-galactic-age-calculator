export default class Date {
  constructor(age, planet, gender) {
    this.age = parseInt(age);
    this.planet = planet;
    this.gender = gender;
  }

  age() {
    return this.age;
  }
  
  ageCalc() {
    let earthDays = this.age * 365;
    if (this.planet == "Mercury") {
      let ageMercury = earthDays / 87.6;
      return Math.round(ageMercury * 100) / 100;
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

  // lifeExpectancy() {

  // }
}