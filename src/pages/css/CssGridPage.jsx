import React from "react";
import "../../Styles/mainContentCSS.css";

function CssGridPage() {
  return (
    <main className="styling">
      <h1>CSS Grid</h1>

      <p>
        <strong>CSS Grid</strong> is a powerful layout system designed for
        creating two-dimensional layouts with rows and columns. It is ideal for
        building complex and responsive page layouts.
      </p>

      <h2>Why Use CSS Grid?</h2>
      <p>
        Grid makes it easy to design layouts without relying on floats or
        positioning hacks.
      </p>

      <ul>
        <li>Create rows and columns</li>
        <li>Build full-page layouts</li>
        <li>Control spacing and alignment</li>
        <li>Create responsive designs</li>
      </ul>

      <h2>Grid Container</h2>
      <p>
        To use CSS Grid, define a <strong>grid container</strong> by setting
        <code> display: grid</code>.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  display: grid;
}`}</code>
      </pre>

      <h2>Grid Template Columns</h2>
      <p>
        The <code>grid-template-columns</code> property defines the number and
        size of columns.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`}</code>
      </pre>

      <p>
        The <code>fr</code> unit represents a fraction of available space.
      </p>

      <h2>Grid Template Rows</h2>
      <p>
        The <code>grid-template-rows</code> property defines the height of rows.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  grid-template-rows: auto 200px;
}`}</code>
      </pre>

      <h2>Grid Gap</h2>
      <p>
        The <code>gap</code> property controls spacing between rows and columns.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  gap: 16px;
}`}</code>
      </pre>

      <h2>Placing Grid Items</h2>
      <p>
        Grid items can be placed precisely using line numbers.
      </p>

      <pre className="greyBox">
        <code>{`.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`}</code>
      </pre>

      <h2>Grid Areas</h2>
      <p>
        <strong>Grid areas</strong> provide a visual way to define layouts.
      </p>

      <pre className="greyBox">
        <code>{`.container {
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

.header {
  grid-area: header;
}`}</code>
      </pre>

      <h2>Common Grid Properties</h2>
      <ul>
        <li><code>display: grid</code></li>
        <li><code>grid-template-columns</code></li>
        <li><code>grid-template-rows</code></li>
        <li><code>gap</code></li>
        <li><code>grid-column</code></li>
        <li><code>grid-row</code></li>
        <li><code>grid-template-areas</code></li>
      </ul>

      <p>
        CSS Grid is perfect for page layouts, dashboards, and complex designs
        that require precise control.
      </p>
    </main>
  );
}

export default CssGridPage;
