function welcome(name){
    let inner = " to "
    let innerF = function innerFunc(location){
        let hi = "helo"
        let text = hi + " " + name + " " + "welcome" + inner + location
        return text
    }
    /*let innerRes = innerFunc('nepal') //this way memory is allocated
    console.log('>>', innerRes)
    return innerRes*/ 
    return innerF; //this way we save from unwanted memory allocation 

}
 let res = welcome('arpit')
console.log('>>', res('ktm')) //acessing closure fn outside the block ktm ta location ma patha ho ni ta

function makeAdjectifier(name){
    return function abc(string){
        return name + string
    }

} 
let abc = makeAdjectifier('arpit')
abc('cool')


