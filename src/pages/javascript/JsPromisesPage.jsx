import React from "react";
import "../../Styles/mainContentCSS.css";

function JsPromisesPage() {
  return (
    <main className="styling">
      <h1>JavaScript Promises</h1>

      <p>
        <strong>Promises</strong> are objects in JavaScript that represent the eventual 
        completion (or failure) of an asynchronous operation and its resulting value.
      </p>

      <h2>Why Use Promises?</h2>
      <p>
        Promises make it easier to handle asynchronous operations, like API requests or timers,
        without getting stuck in deeply nested callbacks (also called "callback hell").
      </p>

      <h2>Creating a Promise</h2>
      <pre className="greyBox">
        <code>{`const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed.");
  }
});`}</code>
      </pre>

      <h2>Using .then() and .catch()</h2>
      <p>
        Promises provide <code>.then()</code> for handling success and <code>.catch()</code> for handling errors.
      </p>
      <pre className="greyBox">
        <code>{`myPromise
  .then((message) => {
    console.log(message); // "Operation succeeded!"
  })
  .catch((error) => {
    console.error(error);
  });`}</code>
      </pre>

      <h2>Promise Example: Simulating an API Call</h2>
      <pre className="greyBox">
        <code>{`function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data received!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

console.log("Fetching data...");`}</code>
      </pre>

      <h2>Chaining Promises</h2>
      <p>
        You can chain multiple <code>.then()</code> calls to perform operations sequentially:
      </p>
      <pre className="greyBox">
        <code>{`fetchData()
  .then((data) => {
    console.log(data);
    return "Processing data...";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => console.error(err));`}</code>
      </pre>

      <h2>Promise.all()</h2>
      <p>
        <code>Promise.all()</code> lets you wait for multiple promises to complete:
      </p>
      <pre className="greyBox">
        <code>{`const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);

Promise.all([promise1, promise2])
  .then((results) => console.log(results)) // [10, 20]
  .catch((err) => console.error(err));`}</code>
      </pre>

      <h2>Summary</h2>
      <ul>
        <li>Promises represent the eventual result of an asynchronous operation.</li>
        <li><code>resolve()</code> – indicates success</li>
        <li><code>reject()</code> – indicates failure</li>
        <li><code>.then()</code> – handles successful completion</li>
        <li><code>.catch()</code> – handles errors</li>
        <li>Use <code>Promise.all()</code> to handle multiple promises together</li>
        <li>Chaining <code>.then()</code> makes sequential asynchronous operations easier to manage</li>
      </ul>

      <p>
        Promises are a fundamental part of modern JavaScript, especially when working with APIs, timers, and asynchronous code.
      </p>
    </main>
  );
}

export default JsPromisesPage;
