const getData = () => {
    let counter = 0
    console.log('FETCHING DATA...', counter++)
}

const doSomeMagic = (fun, delay) => {
    var timer
    return () => {
        // clearTimeout prevents the function set with the setTimeout() to execute.
        // if delay has crossed then the getdata function will be called, else it will be cleared.
        clearTimeout(timer)
      timer = setTimeout(() => fun(), delay)
    }
}

const betterFunction = doSomeMagic(getData, 1000)

