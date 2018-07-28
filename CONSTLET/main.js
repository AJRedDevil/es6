var cupcake = document.querySelector('.cupcake');
var container = document.querySelector('.orders');

var cupcakes = [
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

var randomCupcake;
var orderNumber = 0;
var baseAmount = 5;
var finalAmount;
var dicountID = 2;
var dicountAmount = 3;
var message

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