const todos = [
    {text: 'play', author:'hero'},
    {text:'dance', author:'zero'}
]

let json = JSON.stringify(todos)

localStorage.setItem('todos', json)

const parsed = localStorage.getItem('todos')
console.log(JSON.parse(parsed))


localStorage.clear()
