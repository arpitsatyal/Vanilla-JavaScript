const products = [
{name: 'gold star', price:30},
{name: 'green shell', price: 10},
{name: 'red shell', price: 40},
{name: 'banana skin', price: 5},
{name:'mushroom', price: 50}
]

let saleProduct = products.filter(product => product.price > 20 )
.map(product => `the ${product.name} is ${product.price / 2} rupees.`) 
console.log(saleProduct)

// mappedProduct = filteredProduct.map(product => {
// 	return  `the ${product.name} is ${product.price / 2} rupees.`
// }) 
// console.log(mappedProduct)
