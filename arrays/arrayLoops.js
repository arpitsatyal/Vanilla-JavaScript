//loops in arrays - FOR EACH, MAP, FILTER, EVERY
//FOR EACH - pratek ko lagi
//syntax -- array.forEach(function(currentValue, index, arr), thisValue) -- only first value is required other optional
bands = ["muse", "coldplay", "imagine dragons", "green day"]
bands.forEach(function(item, i){ //using callback //pratek array ko element ko lagi euta callback function
//console.log("ma sabai element ko lagi invoke hunchhu")
console.log("item is>>", item)
console.log("index is>>", i)
})
let phones = [{
    model: "s7",
    company: "samsung",
    price: "60",
    ram: "6gb"
},
{
    model: "y6",
    company: "hwaweii",
    price: "30",
    ram: "4gb"
}, 
{
    model: "abc",
    company: "nokia",
    price: "10",
    ram: "1gb"
}, 
{
    model: "iphone",
    company: "apple",
    price: "70",
    ram: "8gb"
},{
    model: "s7",
    company: "samsung",
    price: "60",
    ram: "6gb"
},
{
    model: "y6",
    company: "hwaweii",
    price: "30",
    ram: "4gb"
}, 
{
    model: "abc",
    company: "nokia",
    price: "10",
    ram: "1gb"
}, 
{
    model: "iphone",
    company: "apple",
    price: "70",
    ram: "8gb"
}
]
//arrayname.foreach
phones.forEach(function(item,i){  //item means array ko element which in this case is an object, so item renofers to object
    // console.log(item.model) //cos out array element is an object so accessing like key.value
    // console.log(item.price)
    item.status = "available" //here mutation happens
})
console.log(phones)
//filter loop -  picks specific 
let eightGb = phones.filter(function(item, i){
    if(item.ram == '8gb')
        return item;
})
console.log(eightGb)
let expPhone = eightGb.filter(function(item,i){
    if(item.price = 50)
    return item
})
console.log(expPhone)
phones.map(function(item,i){
    if(item.ram == '8gb' && item.price == 50)
        item.status = 'sold'
})
console.log('>>' ,phones)
phones.forEach(function(item, i){
    if(item.status == 'sold'){
        phones.splice(i, 1)
    }
})
console.log('afteer splice>>', phones)

