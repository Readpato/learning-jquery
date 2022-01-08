/// <reference types="jquery" />

const $header = $("h1");
console.log($header);
$header.text("Class 12 of r/Argentina Programa!");

// *If we send the console.log with our element and the function text
// *with no parameters, it will return the value.
console.log($header.text());

// * Modern JS: const $elements = document.querySelectorAll('#list li');

const $liElements = $("#list li");
console.log($liElements);

// *Modern JS
// document.querySelectorAll("#list li").forEach((li) => {
//   li.onclick = function () {
//     console.log("Click");
//   };
// });

// *jQuery

// $liElements.on("click", function(){
//     console.log("Click");
// });

// * Arrow functions do not have their own "this", thats why when the console.log happens
// * they return window to us.

// $liElements.on("click", () => {
//   console.log(this);
// });

// * Traditional function do have their own this
// * Thats why, when console logged, they will return their respective elements.

$liElements.on("click", function () {
  console.log(this); //<li>
  console.log($(this)); //jQuery<li>
  console.log($(this)[0]); // <li>
  console.log($(this).text("Hello There!")); // Changes text from the jquery<li> element.
  // The upper one transforms the HTMLElement(this) to a jQuery<HTMLElement>
});

// * Chaining

// *The chaining works because when the code that needs to be executed is done
// *It will return the jQuery Element and that allows us to run the next chained function.

$liElements.addClass("big-font").addClass("red");

// *Objects and this

const myObject = {
  sayHello() {
    console.log("Hello there!");
    return this;
  },
  sayGoodbye() {
    console.log("Goodbye!");
    return this;
  },
};

myObject.sayHello().sayGoodbye();

// *This works because each interaction with the functions returns the object "myObject" with the return this;

// *Links to read

// * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

fetch("https://google.com")
  .then((answer) => answer.json())
  .then((answer) => {
    console.log("I got the data");
  })
  .catch((error) => console.error("Failed", error));
