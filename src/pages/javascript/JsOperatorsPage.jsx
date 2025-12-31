import React from "react";
import "../../Styles/mainContentCSS.css";

function JsOperatorsPage() {
  return (
    <main className="styling">
      <h1>JavaScript Operators</h1>

      <p>
        <strong>Operators</strong> in JavaScript are symbols that perform operations
        on values. They allow you to perform calculations, compare values, and
        manipulate data.
      </p>

      <h2>Types of Operators</h2>
      <p>JavaScript has several types of operators:</p>
      <ul>
        <li>Arithmetic Operators</li>
        <li>Assignment Operators</li>
        <li>Comparison Operators</li>
        <li>Logical Operators</li>
        <li>String Operators</li>
        <li>Unary Operators</li>
        <li>Ternary Operator</li>
      </ul>

      <h2>Arithmetic Operators</h2>
      <p>Used to perform mathematical operations:</p>
      <pre className="greyBox">
        <code>{`let a = 10;
let b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0 (remainder)`}</code>
      </pre>

      <h2>Assignment Operators</h2>
      <p>Used to assign values to variables:</p>
      <pre className="greyBox">
        <code>{`let x = 10;   // Assignment
x += 5;         // x = x + 5
x -= 3;         // x = x - 3
x *= 2;         // x = x * 2
x /= 4;         // x = x / 4`}</code>
      </pre>

      <h2>Comparison Operators</h2>
      <p>Used to compare values:</p>
      <pre className="greyBox">
        <code>{`console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(10 != 5);    // true
console.log(10 > 5);     // true
console.log(5 <= 10);    // true`}</code>
      </pre>

      <h2>Logical Operators</h2>
      <p>Used to combine or invert boolean values:</p>
      <pre className="greyBox">
        <code>{`let a = true;
let b = false;

console.log(a && b); // false (AND)
console.log(a || b); // true  (OR)
console.log(!a);     // false (NOT)`}</code>
      </pre>

      <h2>String Operators</h2>
      <p>Used to combine strings:</p>
      <pre className="greyBox">
        <code>{`let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"`}</code>
      </pre>

      <h2>Unary Operators</h2>
      <p>Operate on a single value:</p>
      <pre className="greyBox">
        <code>{`let num = 5;
num++; // 6
num--; // 5
console.log(+num); // 5
console.log(-num); // -5`}</code>
      </pre>

      <h2>Ternary Operator</h2>
      <p>
        A shorthand for an <code>if-else</code> statement:
      </p>
      <pre className="greyBox">
        <code>{`let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"`}</code>
      </pre>

      <h2>Summary of Common Operators</h2>
      <ul>
        <li><code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> – Arithmetic</li>
        <li><code>=</code>, <code>+=</code>, <code>-=</code> – Assignment</li>
        <li><code>==</code>, <code>===</code>, <code>!=</code>, <code>&gt;</code> – Comparison</li>
        <li><code>&&</code>, <code>||</code>, <code>!</code> – Logical</li>
        <li><code>+</code> – String concatenation</li>
        <li><code>++</code>, <code>--</code>, <code>+</code>, <code>-</code> – Unary</li>
        <li><code>condition ? value1 : value2</code> – Ternary</li>
      </ul>

      <p>
        Understanding operators is essential for performing calculations,
        making decisions, and controlling program logic in JavaScript.
      </p>
    </main>
  );
}

export default JsOperatorsPage;
