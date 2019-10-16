let clock = document.querySelector('.clock')

function tick() {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const seconds = now.getSeconds()

    const html = `<span>${hour}</span>:
    <span>${minute}</span>:
    <span>${seconds}</span>`
    clock.innerHTML = html
}

setInterval(tick, 1000)
