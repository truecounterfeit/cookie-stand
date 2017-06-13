'use strict';

// 1ST AND PIKE
//var openHours = [6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00];

function Store (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.arrayCookieHour = [this.name];
  this.avgCookieHour = function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(Math.ceil(this.avgCookie * (Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    }
  };
  this.openHours = [6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00];
  // step 1 create element
  // step 2 configure/mutate the row element
  // append element to the document

  this.makeRow = function(){
    var tableEl = document.getElementById('generate-table');
    var tableBodyEl = document.createElement('tbody');
// put into 16 columns
    for (var i = 0; i <= this.openHours.length; i++) {
      var newRowEl = document.createElement('tr');
      var storeDataEl = document.createElement('td');
      storeDataEl.textContent = this.arrayCookieHour;
    }

    newRowEl.appendChild(storeDataEl);

    tableBodyEl.appendChild(newRowEl);

    tableEl.appendChild(tableBodyEl);
  };
}

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

/*
//SEATAC AIPORT

function Store (minCust, maxCust, avgCookie) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.arrayCookieHour = ['SeaTac Airport '];
  this.avgCookieHour = function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * Math.ceil(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));;
    }
  };
  // step 1 create element
  // step 2 configure/mutate the row element
  // append element to the document

  this.makeRow = function(){
    var newRowEl = document.createElement('tr');

    var storeDataEl = document.createElement('td');
      //storeDataEl.textContent = arrayCookieHour[];
    storeDataEl.textContent = this.arrayCookieHour;
    newRowEl.appendChild(storeDataEl);

    tableBodyEl.appendChild(newRowEl);

    var tableEl = document.getElementById('generate-table');
    var tableBodyEl = document.createElement('tbody');
    tableEl.appendChild(tableBodyEl);
  };
}

// SEATTLE CENTER

function Store (minCust, maxCust, avgCookie) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.arrayCookieHour = ['Seattle Center '];
  this.avgCookieHour = function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * Math.ceil(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));;
    }
  };
  // step 1 create element
  // step 2 configure/mutate the row element
  // append element to the document

  this.makeRow = function(){
    var newRowEl = document.createElement('tr');

    var storeDataEl = document.createElement('td');
      //storeDataEl.textContent = arrayCookieHour[];
    storeDataEl.textContent = this.arrayCookieHour;
    newRowEl.appendChild(storeDataEl);

    tableBodyEl.appendChild(newRowEl);

    var tableEl = document.getElementById('generate-table');
    var tableBodyEl = document.createElement('tbody');
    tableEl.appendChild(tableBodyEl);
  };
}

// CAPITAL HILL

function Store (minCust, maxCust, avgCookie) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.arrayCookieHour = ['Capital Hill '];
  this.avgCookieHour = function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * Math.ceil(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));;
    }
  };
  // step 1 create element
  // step 2 configure/mutate the row element
  // append element to the document

  this.makeRow = function(){
    var newRowEl = document.createElement('tr');

    var storeDataEl = document.createElement('td');
      //storeDataEl.textContent = arrayCookieHour[];
    storeDataEl.textContent = this.arrayCookieHour;
    newRowEl.appendChild(storeDataEl);

    tableBodyEl.appendChild(newRowEl);

    var tableEl = document.getElementById('generate-table');
    var tableBodyEl = document.createElement('tbody');
    tableEl.appendChild(tableBodyEl);
  };
}

// ALIKI

function Store (minCust, maxCust, avgCookie) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.arrayCookieHour = ['Alki '];
  this.avgCookieHour = function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * Math.ceil(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));;
    }
  };
  // step 1 create element
  // step 2 configure/mutate the row element
  // append element to the document

  this.makeRow = function(){
    var newRowEl = document.createElement('tr');

    var storeDataEl = document.createElement('td');
      //storeDataEl.textContent = arrayCookieHour[];
    storeDataEl.textContent = this.arrayCookieHour;
    newRowEl.appendChild(storeDataEl);

    tableBodyEl.appendChild(newRowEl);

    var tableEl = document.getElementById('generate-table');
    var tableBodyEl = document.createElement('tbody');
    tableEl.appendChild(tableBodyEl);
  };
}

/*
avgCookieHour(seaTacAirport);
avgCookieHour(seattleCenter);
avgCookieHour(capitalHill);
avgCookieHour(aliki);

    // step 1 create element
    // step 2 configure/mutate the row element
    // append element to the document

function makeRow (store){
  var newRowEl = document.createElement('tr');

  var storeDataEl = document.createElement('td');
    //storeDataEl.textContent = arrayCookieHour[];
  storeDataEl.textContent = store.arrayCookieHour;
  newRowEl.appendChild(storeDataEl);

  tableBodyEl.appendChild(newRowEl);

  var tableEl = document.getElementById('generate-table');
  var tableBodyEl = document.createElement('tbody');
  tableEl.appendChild(tableBodyEl);
}

makeRow(firstandPike.Store);

/*function randomCust(min, max) {
  Math.ceil((Math.floor(Math.random() * (max - min)) + min));
};
randomCust(this.minCust, this.maxCust);
console.log(randomCust);

function avgCookieHour() {
  for (var i = 1; i < 16; i++) {
    this.arrayCookieHour.push(avgCookie * randomCust());
  }
};
console.log(avgCookieHour); */

// build objects 1st and Pike, SeaTac Airport, Seattle Center, Capitol Hill, Alki

// with properties: minimum number of customers per hour (minCust), maximum number of customers per hour (maxCust), average number of cookies purchased per customer (avgCookie)

/*
var arrayTime = [6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00];
function makeUL(arrayTime){
  var list = document.createElement('ul');
  for(var i = 0; i < array.length; i++) {
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(arrayTime[i]));
    list.appendChild(items);
  }
  return list;
}
document.getElementById('firstAndPike-list').appendChild(makeUL(firstAndPike.arrayCookieHour[i]));
*/
    //A table to show the total amount of projected cookie needs at each location, with the table displaying the cookie stand location, the total number of cookies needed for each location, an hourly breakdown of total cookies sales for each location

/*
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
};

var arrayCookieHour = [5, 6, 7]; */
/*
function randomCust(min, max) {
  Math.ceil((Math.floor(Math.random() * (max - min)) + min));
};
randomCust(4,7);
console.log(randomCust); */

  /*
function avgCookieHour() {
  for (var i = 1; i < 16; i++) {
    this.arrayCookieHour.push(this.avgCookie * (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));
  }
}
avgCookieHour(firstandPike.minCust,firstAndPike.max);
console.log(arrayCookieHour());
*/
/*
var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  arrayCookieHour: [],
  avgCookieHour: function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    }
  },
};
seaTacAirport.avgCookieHour();
console.log(seaTacAirport.arrayCookieHour);

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  arrayCookieHour: [],
  avgCookieHour: function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    }
  },
};
seattleCenter.avgCookieHour();
console.log(seattleCenter.arrayCookieHour);

var capitalHill = {
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  arrayCookieHour: [],
  avgCookieHour: function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    }
  },
};
capitalHill.avgCookieHour();
console.log(capitalHill.arrayCookieHour);

var aliki = {
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  arrayCookieHour: [],
  avgCookieHour: function(){
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    }
  },
};
aliki.avgCookieHour();
console.log(aliki.arrayCookieHour);*/
