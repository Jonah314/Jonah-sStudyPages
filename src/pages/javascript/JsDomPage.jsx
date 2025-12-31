import React from "react";
import "../../Styles/mainContentCSS.css";

function JsDomPage() {
  return (
    <main className="styling">
      <h1>DOM Manipulation</h1>

      <p>
        The <strong>DOM</strong> (Document Object Model) represents the structure of an HTML document.  
        JavaScript can be used to read and modify the DOM, allowing you to create interactive web pages.
      </p>

      <h2>Accessing Elements</h2>
      <p>There are several ways to select elements from the DOM:</p>

      <pre className="greyBox">
        <code>{`// Select by ID
const header = document.getElementById("header");

// Select by class
const items = document.getElementsByClassName("item");

// Select by tag
const paragraphs = document.getElementsByTagName("p");

// Modern selector (CSS style)
const firstItem = document.querySelector(".item");
const allItems = document.querySelectorAll(".item");`}</code>
      </pre>

      <h2>Changing Content</h2>
      <p>You can change the text or HTML inside an element:</p>
      <pre className="greyBox">
        <code>{`const header = document.getElementById("header");
header.textContent = "New Title"; // changes text
header.innerHTML = "<em>New Title</em>"; // changes HTML`}</code>
      </pre>

      <h2>Changing Styles</h2>
      <p>You can modify CSS styles of elements:</p>
      <pre className="greyBox">
        <code>{`const box = document.querySelector(".box");
box.style.backgroundColor = "lightblue";
box.style.width = "200px";`}</code>
      </pre>

      <h2>Adding and Removing Elements</h2>
      <p>JavaScript can create, add, or remove elements dynamically:</p>
      <pre className="greyBox">
        <code>{`// Create a new element
const newItem = document.createElement("li");
newItem.textContent = "New item";

// Add it to a list
const list = document.querySelector("ul");
list.appendChild(newItem);

// Remove an element
const firstItem = document.querySelector("li");
list.removeChild(firstItem);`}</code>
      </pre>

      <h2>Event Listeners</h2>
      <p>Events allow you to respond to user actions:</p>
      <pre className="greyBox">
        <code>{`const button = document.querySelector("button");

button.addEventListener("click", function() {
  alert("Button clicked!");
});`}</code>
      </pre>

      <h2>Common DOM Methods</h2>
      <ul>
        <li><code>getElementById()</code> – Select element by ID</li>
        <li><code>getElementsByClassName()</code> – Select elements by class</li>
        <li><code>getElementsByTagName()</code> – Select elements by tag</li>
        <li><code>querySelector()</code> – Select first matching element</li>
        <li><code>querySelectorAll()</code> – Select all matching elements</li>
        <li><code>createElement()</code> – Create a new element</li>
        <li><code>appendChild()</code> – Add an element to the DOM</li>
        <li><code>removeChild()</code> – Remove an element from the DOM</li>
        <li><code>addEventListener()</code> – Respond to events</li>
      </ul>

      <p>
        Learning DOM manipulation is essential for creating dynamic, interactive,
        and user-friendly web pages using JavaScript.
      </p>
    </main>
  );
}

export default JsDomPage;
