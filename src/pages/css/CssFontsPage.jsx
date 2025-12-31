import React from "react";
import "../../Styles/mainContentCSS.css";

function CssFontsPage() {
  return (
    <main className="styling">
      <h1>Fonts in CSS</h1>

      <p>
        <strong>Fonts in CSS</strong> control how text appears on a web page.
        Choosing the right font improves readability and helps set the tone of
        your design.
      </p>

      <h2>Font Basics</h2>
      <p>
        CSS provides several properties that allow you to style text, including
        the font family, size, weight, and style.
      </p>

      <ul>
        <li>Font type and appearance</li>
        <li>Text size and spacing</li>
        <li>Bold and italic styles</li>
        <li>Overall readability</li>
      </ul>

      <h2>The font-family Property</h2>
      <p>
        The <strong>font-family</strong> property specifies which font should be
        used. You can provide a list of fonts as fallbacks.
      </p>

      <pre className="greyBox">
        <code>{`body {
  font-family: Arial, Helvetica, sans-serif;
}`}</code>
      </pre>

      <p>
        If the first font is not available, the browser moves to the next one.
      </p>

      <h2>Web-Safe Fonts</h2>
      <p>
        <strong>Web-safe fonts</strong> are fonts that are commonly installed on
        most devices and browsers. They display consistently without requiring
        downloads.
      </p>

      <ul>
        <li>Arial</li>
        <li>Verdana</li>
        <li>Times New Roman</li>
        <li>Georgia</li>
        <li>Courier New</li>
      </ul>

      <h2>Generic Font Families</h2>
      <p>
        Generic font families act as a final fallback if none of the listed
        fonts are available.
      </p>

      <pre className="greyBox">
        <code>{`p {
  font-family: "Times New Roman", Times, serif;
}`}</code>
      </pre>

      <ul>
        <li><code>serif</code></li>
        <li><code>sans-serif</code></li>
        <li><code>monospace</code></li>
        <li><code>cursive</code></li>
        <li><code>fantasy</code></li>
      </ul>

      <h2>Font Size</h2>
      <p>
        The <strong>font-size</strong> property controls how large the text
        appears. Common units include <code>px</code>, <code>em</code>, and
        <code>rem</code>.
      </p>

      <pre className="greyBox">
        <code>{`h1 {
  font-size: 32px;
}

p {
  font-size: 1rem;
}`}</code>
      </pre>

      <h2>Font Weight and Style</h2>
      <p>
        You can control how bold or italic text appears using
        <code> font-weight</code> and <code>font-style</code>.
      </p>

      <pre className="greyBox">
        <code>{`strong {
  font-weight: bold;
}

em {
  font-style: italic;
}`}</code>
      </pre>

      <h2>Common Font Properties</h2>
      <ul>
        <li><code>font-family</code> – Font type</li>
        <li><code>font-size</code> – Text size</li>
        <li><code>font-weight</code> – Boldness</li>
        <li><code>font-style</code> – Italic text</li>
        <li><code>line-height</code> – Space between lines</li>
      </ul>

      <p>
        Using web-safe fonts and proper font styling ensures your text looks
        consistent and readable across different devices.
      </p>
    </main>
  );
}

export default CssFontsPage;
