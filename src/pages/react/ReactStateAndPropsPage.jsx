import React, { useState } from "react";
import "../../Styles/mainContentCSS.css";

function ReactStateAndPropsPage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Student");

  return (
    <main className="styling">
      <h1>React State and Props</h1>

      <p>
        In React, <strong>state</strong> and <strong>props</strong> are used to
        manage and pass data within an application.
      </p>

      <h2>What Are Props?</h2>
      <p>
        <strong>Props</strong> are used to pass data from a parent component to a
        child component. Props are <strong>read-only</strong>.
      </p>

      <pre className="greyBox">
        <code>{`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}`}</code>
      </pre>

      <h2>Interactive Exercise: Props</h2>
      <p>
        Type a name below and see how it is passed as a prop to the Greeting
        component.
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <Greeting name={name} />

      <h2>What Is State?</h2>
      <p>
        <strong>State</strong> is data that belongs to a component and can change
        over time. When state changes, React updates the UI automatically.
      </p>

      <pre className="greyBox">
        <code>{`const [count, setCount] = useState(0);`}</code>
      </pre>

      <h2>Interactive Exercise: State</h2>
      <p>
        Click the button below to update the state and watch the number change.
      </p>

      <p><strong>Count:</strong> {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <h2>State vs Props</h2>
      <ul>
        <li><strong>Props</strong> are passed into components</li>
        <li><strong>State</strong> is managed inside components</li>
        <li>Props cannot be changed</li>
        <li>State can be updated</li>
      </ul>

      <h2>Key Takeaway</h2>
      <p>
        State controls data that changes, while props allow components to share
        data. Together, they make React applications interactive and organized.
      </p>
    </main>
  );
}

function Greeting({ name }) {
  return <h3>Hello, {name}!</h3>;
}

export default ReactStateAndPropsPage;
