let a = "welocme"
function music(listener){
    let guitar = 556
    let band = "gDay"
    console.log(a + " " + listener + " " + "you are lsitenig to" + " " + band )
    
}
music("arpit")

//aba chai closure

let b = "welcome"
function film(watcher){
    let actor = "de nerio"
    function filmName(name){  //closure //closure cannot be accessed globallly; only inside the parent function
        let film = "taxi driver"
        console.log(a + " " + watcher + " " + "u are watching" + " " + film )
    }
    filmName('taxi driver')
}
film("arpit")
