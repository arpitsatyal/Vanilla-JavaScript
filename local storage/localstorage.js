//datas in local storage are always converted to stirng
//store data
localStorage.setItem('name', 'arpit')
localStorage.setItem('age', '21')

// //get item
let name = localStorage.getItem('name')
let age = localStorage.getItem('age')
console.log('name:',name)
console.log('age:',age)

localStorage.clear()

console.log(localStorage.getItem('name'), localStorage.getItem('age'))

//update
localStorage.setItem('name', 'ram bahadur')
localStorage.age = 40

//deleting certain
localStorage.removeItem('age')

 