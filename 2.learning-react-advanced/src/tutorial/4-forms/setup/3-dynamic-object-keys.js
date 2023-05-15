// ADDING OBJECT KEYS USING BRACKET [] NOTATION

// dot notation
const person = {
    name: 'john',
};

console.log(person.name); // john
person.age =  25;
console.log(person); // { name: 'john', age: 25}

// USING SQUARE BRACKET NOTATION

const items = {
    'featured-items': ['item1', 'item2'],
};

console.log(items['featured-items']); // ['item1', 'item2']
console.log(person['name']); // john

// SETTING UP OBJECT KEYS DYNAMICALLY USING BRACKET NOTATION
// When adding a new property to an object using the bracket notation, the value that is 
// set as a property only acts as a place holder for another value .Its not direct like
// person.age =  25; - where age becomes the key property directly, with bracket notation
// age is just a placeholder whose value must be defined somewhere before its use, as show below

let appState = 'loading'; // defining object key placeholder and its key value
appState = 'error';
const keyName = 'computer';

const app = {
    [appState]: true, // appState is presenting error hence, error: true & not appState: true
}

app[keyName] = 'apple'; // keyName now has value of apple and is inserted in object as keyName
console.log(app);  //  error: true & not appState: true


// CHANGING OBJECT KEYS EXAMPLE
const state = {
    loading: true,
    name: '',
    job: ''
}

console.log(state);

// Function to update values of object keys of dynamically - changing value of name which
// is '' to 'Simon' and job which is '' to 'developer'
function updateState (key, value){
    state[key] = value;
    // state.key = value; // dot notation can not change object key values dynamically
    // Looping through abject keys requires use of bracket notation to changes corresponding values
}

updateState('name', 'Simon'); // changing value of name to Simon
updateState('job', 'Developer'); // changing value of job to Developer
console.log(state);

// Create a new key value pair to insert in the object
updateState('products', []);
console.log(state);






