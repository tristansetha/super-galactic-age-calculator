import Date from './../src/date.js';

describe('Date', function() {

  it('the constructor, to succesfully create a new instance of a date', function() {
    let newDate = new Date(25, "Earth", "male");
    expect(newDate.age).toEqual(25);
    expect(newDate.planet).toEqual("Earth");
    expect(newDate.gender).toEqual("male");
  });

  it('calculates correct age when user enters a planet', function() {
    let newDateMercury = new Date(25, "Mercury", "male");
    let newDateVenus = new Date(25, "Venus", "male");
    let newDateMars = new Date(25, "Mars", "male");
    let newDateJupiter = new Date(25, "Jupiter", "male");
    expect(newDateMercury.ageCalc()).toEqual(104.17);
    expect(newDateVenus.ageCalc()).toEqual(40.32);
    expect(newDateMars.ageCalc()).toEqual(13.3);
    expect(newDateJupiter.ageCalc()).toEqual(2.11);
    // expect(newDate.planet).toEqual("Earth");
    // expect(newDate.gender).toEqual("male");
  });
});