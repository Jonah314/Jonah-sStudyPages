import React from "react";
import "../../Styles/mainContentCSS.css";

function CssSelectorsPage() {
  return (
    <main className="styling">
      <h1>CSS Selectors</h1>

      <p>
        <strong>CSS selectors</strong> are used to target HTML elements so you
        can apply styles to them. A selector tells CSS <em>which elements</em>
        should be styled.
      </p>

      <h2>Why Are Selectors Important?</h2>
      <p>
        Without selectors, CSS would not know which elements to style. Selectors
        give you precise control over the appearance of your web pages.
      </p>

      <ul>
        <li>Target specific HTML elements</li>
        <li>Apply styles efficiently</li>
        <li>Control layout and design</li>
        <li>Create reusable styles</li>
      </ul>

      <h2>Element Selector</h2>
      <p>
        The <strong>element selector</strong> targets all elements of a specific
        type.
      </p>

      <pre className="greyBox">
        <code>{`p {
  color: blue;
}`}</code>
      </pre>

      <p>This rule styles all <code>&lt;p&gt;</code> elements.</p>

      <h2>Class Selector</h2>
      <p>
        A <strong>class selector</strong> targets elements with a specific class
        attribute. Class selectors start with a dot (<code>.</code>).
      </p>

      <pre className="greyBox">
        <code>{`.highlight {
  background-color: yellow;
}`}</code>
      </pre>

      <p>
        This styles any element with <code>class="highlight"</code>.
      </p>

      <h2>ID Selector</h2>
      <p>
        An <strong>ID selector</strong> targets a single element with a unique
        ID. ID selectors start with a hash (<code>#</code>).
      </p>

      <pre className="greyBox">
        <code>{`#main-title {
  font-size: 32px;
}`}</code>
      </pre>

      <p>
        IDs should be unique and used only once per page.
      </p>

      <h2>Grouping Selectors</h2>
      <p>
        You can style multiple elements at once by grouping selectors with a
        comma.
      </p>

      <pre className="greyBox">
        <code>{`h1, h2, h3 {
  font-family: Arial, sans-serif;
}`}</code>
      </pre>

      <h2>Common Selectors Summary</h2>
      <ul>
        <li><code>p</code> – Element selector</li>
        <li><code>.className</code> – Class selector</li>
        <li><code>#idName</code> – ID selector</li>
        <li><code>*</code> – Universal selector (all elements)</li>
      </ul>

      <p>
        Mastering CSS selectors is essential for writing clean, powerful, and
        flexible stylesheets.
      </p>
    </main>
  );
}

export default CssSelectorsPage;
