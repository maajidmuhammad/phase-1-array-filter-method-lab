// Code your solution here
//Question1

function findMatching(drivers, name) {
    // Convert the name to lowercase 
    const nameInLowercase = name.toLowerCase();
    
    // Filter to find matching names 
    const matchingDriversNames = drivers.filter(driver =>
        driver.toLowerCase() === nameInLowercase
    );
    
    return matchingDriversNames;
}

// test the function
const drivers = ["John", "Mary", "Mike", "johnny"];
const searchCommonTerm = "JoHn";

console.log(findMatching(drivers, searchCommonTerm)); 


//Question 2

function fuzzyMatch(driversNames, query) {
    // Convert query to lowercase 
    const queryLowerCase = query.toLowerCase();
    // Filter drivers whose names start with the provided string
    return driversNames.filter(driver =>
        driver.toLowerCase().startsWith(queryLowerCase)
    );
}

// Test the function
const driversNames = ['Sammy', 'Sarah', 'Sally'];
const query = 'Ja';
const matchedDrivers = fuzzyMatch(drivers, query);
console.log(matchedDrivers); 

// Question 3
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  } 
  // Test the function
  const driversList = [
    { name: 'John', hometown: 'New York' },
    { name: 'Alice', hometown: 'Los Angeles' },
    { name: 'Bob', hometown: 'Chicago' },
    { name: 'John', hometown: 'Houston' },
  ];
  
  const matchedDriversList = matchName(driversList, 'John');
  console.log(matchedDriversList);
  