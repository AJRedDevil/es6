const products = [
  {
    name: 'Iphone',
    price: 200
  }, {
    name: 'Motorola',
    price: 70
  }, {
    name: 'Samsung',
    price: 150
  }, {
    name: 'Sony',
    price: 98
  }, {
    name: 'Windows pone',
    price: 10
  }
];

// We want to loop the array and print a div with the name and price,
// and if it is less than 100 bucks, we want to show an ON SALE.

let template='';

products.forEach(function(product){
  function discount() {
    if(product.price < 100) {
      return `<span>On sale!!</span>`
    }
    return ''
  }
  
  template += `
    <div class="product">
      <h1>${product.name}</h1>
      ${discount()}
      <strong>Price: $ ${product.price}</strong>
    </div>
  `;
});

document.body.insertAdjacentHTML('afterbegin', template)