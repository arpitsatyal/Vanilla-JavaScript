function Arpit(band, film, sport) {
    this.band = band
    this.film = film
    this.sport = sport
}
Arpit.prototype.hobby = function () {
    console.log(`${this.band} + walkin + hockey`)

}
let a = new Arpit('rem', 'taxi driver', 'cricket')
let b = new Arpit('the national', 'exorcist', 'football')
a.hobby()
console.log(a.hobby())


