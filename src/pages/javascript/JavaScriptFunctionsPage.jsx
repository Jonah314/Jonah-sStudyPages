import React from "react";
import "../../Styles/mainContentCSS.css";

function JavaScriptFunctionsPage() {
  return (
    <main className="styling">
      <h1>JavaScript Functions</h1>

      <p>
        In JavaScript, a <strong>function</strong> is a reusable block of code
        designed to perform a specific task. Functions help make code organized,
        reusable, and easier to read.
      </p>

      <h2>Why Use Functions?</h2>
      <ul>
        <li>Reuse code without rewriting it</li>
        <li>Break programs into smaller, manageable parts</li>
        <li>Pass data in and get results back</li>
        <li>Improve readability and maintainability</li>
      </ul>

      <h2>Function Declaration</h2>
      <p>A function can be declared using the <code>function</code> keyword:</p>

      <pre className="greyBox">
        <code>{`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!`}</code>
      </pre>

      <h2>Function Expression</h2>
      <p>Functions can also be defined as expressions and assigned to variables:</p>

      <pre className="greyBox">
        <code>{`const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8`}</code>
      </pre>

      <h2>Arrow Functions</h2>
      <p>ES6 introduced a shorter syntax using arrow functions:</p>

      <pre className="greyBox">
        <code>{`const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(4, 6)); // Output: 24`}</code>
      </pre>

      <h2>Parameters and Return Values</h2>
      <p>
        Functions can take <strong>parameters</strong> (input values) and return
        a value using <code>return</code>.
      </p>

      <pre className="greyBox">
        <code>{`function square(number) {
  return number * number;
}

console.log(square(5)); // Output: 25`}</code>
      </pre>

      <h2>Key Points</h2>
      <ul>
        <li>Functions are reusable blocks of code</li>
        <li>They can take input (parameters) and return output</li>
        <li>They can be declared in different ways (declaration, expression, arrow)</li>
        <li>Functions help keep code organized and easier to maintain</li>
      </ul>

      <h2>Why It Matters</h2>
      <p>
        Learning functions is essential because almost every JavaScript program
        relies on functions to handle tasks, calculations, and interactivity.
      </p>
    </main>
  );
}

export default JavaScriptFunctionsPage;
