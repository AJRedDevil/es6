// We have an object with computers. And what we want to know,
// HOW many computer we have with MAC and how many with WINDOWS.

const computers = [{
    type: 'Laptop',
    price: 124,
    os: 'Windows'
  },
  {
    type: 'Desk',
    price: 124,
    os: 'Mac'
  },
  {
    type: 'Desk',
    price: 124,
    os: 'Windows'
  },
  {
    type: 'Laptop',
    price: 124,
    os: 'Mac'
  },
  {
    type: 'Laptop',
    price: 124,
    os: 'Windows'
  },
];

const osTypes = computers.reduce(function(start, item){
  return item.os === 'Mac'
    ? {mac: start.mac + 1, windows: start.windows}
    : {mac: start.mac, windows: start.windows + 1}

  // if (item.os === 'Mac') {
  //   return {mac: start.mac + 1, windows: start.windows}
  // } else {
  //   return {mac: start.mac, windows: start.windows + 1}
  // }
}, {mac: 0, windows:0});

console.log(osTypes);