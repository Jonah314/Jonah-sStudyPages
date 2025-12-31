import React from "react";
import "../../Styles/mainContentCSS.css";

function CssColorsPage() {
  return (
    <main className="styling">
      <h1>Colors in CSS</h1>

      <p>
        <strong>Colors in CSS</strong> are used to style text, backgrounds,
        borders, and many other parts of a web page. CSS provides multiple ways
        to define colors.
      </p>

      <h2>Where Are Colors Used?</h2>
      <p>
        Colors help improve readability, highlight important elements, and
        create visually appealing designs.
      </p>

      <ul>
        <li>Text color</li>
        <li>Background color</li>
        <li>Borders and outlines</li>
        <li>Buttons and links</li>
      </ul>

      <h2>Named Colors</h2>
      <p>
        CSS supports many <strong>named colors</strong> such as
        <code> red</code>, <code> blue</code>, and <code> green</code>.
      </p>

      <pre className="greyBox">
        <code>{`p {
  color: blue;
}`}</code>
      </pre>

      <h2>HEX Colors</h2>
      <p>
        <strong>HEX colors</strong> are the most commonly used color format in
        CSS. They start with a <code>#</code> followed by six hexadecimal
        characters.
      </p>

      <pre className="greyBox">
        <code>{`h1 {
  color: #ff5733;
}`}</code>
      </pre>

      <p>
        HEX colors represent red, green, and blue values.
      </p>

      <h2>RGB Colors</h2>
      <p>
        The <strong>RGB</strong> color format uses values for red, green, and
        blue ranging from 0 to 255.
      </p>

      <pre className="greyBox">
        <code>{`div {
  background-color: rgb(0, 150, 255);
}`}</code>
      </pre>

      <h2>RGBA Colors</h2>
      <p>
        <strong>RGBA</strong> adds an alpha value to RGB, controlling
        transparency.
      </p>

      <pre className="greyBox">
        <code>{`div {
  background-color: rgba(0, 0, 0, 0.5);
}`}</code>
      </pre>

      <p>
        The alpha value ranges from <code>0</code> (fully transparent) to
        <code>1</code> (fully opaque).
      </p>

      <h2>HSL Colors</h2>
      <p>
        <strong>HSL</strong> stands for Hue, Saturation, and Lightness. This
        format is often easier to understand and adjust.
      </p>

      <pre className="greyBox">
        <code>{`button {
  background-color: hsl(200, 80%, 50%);
}`}</code>
      </pre>

      <h2>Common Color Properties</h2>
      <ul>
        <li><code>color</code> – Text color</li>
        <li><code>background-color</code> – Background color</li>
        <li><code>border-color</code> – Border color</li>
        <li><code>outline-color</code> – Outline color</li>
      </ul>

      <p>
        Understanding color formats gives you more control over your designs
        and helps create consistent, accessible web pages.
      </p>
    </main>
  );
}

export default CssColorsPage;
