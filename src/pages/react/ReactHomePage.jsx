import React from "react";
import "../../Styles/mainContentCSS.css";

function ReactHomePage() {
  return (
    <main className="styling">
      <h1>Introduction to React</h1>

      <p>
        <strong>React</strong> is a JavaScript library used to build user
        interfaces, especially single-page applications.
      </p>

      <h2>What Does React Do?</h2>
      <p>
        React allows developers to create reusable UI components and efficiently
        update the user interface when data changes.
      </p>

      <ul>
        <li>Builds reusable components</li>
        <li>Updates the UI efficiently</li>
        <li>Manages application state</li>
        <li>Simplifies complex user interfaces</li>
      </ul>

      <h2>React Components</h2>
      <p>
        React applications are built using <strong>components</strong>. Each
        component represents a part of the user interface.
      </p>

      <pre className="greyBox">
        <code>{`function Welcome() {
  return <h1>Hello, React!</h1>;
}`}</code>
      </pre>

      <h2>Common React Concepts</h2>
      <ul>
        <li><code>JSX</code> – JavaScript syntax for writing UI</li>
        <li><code>components</code> – Building blocks of React apps</li>
        <li><code>props</code> – Data passed into components</li>
        <li><code>state</code> – Data managed within components</li>
        <li><code>hooks</code> – Add features like state and effects</li>
      </ul>

      <h2>React in Web Development</h2>
      <p>
        React works with <strong>JavaScript</strong>, <strong>HTML</strong>, and
        <strong> CSS</strong> to build fast and interactive web applications.
      </p>

      <p>
        Learning React helps you create modern, scalable user interfaces.
      </p>
    </main>
  );
}

export default ReactHomePage;
