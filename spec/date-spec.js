import Date from './../src/date.js';

describe('Date', function() {

  it('the constructor, to succesfully create a new instance of a date', function() {
    let newDate = new Date(25, "Earth", "male");
    expect(newDate.age).toEqual(25);
    expect(newDate.planet).toEqual("Earth");
    expect(newDate.gender).toEqual("male");
  });

  it('ageCalc method calculates correct age when user enters a planet', function() {
    let newDateMercury = new Date(25, "Mercury", "male");
    let newDateVenus = new Date(25, "Venus", "male");
    let newDateMars = new Date(25, "Mars", "male");
    let newDateJupiter = new Date(25, "Jupiter", "male");
    expect(newDateMercury.ageCalc()).toEqual(104.17);
    expect(newDateVenus.ageCalc()).toEqual(40.32);
    expect(newDateMars.ageCalc()).toEqual(13.3);
    expect(newDateJupiter.ageCalc()).toEqual(2.11);
  });

  it('earthExpenctancy method returns correct life expenctancy based on gender', function() {
    let newDateMale = new Date(25, "Earth", "Male");
    let newDateFemale = new Date(25, "Earth", "Female");
    expect(newDateMale.earthExpectancy()).toEqual(68.33);
    expect(newDateFemale.earthExpectancy()).toEqual(72.66);
  });

  it('lifeExpectancyCalc method returns correct calculation', function() {
    let newMercuryMale = new Date(25, "Mercury", "Male");
    let newMercuryFemale = new Date(25, "Mercury", "Female");
    expect(newMercuryMale.lifeExpectancyCalc()).toEqual(-35.84);
    expect(newMercuryFemale.lifeExpectancyCalc()).toEqual(-31.51);
  });

  it('lifeExpectancyNotification method returns correct message', function() {
    let newMercuryMale = new Date(25, "Mercury", "Male");
    let newMercuryFemale = new Date(25, "Mercury", "Female");
    let newVenusMale = new Date(25, "Venus", "Male");
    let newVenusFemale = new Date(25, "Venus", "Female");
    expect(newMercuryMale.lifeExpentancyNotification()).toEqual("You have lived" + " " + 35.84 + " " + "years past the life expenctancy");
    expect(newMercuryFemale.lifeExpentancyNotification()).toEqual("You have lived" + " " + 31.51 + " " + "years past the life expenctancy");
    expect(newVenusMale.lifeExpentancyNotification()).toEqual("You have" + " " +  28.01 + " " + "years to live");
    expect(newVenusFemale.lifeExpentancyNotification()).toEqual("You have" + " " +  32.34 + " " + "years to live");
  });
});