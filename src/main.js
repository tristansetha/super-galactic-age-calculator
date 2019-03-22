
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import  Date  from './date.js';

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    let age = parseInt($("#age").val());
    let planet = $("#planet").val();
    let gender = $("#gender").val();

    let newDate = new Date(age, planet, gender);

    $("#result").text(newDate.lifeExpentancyNotification());
    $("#resultPlanet").text(newDate.getPlanet());
    $("#resultPlanetAge").text(newDate.ageCalc());
  });
});