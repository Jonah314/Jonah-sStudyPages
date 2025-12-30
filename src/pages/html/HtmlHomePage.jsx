import React from "react";
import '../../Styles/mainContentCSS.css';

function HtmlHomePage() {
  return (
    <main className="styling" >
      <h1>Introduction to HTML</h1>

      <p>
        <strong>HTML</strong> stands for <em>HyperText Markup Language</em>. It is
        the standard language used to create and structure content on the web.
        Every website you visit uses HTML in some form.
      </p>

      <h2>What Does HTML Do?</h2>
      <p>
        HTML is responsible for the structure of a webpage. It tells the browser
        what content exists and how it is organized.
      </p>

      <ul>
        <li>Defines headings, paragraphs, and text</li>
        <li>Creates links to other pages</li>
        <li>Displays images and videos</li>
        <li>Structures forms and inputs</li>
      </ul>

      <h2>HTML Elements</h2>
      <p>
        HTML is made up of <strong>elements</strong>. Elements usually have an
        opening tag, content, and a closing tag.
      </p>

      <pre className="greyBox">
        <code>{`<p>This is a paragraph.</p>`}</code>
      </pre>

      <h2>Common HTML Tags</h2>
      <ul>
        <li><code>&lt;h1&gt; to &lt;h6&gt;</code> – Headings</li>
        <li><code>&lt;p&gt;</code> – Paragraphs</li>
        <li><code>&lt;a&gt;</code> – Links</li>
        <li><code>&lt;img&gt;</code> – Images</li>
        <li><code>&lt;div&gt;</code> – Containers</li>
      </ul>

      <h2>HTML and the Web</h2>
      <p>
        HTML works together with <strong>CSS</strong> (for styling) and
        <strong> JavaScript</strong> (for interactivity) to create modern,
        interactive websites.
      </p>

      <p>
        Learning HTML is usually the first step in becoming a web developer.
      </p>
    </main>
  );
}

export default HtmlHomePage;
