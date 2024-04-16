console.log('This file is connected');

// Write a function that take 3 arguments,
// the name of the restaurant, food, and the amount.

// Outputs the result to your console with the text :
// You are ordering (amount) (food) from (name of the restaurant )

// call the function 3 times with different values for the argument

// function orderFood(restaurantName, foodAmount, foodName) {
//   console.log(
//     `You are ordering ${foodAmount} ${foodName} from  ${restaurantName}`
//   );
//   // console.log('You are ordering' + foodAmount + foodName + 'from ' + restaurantName)
// }

function orderFood(restaurantName, foodAmount, foodName) {
  return `You are ordering ${foodAmount} ${foodName} from  ${restaurantName}`;
}

const parentResult = orderFood('Konya Kebab', 4, 'Falafel Durum');
const parent2Result = orderFood('Chia Grød', 1, 'Grød');
const childResult = orderFood('Chicken nuggets', 6, 'Burger Shack');

// console.log(parentResult);
// console.log(parent2Result);
// console.log(childResult);

// Arrow functions

const orderFoodArrow = (restaurantName, foodAmount, foodName) =>
  `You are ordering ${foodAmount} ${foodName} from  ${restaurantName}`;

// DOM Manipulation

const firstDiv = document.querySelector('.green-bg');

const secondDiv = document.querySelector('#middle-div');

const boxOfDivs = document.querySelectorAll('div');

// console.log(firstDiv.textContent);
// console.log(secondDiv.textContent);
// console.log(boxOfDivs[2].textContent);

const logTextContent = (classOrIdName) => {
  const target = document.querySelector(classOrIdName);
  console.log(target.textContent);
};

logTextContent('.green-bg');
logTextContent('#middle-div');

// Change content
firstDiv.textContent = 'This content comes from JavaScript';

// Add item
  // First step

  const createdElement = document.createElement('div');
  createdElement.textContent = 'Created via JavaScript';

  // Second step
  const sectionElement = document.querySelector('section');
  sectionElement.appendChild(createdElement);

// Change style
secondDiv.style.backgroundColor = 'black';
