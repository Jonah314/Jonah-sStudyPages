import React from "react";
import "../../Styles/mainContentCSS.css";

function JavaScriptArraysPage() {
  return (
    <main className="styling">
      <h1>JavaScript Arrays</h1>

      <p>
        In JavaScript, an <strong>array</strong> is a special type of object used to store multiple values in a single variable. Arrays allow you to organize and manipulate collections of data efficiently.
      </p>

      <h2>Creating Arrays</h2>
      <p>You can create arrays using square brackets:</p>

      <pre className="greyBox">
        <code>{`let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "Hello", true];`}</code>
      </pre>

      <h2>Accessing Array Elements</h2>
      <p>Use the index (starting at 0) to access array elements:</p>

      <pre className="greyBox">
        <code>{`console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Orange`}</code>
      </pre>

      <h2>Common Array Methods</h2>
      <ul>
        <li><code>push()</code> – Add an element to the end</li>
        <li><code>pop()</code> – Remove the last element</li>
        <li><code>shift()</code> – Remove the first element</li>
        <li><code>unshift()</code> – Add an element to the beginning</li>
        <li><code>length</code> – Get the number of elements</li>
        <li><code>slice()</code> – Get a part of the array</li>
        <li><code>splice()</code> – Add or remove elements at a specific index</li>
        <li><code>forEach()</code> – Loop through each element</li>
      </ul>

      <h2>Array Example</h2>
      <pre className="greyBox">
        <code>{`let colors = ["Red", "Green", "Blue"];
colors.push("Yellow");      // ["Red", "Green", "Blue", "Yellow"]
colors.pop();               // ["Red", "Green", "Blue"]
console.log(colors.length); // Output: 3

colors.forEach(color => {
  console.log(color);
});`}</code>
      </pre>

      <h2>Why Arrays Matter</h2>
      <p>
        Arrays are fundamental in JavaScript because they allow you to:
      </p>
      <ul>
        <li>Store lists of data</li>
        <li>Loop through items efficiently</li>
        <li>Perform calculations or transformations on data</li>
        <li>Work with functions that require multiple values</li>
      </ul>

      <h2>Quick Summary</h2>
      <ol>
        <li>Arrays store multiple values in a single variable</li>
        <li>Access elements using their index</li>
        <li>Use methods like <code>push</code>, <code>pop</code>, and <code>forEach</code> to manipulate arrays</li>
        <li>Arrays can hold any type of data, including other arrays</li>
      </ol>
    </main>
  );
}

export default JavaScriptArraysPage;
