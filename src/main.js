
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import  Date  from './date.js';

$(document).ready(function() {
  $("form#formCalculator").submit(function(event) {
    event.preventDefault();

    let age = parseInt($("input#age").val());
    let planet = $("select#planets").val();
    let gender = $("select#gender").val();

    let newDate = new Date(age, planet, gender);
    let lifeExpectancy = newDate.lifeExpectancyNotification();
    let newPlanet = newDate.getPlanet();
    let newPlanetAge = newDate.ageCalc();

    $("p#result").text(lifeExpectancy);
    $("p#resultPlanet").text(newPlanet);
    $("p#resultPlanetAge").text(newPlanetAge);
  });
});