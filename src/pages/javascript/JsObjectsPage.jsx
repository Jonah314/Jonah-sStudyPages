import React from "react";
import "../../Styles/mainContentCSS.css";

function JsObjectsPage() {
  return (
    <main className="styling">
      <h1>JavaScript Objects</h1>

      <p>
        <strong>Objects</strong> in JavaScript are collections of key-value
        pairs. They allow you to store and organize data in a structured way.
      </p>

      <h2>Creating Objects</h2>
      <p>Objects can be created using curly braces:</p>
      <pre className="greyBox">
        <code>{`let person = {
  name: "Alice",
  age: 25,
  isStudent: true
};`}</code>
      </pre>

      <h2>Accessing Properties</h2>
      <p>There are two main ways to access properties of an object:</p>
      <pre className="greyBox">
        <code>{`console.log(person.name);  // "Alice"
console.log(person["age"]);   // 25`}</code>
      </pre>

      <h2>Adding and Updating Properties</h2>
      <p>You can add new properties or update existing ones:</p>
      <pre className="greyBox">
        <code>{`person.gender = "female";  // add new property
person.age = 26;                 // update property`}</code>
      </pre>

      <h2>Deleting Properties</h2>
      <p>Properties can be removed using the <code>delete</code> operator:</p>
      <pre className="greyBox">
        <code>{`delete person.isStudent;`}</code>
      </pre>

      <h2>Nested Objects</h2>
      <p>Objects can contain other objects or arrays:</p>
      <pre className="greyBox">
        <code>{`let student = {
  name: "Bob",
  grades: {
    math: 90,
    english: 85
  }
};

console.log(student.grades.math); // 90`}</code>
      </pre>

      <h2>Object Methods</h2>
      <p>Objects can also contain functions, called methods:</p>
      <pre className="greyBox">
        <code>{`let person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // "Hello, Alice"`}</code>
      </pre>

      <h2>Iterating Over Objects</h2>
      <p>You can loop through object properties using <code>for...in</code>:</p>
      <pre className="greyBox">
        <code>{`for (let key in person) {
  console.log(key + ": " + person[key]);
}`}</code>
      </pre>

      <h2>Common Object Methods</h2>
      <ul>
        <li><code>Object.keys(obj)</code> – Returns an array of property names</li>
        <li><code>Object.values(obj)</code> – Returns an array of property values</li>
        <li><code>Object.entries(obj)</code> – Returns an array of [key, value] pairs</li>
        <li><code>Object.assign(target, source)</code> – Copies properties from one object to another</li>
      </ul>

      <p>
        Objects are fundamental in JavaScript for storing complex data,
        creating structured programs, and working with real-world entities.
      </p>
    </main>
  );
}

export default JsObjectsPage;
