const cities = [
    {
      "id": 301,
      "name": "New York",
      "population": 8398748,
      "country": "United States"
    },
    {
      "id": 302,
      "name": "Paris",
      "population": 2140526,
      "country": "France"
    },
    {
      "id": 303,
      "name": "Tokyo",
      "population": 13960000,
      "country": "Japan"
    },
    {
      "id": 304,
      "name": "Sydney",
      "population": 5230330,
      "country": "Australia"
    },
    {
      "id": 305,
      "name": "Cairo",
      "population": 9121515,
      "country": "Egypt"
    }
  ];

  /**********
Question 1:
You have a function getCityPopulation(city) that:
- receives a city object
- returns the population of the city
Don't forget to uncomment the console.log
===
ANSWER: 8398748
**********/

function getCityPopulation(city) {
    return city.population; // simply return the city.population
    
  }
console.log(getCityPopulation(cities[0])); // calling functino with first index of the array 



/**********
Question 2:
You have a function that:
- receives a city object
- receives a population threshold (number)
- returns true if the city's population is greater than or equal to the threshold, otherwise returns false
===
ANSWER: true
**********/

function isPopulationAboveThreshold(city, threshold) {
  if (city.population >= threshold) {  // using if statment to check if the city.population >= threshold
    return true; 
  } else {
    return false;
  }
}
console.log(isPopulationAboveThreshold(cities[1], 2000000)); // calling fucntion 



/**********
Question 3:
addCity(cities, city):
- receives an array of city objects
- receives a new city object (with id, population, and country)
- adds the new city to the array
- returns the updated array
===
ANSWER: 
[
  {
    "id": 301,
    "name": "New York",
    "population": 8398748,
    "country": "United States"
  },
  {
    "id": 302,
    "name": "Paris",
    "population": 2140526,
    "country": "France"
  },
  {
    "id": 303,
    "name": "Tokyo",
    "population": 13960000,
    "country": "Japan"
  },
  {
    "id": 304,
    "name": "Sydney",
    "population": 5230330,
    "country": "Australia"
  },
  {
    "id": 305,
    "name": "Cairo",
    "population": 9121515,
    "country": "Egypt"
  },
  {
    "id": 306,
    "population": 1200000,
    "country": "Canada"
  }
]
**********/

function addCity(cities, city) {
  cities.push(city); // using push method that we leanred to add new arrays
  return cities; // return the original array 
}

const newCity = { // city object 
 "id": 306,
"population": 1200000,
"country": "Canada"
};

console.log(addCity(cities, newCity)); // calling function 


/**********
Question 4:
countCitiesInCountry(cities, country):
- receives an array of city objects
- receives a country name (string)
- returns the number of cities in the specified country
===
ANSWER: 1
**********/

function countCitiesInCountry(cities, country) {
  let count = 0;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i].country === country) {
      count++;
  }
}
return count++;
}
console.log(countCitiesInCountry(cities, "France"));