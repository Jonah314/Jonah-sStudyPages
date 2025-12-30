import React from "react";
import "../../Styles/mainContentCSS.css";

function HtmlRequestResponsePage() {
  return (
    <main className="styling">
      <h1>The HTML Request and Response Cycle</h1>

      <p>
        Every time you visit a web page, your browser communicates with a web
        server using a <strong>request and response cycle</strong>. This is how
        web pages are loaded and displayed.
      </p>

      <h2>Step 1: The Request</h2>
      <p>
        The browser sends an <strong>HTTP request</strong> to the server. This
        request asks for a specific web page or resource.
      </p>

      <ul>
        <li>Sent when you type a URL or click a link</li>
        <li>Includes the method, like <code>GET</code> or <code>POST</code></li>
        <li>May include headers, cookies, or data</li>
      </ul>

      <pre className="greyBox">
        <code>{`GET /index.html HTTP/1.1
Host: www.example.com`}</code>
      </pre>

      <h2>Step 2: The Server Processes the Request</h2>
      <p>
        The web server receives the request and determines what to send back.
        It might:
      </p>
      <ul>
        <li>Return an HTML file</li>
        <li>Fetch data from a database</li>
        <li>Run server-side scripts</li>
      </ul>

      <h2>Step 3: The Response</h2>
      <p>
        The server sends back an <strong>HTTP response</strong> to the browser.
        This response contains:
      </p>
      <ul>
        <li>A status code (like <code>200 OK</code>)</li>
        <li>Headers with information about the data</li>
        <li>The content itself (HTML, CSS, JavaScript, JSON, etc.)</li>
      </ul>

      <pre className="greyBox">
        <code>{`HTTP/1.1 200 OK
Content-Type: text/html

<html>
  <body>
    <h1>Welcome to Example.com</h1>
  </body>
</html>`}</code>
      </pre>

      <h2>Step 4: Browser Renders the Page</h2>
      <p>
        The browser reads the response and displays the content on the screen.
        It also requests any linked resources like CSS, images, or scripts, which
        triggers additional request-response cycles.
      </p>

      <h2>Quick Summary</h2>
      <ol>
        <li>Browser sends a request</li>
        <li>Server processes the request</li>
        <li>Server sends a response</li>
        <li>Browser renders the content</li>
      </ol>

      <h2>Why It Matters</h2>
      <p>
        Understanding the request and response cycle helps you:
      </p>
      <ul>
        <li>Debug web pages</li>
        <li>Optimize loading speed</li>
        <li>Work with APIs and dynamic content</li>
      </ul>
    </main>
  );
}

export default HtmlRequestResponsePage;
