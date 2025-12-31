import React from "react";
import "../../Styles/mainContentCSS.css";

function CssBoxModelPage() {
  return (
    <main className="styling">
      <h1>CSS Box Model</h1>

      <p>
        The <strong>CSS Box Model</strong> describes how every HTML element is
        represented as a rectangular box. Understanding the box model is
        essential for controlling layout and spacing on a web page.
      </p>

      <h2>What Is the Box Model?</h2>
      <p>
        Each element on a page is made up of four layers: <strong>content</strong>,
        <strong> padding</strong>, <strong>border</strong>, and
        <strong> margin</strong>.
      </p>

      <ul>
        <li><strong>Content</strong> – The text or images inside the element</li>
        <li><strong>Padding</strong> – Space between the content and the border</li>
        <li><strong>Border</strong> – A line surrounding the padding</li>
        <li><strong>Margin</strong> – Space outside the border</li>
      </ul>

      <h2>Visualizing the Box Model</h2>
      <p>
        The box model helps explain why elements take up more space than expected
        when padding and borders are added.
      </p>

      <pre className="greyBox">
        <code>{`.box {
  width: 200px;
  padding: 20px;
  border: 4px solid black;
  margin: 16px;
}`}</code>
      </pre>

      <p>
        The total width of this element includes the width, padding, and border.
      </p>

      <h2>Width and Height</h2>
      <p>
        By default, the <code>width</code> and <code>height</code> properties only
        apply to the content area.
      </p>

      <pre className="greyBox">
        <code>{`.card {
  width: 300px;
  height: 150px;
}`}</code>
      </pre>

      <h2>The box-sizing Property</h2>
      <p>
        The <strong>box-sizing</strong> property changes how the total size of an
        element is calculated.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
}`}</code>
      </pre>

      <p>
        With <code>border-box</code>, padding and border are included in the
        element’s width and height.
      </p>

      <h2>Common Box Model Properties</h2>
      <ul>
        <li><code>margin</code> – Space outside the element</li>
        <li><code>padding</code> – Space inside the element</li>
        <li><code>border</code> – Outline around the element</li>
        <li><code>width</code> – Content width</li>
        <li><code>box-sizing</code> – Size calculation method</li>
      </ul>

      <p>
        Understanding the box model helps you build predictable layouts and fix
        spacing issues more easily.
      </p>
    </main>
  );
}

export default CssBoxModelPage;
