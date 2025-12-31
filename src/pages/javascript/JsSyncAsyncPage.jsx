import React from "react";
import "../../Styles/mainContentCSS.css";

function JsSyncAsyncPage() {
  return (
    <main className="styling">
      <h1>Synchronous vs. Asynchronous JavaScript</h1>

      <p>
        JavaScript can execute code in two ways: <strong>synchronously</strong> 
        or <strong>asynchronously</strong>. Understanding the difference is essential 
        for handling tasks, events, and API requests.
      </p>

      <h2>Synchronous JavaScript</h2>
      <p>
        Synchronous code is executed <strong>line by line</strong>, in the order it appears. 
        Each operation must finish before the next one starts.
      </p>

      <pre className="greyBox">
        <code>{`console.log("Start");
console.log("Middle");
console.log("End");

// Output:
// Start
// Middle
// End`}</code>
      </pre>

      <p>
        In synchronous code, long-running tasks (like loops or file processing) 
        can block other operations until they finish.
      </p>

      <h2>Asynchronous JavaScript</h2>
      <p>
        Asynchronous code allows some operations to run in the background, 
        so the program can continue without waiting for them to complete.
      </p>

      <pre className="greyBox">
        <code>{`console.log("Start");

setTimeout(() => {
  console.log("Async operation finished");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Async operation finished (after 2 seconds)`}</code>
      </pre>

      <h2>Common Asynchronous Patterns</h2>
      <ul>
        <li><strong>setTimeout / setInterval:</strong> Delay execution or repeat tasks</li>
        <li><strong>Promises:</strong> Represent a value that may be available now, later, or never</li>
        <li><strong>Async/Await:</strong> Syntax for writing asynchronous code that looks synchronous</li>
        <li><strong>AJAX / Fetch API:</strong> Make network requests without blocking the page</li>
      </ul>

      <h2>Example Using Promises</h2>
      <pre className="greyBox">
        <code>{`const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received!");
  }, 2000);
});

fetchData.then((result) => console.log(result));

console.log("This runs before data is received");

// Output:
// This runs before data is received
// Data received! (after 2 seconds)`}</code>
      </pre>

      <h2>Example Using Async/Await</h2>
      <pre className="greyBox">
        <code>{`function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data received!");
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
console.log("This runs first");

// Output:
// This runs first
// Data received!`}</code>
      </pre>

      <h2>Summary</h2>
      <ul>
        <li><strong>Synchronous:</strong> Executes code line by line, blocking the next operation until the current one finishes</li>
        <li><strong>Asynchronous:</strong> Executes tasks in the background, allowing the main code to continue running</li>
        <li>Use <code>Promises</code> and <code>async/await</code> for cleaner asynchronous code</li>
        <li>Asynchronous programming is essential for handling APIs, timers, and events efficiently</li>
      </ul>

      <p>
        Understanding synchronous and asynchronous behavior is critical for building 
        responsive and efficient JavaScript applications.
      </p>
    </main>
  );
}

export default JsSyncAsyncPage;
