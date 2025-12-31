import React from "react";
import "../../Styles/mainContentCSS.css";

function TypeScriptHomePage() {
  return (
    <main className="styling">
      <h1>Introduction to TypeScript</h1>

      <p>
        <strong>TypeScript</strong> is a superset of JavaScript that adds 
        <strong> static typing</strong> to the language. It allows developers 
        to catch errors early and write more maintainable code.
      </p>

      <h2>Why TypeScript?</h2>
      <p>TypeScript improves JavaScript development in several ways:</p>
      <ul>
        <li>Detects errors during development instead of runtime</li>
        <li>Provides autocompletion and better editor support</li>
        <li>Makes code easier to read and maintain</li>
        <li>Supports modern JavaScript features and compiles down to plain JavaScript</li>
      </ul>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Static Typing:</strong> Declare types for variables, function parameters, and return values</li>
        <li><strong>Interfaces:</strong> Define the shape of objects</li>
        <li><strong>Classes:</strong> Full support for object-oriented programming</li>
        <li><strong>Generics:</strong> Create reusable and type-safe components</li>
        <li><strong>Modules:</strong> Organize code into separate files</li>
      </ul>

      <h2>TypeScript vs JavaScript</h2>
      <p>TypeScript builds on JavaScript:</p>
      <ul>
        <li>All valid JavaScript code is also valid TypeScript</li>
        <li>TypeScript adds type annotations, interfaces, and more</li>
        <li>TypeScript code is compiled (transpiled) into plain JavaScript before running in the browser or Node.js</li>
      </ul>

      <h2>Example: Basic Type Annotations</h2>
      <pre className="greyBox">
        <code>{`let username: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;

function greet(name: string): void {
  console.log("Hello, " + name);
}

greet(username);`}</code>
      </pre>

      <h2>Getting Started</h2>
      <p>
        To use TypeScript, you can install it via npm:
      </p>
      <pre className="greyBox">
        <code>{`npm install -g typescript
tsc yourFile.ts`}</code>
      </pre>

      <p>
        TypeScript is widely used in modern web development, especially in frameworks like 
        <strong> Angular</strong>, <strong>React</strong>, and <strong>Node.js</strong>.
      </p>

      <p>
        Learning TypeScript will help you write safer, cleaner, and more scalable JavaScript applications.
      </p>
    </main>
  );
}

export default TypeScriptHomePage;
