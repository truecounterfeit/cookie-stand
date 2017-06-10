'use strict';

// build objects 1st and Pike, SeaTac Airport, Seattle Center, Capitol Hill, Alki

// with properties: minimum number of customers per hour (minCust), maximum number of customers per hour (maxCust), average number of cookies purchased per customer (avgCookie)

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  arrayCookieHour: [],
  avgCookieHour: function() {
    for (var i = 1; i < 16; i++) {
      this.arrayCookieHour.push(this.avgCookie * (Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust));
    }
  },
};
firstAndPike.avgCookieHour();
console.log(firstAndPike.arrayCookieHour);
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
console.log(aliki.arrayCookieHour);

// Use a method of that object to generate a random number of customers per hour

//Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

//Store the results for each location in a separate array... perhaps as a property of the object representing that location

//values of each array as unordered lists in the browser (sales.html)
