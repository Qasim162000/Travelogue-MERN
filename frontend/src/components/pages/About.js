import React from "react";
import "./about.css";

function About() {
  return (
    <div className="flex flex-col w-1/2 m-auto mt-16">
      <details open>
        <summary>How do you create an accordion?</summary>
        <div>
          Easy! As long as you don't have to support IE11 or older browsers you
          could use <code>&lt;details&gt;</code> and{" "}
          <code>&lt;summary&gt;</code> natively.
        </div>
      </details>
      <details>
        <summary>What if I have to support IE11 or older browsers?</summary>
        <div>
          No worries. The fallback for these elements is quite good. They will
          display as open. You won't get the open/close mechanism, but you won't
          lose any content either.
        </div>
      </details>
      <details>
        <summary>What type of content can I have inside one of these?</summary>
        <div>
          Almost anything you'd like. The <code>&lt;details&gt;</code> element
          allows all flow content , which is basically everything.
        </div>
      </details>
      <details>
        <summary>How does it work?</summary>
        <div>
          The <code>&lt;details&gt;</code> element encapsulates the{" "}
          <code>&lt;summary&gt;</code> element. The <code>&lt;summary&gt;</code>{" "}
          becomes the 'label' for the <code>&lt;details&gt;</code> and acts like
          a button. When clicked, the attribute <code>open</code> is added to
          the <code>&lt;details&gt;</code> element, making it display. You can
          therefore style the open and closed states seperately if you'd like.
        </div>
      </details>
    </div>
  );
}

export default About;
