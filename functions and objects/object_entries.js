//each key value pair in an array inside another array
const object1 = {
  a: 'somestring',
  b: 42
};

console.log(Object.entries(object1)
.map(([key, val]) => `key is ${key}, val is ${val}`)
)