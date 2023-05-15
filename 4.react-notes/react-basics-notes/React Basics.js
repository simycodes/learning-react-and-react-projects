ReactDom.render(
  <h1>Hello World</h1>
  document.getElementById('button');
);

React uses one main function called render(); and a main class called ReactDom which holds the render function

========

This is called JSX,-below 
const element = <h1>Hello, world!</h1>;   ---parentheses () can be added for easy readability or not added

JS Variable being initialised to html elements
JSX produces React “elements”.We recommend using it with React to describe what the UI should look like

--This is similar to php (variable) being initialised to html elements (with no quotes being used)
$_SESSION['delete'] ="<div class='success'>Admin Deleted Successfully</div>";

==========

JS in action

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);


Another Example - JS variable initialised to html and js function 

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrappingit in parentheses () to avoid the pitfalls of automatic semicolon insertion.

============

other JSX examples

const element = <img src={user.avatarUrl}></img>;
const element = <div tabIndex="0"></div>;

JSX tags may contain children:
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);


========

NOTE:
The adding of a JS variable or function in html code that is then initialised to another JS variable is similar to php (but in
php no  {} are used but dot and varibale name.Example in difference is below

const element = <h1>Hello, {name}</h1>;
$destination_path ="../images/category".$image_name;	


==========

NOTE:On syntax 
These two examples are identical:

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

and

// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

When wriiten like this,The above JSX variable cecomes an object called “React element”.
You can think of it as descriptions of what you want to see on the screen.
React reads these objects and uses them to construct the DOM and keep it up to date.

props:refers to html/css classes as to className and html innerHTML as children

=================================





=======================================
MINI REACT PROGRAMS

PROGRAM 1

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);


==========================
PROGRAM 2


