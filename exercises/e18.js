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
  let yearsCount = Object.entries(hashMap);//converts object to an array of arrays [year, count] pairs
  let maxCount = 3; //set maximum amount of times the year shows up to 3
  for (let [year, count] of yearsCount) {//for every [key, value] pair in our yearsCount array
    if (count === maxCount) {//check if the [count] is equal to our maxCount variable
      return parseInt([year]);//then take that [year] as a string and turn it into a number
    }
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
