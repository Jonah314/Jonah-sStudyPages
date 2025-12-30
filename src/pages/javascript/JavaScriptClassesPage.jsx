import React from "react";
import "../../Styles/mainContentCSS.css";

function JavaScriptClassesPage() {
  return (
    <main className="styling">
      <h1>JavaScript Classes</h1>

      <p>
        In JavaScript, a <strong>class</strong> is a blueprint for creating objects. 
        Classes allow you to define properties and methods that multiple objects can share.
      </p>

      <h2>Why Use Classes?</h2>
      <ul>
        <li>Organize code using objects</li>
        <li>Create multiple similar objects easily</li>
        <li>Encapsulate properties and behavior</li>
        <li>Supports object-oriented programming (OOP)</li>
      </ul>

      <h2>Creating a Class</h2>
      <p>Use the <code>class</code> keyword to define a class:</p>

      <pre className="greyBox">
        <code>{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, my name is \${this.name}.\`;
  }
}

const alice = new Person("Alice", 25);
console.log(alice.greet()); // Output: Hello, my name is Alice.`}</code>
      </pre>

      <h2>Key Parts of a Class</h2>
      <ul>
        <li><strong>Constructor:</strong> Special method to set initial properties</li>
        <li><strong>Properties:</strong> Variables stored in the object (e.g., <code>name</code>, <code>age</code>)</li>
        <li><strong>Methods:</strong> Functions defined inside the class (e.g., <code>greet()</code>)</li>
        <li><strong>Instances:</strong> Objects created from the class using <code>new</code></li>
      </ul>

      <h2>Inheritance</h2>
      <p>
        Classes can <strong>inherit</strong> from other classes using <code>extends</code>, allowing code reuse.
      </p>

      <pre className="greyBox">
        <code>{`class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return \`\${this.name} is studying.\`;
  }
}

const bob = new Student("Bob", 20, "A");
console.log(bob.greet()); // Output: Hello, my name is Bob.
console.log(bob.study()); // Output: Bob is studying.`}</code>
      </pre>

      <h2>Key Points</h2>
      <ul>
        <li>Classes are blueprints for creating objects</li>
        <li><code>constructor</code> sets up initial properties</li>
        <li>Methods define behavior for objects</li>
        <li>Inheritance allows one class to reuse another class's features</li>
      </ul>

      <h2>Why It Matters</h2>
      <p>
        Understanding classes is essential for building organized, object-oriented 
        JavaScript applications, and it’s the foundation for many frameworks and libraries.
      </p>
    </main>
  );
}

export default JavaScriptClassesPage;
