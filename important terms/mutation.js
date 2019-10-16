var test = 'i am brodway';
var test2 = test;
test2 = 'hello hello hello';
// test = 'i am infosys nepal';
console.log('test is >>', test);
console.log('test 2 is >>', test2);
// this behaviour is called immutable properties where
// if original value is changed it is not reflected to refrence and vice versa
// all the primitive data type ==> string,number, boolean,null ,undefined holds immutable properties

var hobbies = ['coding', 'debugging', 'testing'];
var hobbies2 = hobbies;


// hobbies[0] = 'singing';
hobbies2[1] = 'dancing';
console.log('hobbies >>> ', hobbies);
console.log('hobbies 2 >>> ', hobbies2);
// this behaviour is called mutable properties
// if original value is changed it is reflected in refrence and if refrence is changed orignal value is reflected
//  ARRAY and OBJECT are mutable properties

function sendMail(details) {
    // details 
    details.name = 'bikram';

}
var shyamObj = {
    name: 'hi',
    address: 'hello'
}
sendMail(shyamObj);
// shyamObj