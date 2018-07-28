const cupcake = document.querySelector('.cupcake');
const container = document.querySelector('.orders');

const cupcakes = [
  {
    id: 1,
    flavor: 'Strawberry'
  }, {
    id: 2,
    flavor: 'Apple'
  }, {
    id: 3,
    flavor: 'Banana'
  }
];

let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
let finalAmount;
const dicountID = 2;
const dicountAmount = 3;
let message

cupcake.addEventListener("click", function () {
  // Select a random cupcake
  randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

  // Increment the order number, we get a different order with each cupcake.
  orderNumber += 1;

  // Depending on the "dicountID" variable, this cupcake is on sale or not.
  finalAmount = dicountID == cupcakes[randomCupcake].id
    ? (baseAmount - dicountAmount)
    : baseAmount;

  // Create the message
  message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is ' + orderNumber + '</div>'
  container.insertAdjacentHTML('beforeend', message)

});