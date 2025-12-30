import React from "react";
import "../../Styles/mainContentCSS.css";

function JavaScriptHomePage() {
  return (
    <main className="styling">
      <h1>Introduction to JavaScript</h1>

      <p>
        <strong>JavaScript</strong> is a programming language used to make web
        pages interactive and dynamic.
      </p>

      <h2>What Does JavaScript Do?</h2>
      <p>
        JavaScript allows you to control behavior on a web page. It can respond
        to user actions, update content, and communicate with servers.
      </p>

      <ul>
        <li>Handles user interactions</li>
        <li>Updates content without reloading pages</li>
        <li>Controls logic and behavior</li>
        <li>Adds interactivity to websites</li>
      </ul>

      <h2>JavaScript Basics</h2>
      <p>
        JavaScript code is written using <strong>statements</strong> and
        <strong> functions</strong>. It can run directly in the browser.
      </p>

      <pre className="greyBox">
        <code>{`let message = "Hello, world!";
console.log(message);`}</code>
      </pre>

      <h2>Common JavaScript Concepts</h2>
      <ul>
        <li><code>variables</code> – Store data values</li>
        <li><code>functions</code> – Reusable blocks of code</li>
        <li><code>events</code> – Respond to user actions</li>
        <li><code>conditions</code> – Make decisions in code</li>
        <li><code>loops</code> – Repeat tasks efficiently</li>
      </ul>

      <h2>JavaScript and the Web</h2>
      <p>
        JavaScript works with <strong>HTML</strong> for structure and
        <strong> CSS</strong> for styling to create complete web applications.
      </p>

      <p>
        Learning JavaScript is essential for building interactive and modern
        websites.
      </p>
    </main>
  );
}

export default JavaScriptHomePage;
