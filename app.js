name = 'Michelle';
var name;
console.log(name);

setName();
function setName(){
    var name = 'Michelle';
    console.log(name);
};

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = ( a + b) / 2;
    return answer;

};

let fruits = ['apple', 'strawberry', 'mango']
function printFruits() {
    let favFruit = fruits[1];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        //console.log(leastFavFruit);
    }
    printFavFruit();
}

printFruits();
let leastFavFruit = fruits[2];

greeter();
function greeter(){
    console.log('Hello ' + (name) + '!')
};
bye();
function bye(){
    var friend = 'Felicia'
    console.log('Bye ' + (friend) + '! 👋')
}