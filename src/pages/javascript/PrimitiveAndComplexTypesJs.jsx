import React from "react";
import "../../Styles/mainContentCSS.css";

function PrimitiveAndComplexTypeJs() {
  return (
    <main className="styling">
      <h1>JavaScript Primitive and Complex Types</h1>

      <p>
        In JavaScript, values can be classified as <strong>primitive</strong> or
        <strong> complex (reference)</strong> types. Understanding these types is
        essential for working with variables, objects, and functions.
      </p>

      <h2>Primitive Types</h2>
      <p>
        <strong>Primitive types</strong> are simple data types that are immutable,
        meaning their value cannot be changed once created. Each variable holds its
        own copy of the value.
      </p>

      <ul>
        <li><code>string</code> – Text, e.g., <code>"Hello"</code></li>
        <li><code>number</code> – Numeric values, e.g., <code>42</code></li>
        <li><code>boolean</code> – True or false, e.g., <code>true</code></li>
        <li><code>null</code> – Empty or no value</li>
        <li><code>undefined</code> – Value not assigned</li>
        <li><code>symbol</code> – Unique identifiers</li>
        <li><code>bigint</code> – Large integers beyond Number limits</li>
      </ul>

      <pre className="greyBox">
        <code>{`let name = "Alice";      // string
let age = 25;                // number
let isStudent = true;        // boolean
let emptyValue = null;       // null`}</code>
      </pre>

      <h2>Complex (Reference) Types</h2>
      <p>
        <strong>Complex types</strong> are objects that store collections of values
        or more complex structures. Variables store a reference to the value, not
        the value itself.
      </p>

      <ul>
        <li><code>object</code> – Key-value pairs, e.g., <code>{`{name: "Alice"}`}</code></li>
        <li><code>array</code> – Ordered lists, e.g., <code>[1, 2, 3]</code></li>
        <li><code>function</code> – Reusable blocks of code</li>
        <li><code>date</code>, <code>regexp</code>, and other built-in objects</li>
      </ul>

      <pre className="greyBox">
        <code>{`let person = { name: "Alice", age: 25 };   // object
let numbers = [1, 2, 3];                        // array
function greet() { console.log("Hello!"); }    // function`}</code>
      </pre>

      <h2>Key Differences</h2>
      <ul>
        <li>Primitives store actual values; complex types store references</li>
        <li>Primitives are immutable; complex types can be modified</li>
        <li>Comparing primitives checks value; comparing objects checks reference</li>
      </ul>

      <h2>Why It Matters</h2>
      <p>
        Understanding the difference helps avoid bugs when copying or comparing
        values, passing data to functions, or manipulating arrays and objects.
      </p>
    </main>
  );
}

export default PrimitiveAndComplexTypeJs;
