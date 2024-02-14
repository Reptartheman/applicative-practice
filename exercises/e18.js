import { maxBy } from "./e17";

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;//declare asteroids variable
  const hashMap = {};//declare empty object
  for (let asteroid of asteroids) {//loop through asteroids array
    hashMap[asteroid.discoveryYear] = (hashMap[asteroid.discoveryYear] ?? 0) + 1;
    // set the key to be the asteroid's discovery year and increment the count each time that year occurs
  }
  let yearsCount = Object.entries(hashMap);//returns an array of arrays with [year, count] pairs
  let maxCountElement = maxBy(yearsCount, (element) => element[1]);
  //element[1] represents the [count] of our [year, count] pair
  let maxYear = maxCountElement[0];//this represents the [year] in our [year, count] pair
  return parseInt(maxYear);//parse the year into a number
}

//I need to see if the value is greater than the previous value and then return the year



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
