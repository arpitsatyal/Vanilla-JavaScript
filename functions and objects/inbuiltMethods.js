// inbuilt methods
// those methods(function ) that already exist in JS we only have to use it

setTimeout(fn,timer);
console.log() // print

// string
var ram = '   I Am Ram   ';
console.log('length >>>', ram.length);
console.log('upper case >>', ram.toUpperCase());
console.log('lowe case >>', ram.toLowerCase());

var trim = 'something';
console.log('trim >>>', trim);
console.log('char at ', trim.charAt(0));
// sub string
// trim  I Am Ram 
console.log('sub string >>', trim.substr(1, 5))
console.log('sub string >>', trim.substring(1, 5))

// 4444 true
console.log('to string', String(true));
// type conversion
var hobbies = 'singing and dAncing,swimming';
console.log('into array >>>', hobbies.split('A'))

// checking data type
var type = typeof(true);
console.log('type is >>', type);

// number

var num = 123;
console.log('to fixed decimal point',num.toFixed(2));
console.log('int only >>',parseInt(num));
console.log('float only >>>',parseFloat(num));

console.log('parse Int >>>',parseInt('sdklfjd'));
console.log('is nan true',isNaN('sdklfjd'));
console.log('is nan false',isNaN('3333'));
// type conversion
console.log("explicit coercion",Number('sdf'));
console.log('is finite',isFinite(num))
coercion 


// Object
var obj = {
    name: 'ram',
    address: 'tinkune',
    phone: 43444,
    email: '',
    ram:'hi'
};
console.log('has property >>', obj.hasOwnProperty('names'));

console.log('values only >>', Object.values(obj));
console.log('keys only >>', Object.keys(obj));
// type conversion
// object to string
var asString = JSON.stringify(obj);
console.log('orginal >>', obj);
console.log('as string >>', asString);
console.log('prase string data >>', JSON.parse(asString))

// loop(iteration)
// repeated of action untill certain condition is meet

// for in loop
for (var ram in obj) {
    // console.log('called');
    console.log('key as ram >>>', ram);
    console.log('value >>>', obj[ram]);
}
function sendMail(details) {

    ifa ('email' in details) {
        console.log('exist')
    } else {
        console.log('doesnot exist');
    }
}
sendMail(obj);

// date related methods
// new Date() // date related task