'use strict';

function Store (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.arrayCookieHour = [this.name];
  this.avgCookieHour = function(){
    for (var i = 0; i < this.openHours.length; i++) {
      this.arrayCookieHour.push(Math.ceil(this.avgCookie * (Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    }
  };

  this.openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  // step 1 create element
  // step 2 configure/mutate the row element
  // append element to the document

  this.makeRow = function(){

    var newRowEl = document.createElement('tr');

    for (var i = 0; i < 16; i++) {
      var storeDataEl = document.createElement('td');
      storeDataEl.textContent = this.arrayCookieHour[i];
      newRowEl.appendChild(storeDataEl);
    }
    tableEl.appendChild(newRowEl);
  };
}

var tableEl = document.getElementById('generate-table');

var firstAndPike = new Store('1st and Pike', 23, 65, 6.3);
firstAndPike.avgCookieHour();
firstAndPike.makeRow();

var seaTacAirport = new Store('SeaTac Airport', 3, 24, 1.2);
seaTacAirport.avgCookieHour();
seaTacAirport.makeRow();

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.avgCookieHour();
seattleCenter.makeRow();

var capitalHill = new Store('Capital Hill', 20, 38, 2.3);
capitalHill.avgCookieHour();
capitalHill.makeRow();

var alki = new Store('Alki', 2, 16, 4.6);
alki.avgCookieHour();
alki.makeRow();

var formEl = document.getElementById('form')

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  console.log(event.target.storeName.value);

  var storeName = event.target.storeName.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var avgCookie = event.target.avgCookie.value;

  var newStore = new Store(storeName, minCust, maxCust, avgCookie);
  newStore.avgCookieHour();
  newStore.makeRow();
}
