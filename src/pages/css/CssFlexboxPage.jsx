import React from "react";
import "../../Styles/mainContentCSS.css";

function CssFlexboxPage() {
  return (
    <main className="styling">
      <h1>CSS Flexbox</h1>

      <p>
        <strong>Flexbox</strong> (Flexible Box Layout) is a CSS layout system
        designed to make it easier to arrange elements in a one-dimensional
        layout—either in a row or a column.
      </p>

      <h2>Why Use Flexbox?</h2>
      <p>
        Flexbox helps you align, space, and resize elements dynamically, even
        when their size is unknown or changes.
      </p>

      <ul>
        <li>Create responsive layouts</li>
        <li>Align items horizontally and vertically</li>
        <li>Control spacing between elements</li>
        <li>Reorder items without changing HTML</li>
      </ul>

      <h2>Flex Container</h2>
      <p>
        To use Flexbox, you must first define a <strong>flex container</strong>
        by setting the <code>display</code> property to <code>flex</code>.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  display: flex;
}`}</code>
      </pre>

      <h2>Flex Direction</h2>
      <p>
        The <code>flex-direction</code> property defines the direction of the
        main axis.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  display: flex;
  flex-direction: row;
}`}</code>
      </pre>

      <ul>
        <li><code>row</code> – Left to right (default)</li>
        <li><code>row-reverse</code></li>
        <li><code>column</code></li>
        <li><code>column-reverse</code></li>
      </ul>

      <h2>Justify Content</h2>
      <p>
        The <code>justify-content</code> property aligns items along the main
        axis.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  display: flex;
  justify-content: space-between;
}`}</code>
      </pre>

      <ul>
        <li><code>flex-start</code></li>
        <li><code>center</code></li>
        <li><code>space-between</code></li>
        <li><code>space-around</code></li>
        <li><code>space-evenly</code></li>
      </ul>

      <h2>Align Items</h2>
      <p>
        The <code>align-items</code> property aligns items along the cross axis.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  display: flex;
  align-items: center;
}`}</code>
      </pre>

      <ul>
        <li><code>stretch</code> (default)</li>
        <li><code>flex-start</code></li>
        <li><code>center</code></li>
        <li><code>flex-end</code></li>
      </ul>

      <h2>Flex Wrap</h2>
      <p>
        By default, flex items stay on one line. The
        <code> flex-wrap</code> property allows items to wrap to the next line.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  display: flex;
  flex-wrap: wrap;
}`}</code>
      </pre>

      <h2>Flex Items</h2>
      <p>
        Flexbox also provides properties for individual items.
      </p>

      <pre className="greyBox">
        <code>{`.item {
  flex-grow: 1;
}`}</code>
      </pre>

      <ul>
        <li><code>flex-grow</code> – How much an item grows</li>
        <li><code>flex-shrink</code> – How much an item shrinks</li>
        <li><code>flex-basis</code> – Initial size of an item</li>
      </ul>

      <h2>Common Flexbox Properties</h2>
      <ul>
        <li><code>display: flex</code></li>
        <li><code>flex-direction</code></li>
        <li><code>justify-content</code></li>
        <li><code>align-items</code></li>
        <li><code>flex-wrap</code></li>
        <li><code>flex</code></li>
      </ul>

      <p>
        Flexbox is perfect for navigation bars, card layouts, and aligning
        content both horizontally and vertically.
      </p>
    </main>
  );
}

export default CssFlexboxPage;
