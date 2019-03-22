export default class Date {
  constructor(age, planet, gender) {
    this.age = parseInt(age);
    this.planet = planet;
    this.gender = gender;
  }

  getAge() {
    return this.age;
  }
  
  getPlanet() {
    return this.planet;
  }

  ageCalc() {
    let earthDays = this.age * 365;
    if (this.planet == "Mercury") {
      let ageMercury = earthDays / 87.6;
      return Math.round(ageMercury * 100) / 100;
    }
    else if (this.planet == "Venus") {
      let ageVenus = earthDays / 226.3;
      return Math.round(ageVenus * 100) / 100;
    }
    else if (this.planet == "Mars") {
      let ageMars = earthDays / 686.2;
      return Math.round(ageMars * 100) / 100;
    }
    else if (this.planet == "Jupiter") {
      let ageJupiter = earthDays / 4328.9;
      return Math.round(ageJupiter * 100) / 100;
    }
  }

  earthExpectancy() {
    if (this.gender == "Male") {
      return 68.33;
    } 
    else if (this.gender == "Female") {
      return 72.66;
    }
  }

  lifeExpectancyCalc() {
    let newExpectacy = this.earthExpectancy() - this.ageCalc();
    return Math.round(newExpectacy * 100) / 100;
  }

  lifeExpentancyNotification() {
    if ((this.lifeExpectancyCalc()) < 0) {
      return "You have lived" + " " + Math.abs(this.lifeExpectancyCalc()) + " " + "years past the life expenctancy";
    }
    else if ((this.lifeExpectancyCalc()) > 0) {
      return "You have" + " " +  Math.abs(this.lifeExpectancyCalc()) + " " + "years to live";
    }
  }
}