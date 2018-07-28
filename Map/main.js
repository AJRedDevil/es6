// We have a list of cars with a brand and a price,
// and need to create a new array,
// convert the price to a different currency,
// and return a string like “Ford is 40000 rupies”.

const cars = [{
    name: 'Ford',
    price: 200
  },
  {
    name: 'Nissan',
    price: 400
  },
  {
    name: 'Nissan',
    price: 600
  }
]

function convertCurrency(price) {
  return price * 200;
}

const price = cars.map(function(car){
  return `${car.name} is ${convertCurrency(car.price)} rupies`;
});

console.log(price);