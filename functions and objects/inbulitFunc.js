/*kei lai kei hannu paryo vane ...like......
to uppercase
arpit.toUpperCase();
arpit.trim();*/
let name = "   arpit    "
console.log('trim garr>>', name.trim())

// split changes strings to arrays // if empty then arrays else seoerate //eslay seperate handinxa
 //split garesi jasle split gareko tyo khali hunxa cos we have splitted 
//baki chai arkai string ko rup ma auxa
let bands = 'radiohead, pinkfloyd, joydiv'
console.log('to arrays>>', bands.split(','))

//typeof checks the type of datatype
let  a= true
console.log("k ho ta>>", typeof(a))

let obj = {
    price: 1,
    ht: 2,
    model: function camera(name){ 
        //return 'cannon camera'
        console.log('my camera model is>>', name)
    }
}
console.log(obj.model('njdnk'))
console.log('camera kiniyo')

function contact(details){
    console.log('yer detail is>>', details)
}
contact({
    name: "wjhdj",
    age: 232
})
