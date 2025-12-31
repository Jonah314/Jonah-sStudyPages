import React from "react";
import "../../Styles/mainContentCSS.css";

function JsControlFlowPage() {
  return (
    <main className="styling">
      <h1>JavaScript Control Flow</h1>

      <p>
        <strong>Control flow</strong> determines the order in which statements
        are executed in a program. It allows you to make decisions, repeat tasks,
        and respond to different conditions.
      </p>

      <h2>Conditional Statements</h2>
      <p>
        Conditional statements let your code make decisions based on certain
        conditions.
      </p>

      <h3>if Statement</h3>
      <pre className="greyBox">
        <code>{`let age = 18;

if (age >= 18) {
  console.log("You are an adult");
}`}</code>
      </pre>

      <h3>if...else Statement</h3>
      <pre className="greyBox">
        <code>{`let age = 16;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}`}</code>
      </pre>

      <h3>if...else if...else</h3>
      <pre className="greyBox">
        <code>{`let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}`}</code>
      </pre>

      <h3>switch Statement</h3>
      <p>
        The <code>switch</code> statement lets you handle multiple conditions
        more cleanly than multiple <code>if...else</code> blocks.
      </p>
      <pre className="greyBox">
        <code>{`let day = 2;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}`}</code>
      </pre>

      <h2>Loops</h2>
      <p>
        Loops allow you to repeat a block of code multiple times.
      </p>

      <h3>for Loop</h3>
      <pre className="greyBox">
        <code>{`for (let i = 1; i <= 5; i++) {
  console.log(i);
}`}</code>
      </pre>

      <h3>while Loop</h3>
      <pre className="greyBox">
        <code>{`let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}`}</code>
      </pre>

      <h3>do...while Loop</h3>
      <pre className="greyBox">
        <code>{`let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);`}</code>
      </pre>

      <h2>break and continue</h2>
      <p>
        You can control loops using <code>break</code> to exit early or
        <code>continue</code> to skip to the next iteration.
      </p>

      <pre className="greyBox">
        <code>{`for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skip 3
  if (i === 5) break;    // Stop loop at 5
  console.log(i);
}`}</code>
      </pre>

      <h2>Summary of Control Flow</h2>
      <ul>
        <li><strong>if / else if / else:</strong> Conditional execution</li>
        <li><strong>switch:</strong> Handle multiple discrete conditions</li>
        <li><strong>for / while / do...while:</strong> Repeating code (loops)</li>
        <li><strong>break:</strong> Exit a loop early</li>
        <li><strong>continue:</strong> Skip to the next iteration</li>
      </ul>

      <p>
        Mastering control flow is essential for building dynamic and responsive
        programs in JavaScript.
      </p>
    </main>
  );
}

export default JsControlFlowPage;
