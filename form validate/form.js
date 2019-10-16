let form = document.querySelector('.signup-from')
let feedback = document.querySelector('.feed')

pattern = /^[a-z A-Z]{5,8}$/

form.addEventListener('submit', e => {
    e.preventDefault()
    let username = form.username.value
    if (pattern.test(username)) {
        feedback.textContent = 'valid username'
    } else {
        feedback.textContent = 'must be only between 5 and 8'
    }
})

form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value) same thing
    if (pattern.test(e.target.value)) {
        console.log('pas')
        form.username.setAttribute('class','success')

    } else {
        console.log('fuck')
        form.username.setAttribute('class','err')

    }
})
