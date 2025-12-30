import React from "react";
import "../../Styles/mainContentCSS.css";

function JavaScriptScopePage() {
  return (
    <main className="styling">
      <h1>JavaScript Scope</h1>

      <p>
        In JavaScript, <strong>scope</strong> determines where a variable or function is accessible in your code. 
        Understanding scope is important to avoid errors and manage data effectively.
      </p>

      <h2>Types of Scope</h2>
      <ul>
        <li><strong>Global Scope:</strong> Variables declared outside any function or block are accessible anywhere in the code.</li>
        <li><strong>Local Scope / Function Scope:</strong> Variables declared inside a function are only accessible within that function.</li>
        <li><strong>Block Scope:</strong> Variables declared with <code>let</code> or <code>const</code> inside a block <code>{`{}`}</code> are only accessible within that block.</li>
      </ul>

      <h2>Global Scope Example</h2>
      <pre className="greyBox">
        <code>{`let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible
}

showGlobal();
console.log(globalVar); // Also accessible`}</code>
      </pre>

      <h2>Function (Local) Scope Example</h2>
      <pre className="greyBox">
        <code>{`function greet() {
  let message = "Hello!";
  console.log(message); // Accessible here
}

greet();
console.log(message); // Error: message is not defined`}</code>
      </pre>

      <h2>Block Scope Example</h2>
      <pre className="greyBox">
        <code>{`if (true) {
  let blockVar = "Inside block";
  const blockConst = "Also inside block";
  console.log(blockVar); // Accessible here
}
console.log(blockVar); // Error: blockVar is not defined
console.log(blockConst); // Error: blockConst is not defined`}</code>
      </pre>

      <h2>Var vs Let vs Const</h2>
      <ul>
        <li><code>var</code> – Function-scoped, can be redeclared</li>
        <li><code>let</code> – Block-scoped, cannot be redeclared in the same scope</li>
        <li><code>const</code> – Block-scoped, cannot be redeclared or reassigned</li>
      </ul>

      <h2>Why Scope Matters</h2>
      <p>
        Understanding scope helps you:
      </p>
      <ul>
        <li>Avoid naming conflicts</li>
        <li>Prevent unintended access to variables</li>
        <li>Write cleaner and more predictable code</li>
      </ul>

      <h2>Quick Summary</h2>
      <ol>
        <li>Global scope: accessible anywhere</li>
        <li>Function scope: accessible only inside the function</li>
        <li>Block scope: accessible only inside the block</li>
        <li>Use <code>let</code> and <code>const</code> to avoid accidental global variables</li>
      </ol>
    </main>
  );
}

export default JavaScriptScopePage;
