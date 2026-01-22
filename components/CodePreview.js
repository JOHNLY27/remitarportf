export default function CodePreview() {
  return (
    <div className="code-preview" aria-hidden>
      <div className="editor">
        <div className="editor-top">
          <div className="dots">
            <span className="dot red" aria-hidden></span>
            <span className="dot yellow" aria-hidden></span>
            <span className="dot green" aria-hidden></span>
          </div>
          <div className="file">app/page.jsx</div>
        </div>

        <div className="editor-body">
          <div className="code-lines">
            <div className="code-line"><span className="reveal">import React from 'react'</span></div>
            <div className="code-line"><span className="reveal">export default function Page() {'{'}</span></div>
            <div className="code-line"><span className="reveal">  return &lt;main&gt;Hello, World!&lt;/main&gt;</span></div>
            <div className="code-line"><span className="reveal">{'}'}</span></div>
            <div className="code-line"><span className="reveal">// Built with Next.js · Accessible · Fast</span></div>
          </div>
          <div className="cursor" aria-hidden></div>
        </div>
      </div>
    </div>
  )
}
