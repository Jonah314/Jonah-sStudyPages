import React from "react";
import "../../Styles/mainContentCSS.css";

function CssHomePage() {
  return (
    <main className="styling">
      <h1>Introduction to CSS</h1>

      <p>
        <strong>CSS</strong> stands for <em>Cascading Style Sheets</em>. It is used
        to control the appearance and layout of web pages.
      </p>

      <h2>What Does CSS Do?</h2>
      <p>
        CSS allows you to style HTML elements by changing colors, spacing,
        fonts, and layout. It separates content from design, making websites
        easier to maintain.
      </p>

      <ul>
        <li>Changes colors and backgrounds</li>
        <li>Controls spacing and layout</li>
        <li>Styles text and fonts</li>
        <li>Improves responsive design</li>
      </ul>

      <h2>CSS Rules</h2>
      <p>
        CSS is written using <strong>rules</strong>. Each rule targets an HTML
        element and applies styles to it.
      </p>

      <pre className="greyBox">
        <code>{`p {
  color: blue;
  font-size: 16px;
}`}</code>
      </pre>

      <h2>Common CSS Properties</h2>
      <ul>
        <li><code>color</code> – Text color</li>
        <li><code>background-color</code> – Background color</li>
        <li><code>margin</code> – Space outside elements</li>
        <li><code>padding</code> – Space inside elements</li>
        <li><code>display</code> – Layout behavior</li>
      </ul>

      <h2>CSS and the Web</h2>
      <p>
        CSS works alongside <strong>HTML</strong> and
        <strong> JavaScript</strong> to create visually appealing and interactive
        websites.
      </p>

      <p>
        Learning CSS is an important step toward building professional-looking
        web pages.
      </p>
    </main>
  );
}

export default CssHomePage;
