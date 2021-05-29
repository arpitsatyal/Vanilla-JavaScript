var phones = [{
    name: 's10',
    brand: 'samsung',
    color: 'silver',
    price: '20',
    ram: '8gb'
}, {
    name: 'i phone',
    brand: 'apple',
    color: 'white',
    price: '25',
    ram: '6gb'
}, {
    name: 'one plus',
    brand: 'one plus',
    color: 'black',
    price: '30',
    ram: '8gb'
}, {
    name: 'nokia 6',
    brand: 'nokia',
    color: 'black',
    price: '30',
    ram: '6gb'
}, {
    name: 'redmi',
    brand: 'xaomi',
    color: 'silver',
    price: '20',
    ram: '8gb'
}]

phones.map(function(item, i) {
    if (item.color == 'black' && item.ram == '8gb') {
        item.status = 'sold';
    }
});
console.log('phones >>>', phones);

phones.forEach(function(item, i) {
    if (item.status == 'sold') {
        phones.splice(i, 1);
    }
})
console.log('phones after splcie >>>', phones);
