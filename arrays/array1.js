//finding index of elements
let bands = ["yes", "rush", "kingC", "focus", "yes", "rush", "kingC", "focus"]
let index = bands.indexOf("rush");
let lIndex = bands.lastIndexOf("rush") //last index le last bata count garne HAINA. same elements vako bela use hunchha
console.log(index)
console.log(lIndex)
console.log(bands.length)

//object ma naya property halne way

obj = {
    band: "rem",
    worstAlbum: "document",
    bestSong: "perfect circle"
}
obj.bestmember = "stipe"
console.log("what comes out>>", obj)

//unshift - adds at first
//shift - removes from first
//push - adds to last
//pop - removes from last

let dpBands = ["beach house", "slowdive", "fishmans"]
let first = dpBands.shift();
console.log("removed ", first)
console.log("bands after shift", dpBands)

//SPLICE = TO REMOVE, BUT CAN ALSO ADD in between
//remove using splice
//to find index --- arrayname.indexOf(element)
let progBands = ["porcupine tree", "pink floyd", "opeth", "tool", "yes"]
let indexOfopeth = progBands.indexOf("opeth")
progBands.splice(indexOfopeth, 1)                                                  
console.log("bands now", progBands)                                                 
                                                                                    
let abc = ['a', 'sd', 'ds', 'dss']
let toJoin = abc.join(' nepal ')
let toString = abc.toString('') //to string le comma le jordincha
console.log(toString)
console.log(toJoin)

//how to check if it is array or not? - use Array.isArray(array name)
let arr = []
console.log("k array ho ta >>", Array.isArray(arr))

//reducing arrays ---- reduces all the elements into single value -- could be string,number or arrays
//syntax -- array.reduce(function(total/previous, currentValue, currentIndex, arr), initialValue) /.only total and current require other optional
const number = [1, 2, 3, 4]
let s = number.reduce(function (prev, current) {
    return prev + current
}, 0)
console.log(s)

let assh = [1,2,3,4];
    let bs = [];
    /*for(let i=0; i<as.length;i++){
        bs.push(as[i])
    }
    console.log(bs)*/

var i =0;
while(i<=assh.length){
    bs.push(assh[i])
    i++;
}
console.log(bs)


