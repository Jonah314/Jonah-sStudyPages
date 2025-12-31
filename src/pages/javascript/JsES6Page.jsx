import React from "react";
import "../../Styles/mainContentCSS.css";

function JsES6Page() {
  return (
    <main className="styling">
      <h1>JavaScript ES6 (ECMAScript 2015)</h1>

      <p>
        <strong>ES6</strong> (ECMAScript 2015) introduced many new features to JavaScript, 
        making code cleaner, shorter, and easier to work with.
      </p>

      <h2>let and const</h2>
      <p>ES6 introduced <code>let</code> and <code>const</code> for variable declarations.</p>
      <pre className="greyBox">
        <code>{`let name = "Alice";  // Can be reassigned
const age = 25;           // Cannot be reassigned`}</code>
      </pre>

      <h2>Arrow Functions</h2>
      <p>Arrow functions provide a shorter syntax for writing functions:</p>
      <pre className="greyBox">
        <code>{`// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;`}</code>
      </pre>

      <h2>Template Literals</h2>
      <p>Template literals allow embedding variables and expressions in strings:</p>
      <pre className="greyBox">
        <code>{`const name = "Alice";
const message = \`Hello, \${name}!\`;
console.log(message); // "Hello, Alice!"`}</code>
      </pre>

      <h2>Default Parameters</h2>
      <p>You can assign default values to function parameters:</p>
      <pre className="greyBox">
        <code>{`function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet();        // "Hello, Guest"
greet("Alice"); // "Hello, Alice"`}</code>
      </pre>

      <h2>Destructuring</h2>
      <p>Destructuring allows you to extract values from arrays or objects:</p>
      <pre className="greyBox">
        <code>{`// Array destructuring
const [a, b] = [10, 20];
console.log(a, b); // 10 20

// Object destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age); // "Alice" 25`}</code>
      </pre>

      <h2>Spread and Rest Operators</h2>
      <p>The <code>...</code> operator can expand or gather elements:</p>
      <pre className="greyBox">
        <code>{`// Spread operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]

// Rest operator
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6`}</code>
      </pre>

      <h2>Modules</h2>
      <p>ES6 introduced <strong>modules</strong> to organize code:</p>
      <pre className="greyBox">
        <code>{`// export.js
export const pi = 3.14;

// import.js
import { pi } from './export.js';
console.log(pi); // 3.14`}</code>
      </pre>

      <h2>Classes</h2>
      <p>ES6 introduced a cleaner syntax for creating objects with classes:</p>
      <pre className="greyBox">
        <code>{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // "Hello, my name is Alice"`}</code>
      </pre>

      <h2>Summary of ES6 Features</h2>
      <ul>
        <li><code>let</code> and <code>const</code> for block-scoped variables</li>
        <li>Arrow functions for shorter syntax</li>
        <li>Template literals for string interpolation</li>
        <li>Default parameters in functions</li>
        <li>Destructuring arrays and objects</li>
        <li>Spread <code>...</code> and rest <code>...</code> operators</li>
        <li>Modules for organizing code</li>
        <li>Classes for object-oriented programming</li>
      </ul>

      <p>
        ES6 modernized JavaScript and made it easier to write clean, maintainable,
        and powerful code.
      </p>
    </main>
  );
}

export default JsES6Page;
