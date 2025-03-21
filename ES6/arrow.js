let abc = (name) => {
  return `hey there ${name} `; //backticks = literals
  //return "hey there" + " " + name
};
console.log(abc("arpit"));

let cde = (home) => `welcome to ${home} `;
console.log(cde("nepal"));

var names = "shd";
function name(names) {
  console.log(names);
}

function bands(name) {
  let aaaa = "jd";
  function movies(watch) {
    return "i listen to " + name + "and watch" + watch;
  }
  return movies;
}
var boy = bands("rem");
boy("taxi driver 1976");
