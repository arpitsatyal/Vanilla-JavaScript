//to clone objects
var obj = { a: 1, b: 2, c: { d: 3 } }
var objclone = Object.assign({}, obj)
objclone.a = 3
objclone.c.d = 5
console.log('obj>>', obj, 'objclone>>', objclone)

//it does shallow copy (nested ma reflect huncha)