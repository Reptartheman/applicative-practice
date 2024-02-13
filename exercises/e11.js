
import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  const planets = data.planets;
  let lessThanTenMoons = planets
  .filter((planet) => {
    if (planet.moonsCount === undefined) {
      return planet.name;
    }
    if (planet.hasOwnProperty('moonsCount')) {
      if (planet.moonsCount < 10) {
        return planet.name;
      }
    }
  })
  .map((planet) => {
      return planet.name;
  })
return lessThanTenMoons;
}

/* 
- compare the number of items in the array OR the value of some other property that represents the number of moons to be less than 10 to figure out if the moon has less than 10 moons.

- If the planet does not have any moons it will NOT have the moons array and moonsCount property.


*/

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
