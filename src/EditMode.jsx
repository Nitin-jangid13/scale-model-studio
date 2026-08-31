import React, { useState } from 'react';
import './EditMode.css';

export default function EditMode({ initialContent }) {
  const [content, setContent] = useState(JSON.parse(JSON.stringify(initialContent)));
  const [copied, setCopied] = useState(false);

  const updateField = (path, value) => {
    setContent((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      let obj = next;
      for (let i = 0; i < path.length - 1; i++) obj = obj[path[i]];
      obj[path[path.length - 1]] = value;
      return next;
    });
  };

  const jsonString = JSON.stringify(content, null, 2);

  const copyJson = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="edit-mode">
      <div className="edit-banner">
        <div>
          <strong>Edit mode</strong> — change anything below, then copy your update and paste it into GitHub.
        </div>
      </div>

      <div className="edit-body">
        <section className="edit-section">
          <h2>Homepage headline</h2>
          <label>Title
            <textarea value={content.hero.title} onChange={(e) => updateField(['hero', 'title'], e.target.value)} />
          </label>
          <label>Subtitle
            <textarea value={content.hero.subtitle} onChange={(e) => updateField(['hero', 'subtitle'], e.target.value)} />
          </label>
        </section>

        <section className="edit-section">
          <h2>Stats bar</h2>
          {content.stats.map((s, i) => (
            <div className="edit-row" key={i}>
              <label>Number<input value={s.num} onChange={(e) => updateField(['stats', i, 'num'], e.target.value)} /></label>
              <label className="grow">Label<input value={s.label} onChange={(e) => updateField(['stats', i, 'label'], e.target.value)} /></label>
            </div>
          ))}
        </section>

        <section className="edit-section">
          <h2>Services & pricing</h2>
          {content.services.map((s, i) => (
            <div className="edit-card" key={i}>
              <label>Name<input value={s.name} onChange={(e) => updateField(['services', i, 'name'], e.target.value)} /></label>
              <label>Description<textarea value={s.desc} onChange={(e) => updateField(['services', i, 'desc'], e.target.value)} /></label>
              <div className="edit-row">
                <label>Price<input value={s.price} onChange={(e) => updateField(['services', i, 'price'], e.target.value)} /></label>
                <label>Timeline<input value={s.time} onChange={(e) => updateField(['services', i, 'time'], e.target.value)} /></label>
              </div>
            </div>
          ))}
        </section>

        <section className="edit-section">
          <h2>Portfolio projects</h2>
          {content.portfolio.map((p, i) => (
            <div className="edit-card" key={i}>
              <label>Title<input value={p.title} onChange={(e) => updateField(['portfolio', i, 'title'], e.target.value)} /></label>
              <div className="edit-row">
                <label>Category<input value={p.category} onChange={(e) => updateField(['portfolio', i, 'category'], e.target.value)} /></label>
                <label>Scale<input value={p.scale} onChange={(e) => updateField(['portfolio', i, 'scale'], e.target.value)} /></label>
                <label>Price<input value={p.price} onChange={(e) => updateField(['portfolio', i, 'price'], e.target.value)} /></label>
              </div>
            </div>
          ))}
        </section>

        <section className="edit-section">
          <h2>Process steps</h2>
          {content.process.map((s, i) => (
            <div className="edit-card" key={i}>
              <label>Title<input value={s.title} onChange={(e) => updateField(['process', i, 'title'], e.target.value)} /></label>
              <label>Description<textarea value={s.desc} onChange={(e) => updateField(['process', i, 'desc'], e.target.value)} /></label>
            </div>
          ))}
        </section>

        <section className="edit-section">
          <h2>Contact details</h2>
          <label>Address<input value={content.contact.address} onChange={(e) => updateField(['contact', 'address'], e.target.value)} /></label>
          <label>Email<input value={content.contact.email} onChange={(e) => updateField(['contact', 'email'], e.target.value)} /></label>
          <label>Phone<input value={content.contact.phone} onChange={(e) => updateField(['contact', 'phone'], e.target.value)} /></label>
        </section>

        <section className="edit-section publish-section">
          <h2>Publish your changes</h2>
          <ol>
            <li>Click "Copy updated content" below</li>
            <li>Go to your GitHub repo → open the <code>public</code> folder → click <code>content.json</code></li>
            <li>Click the pencil (edit) icon</li>
            <li>Select all existing text (Ctrl+A) and paste (Ctrl+V) your copied content over it</li>
            <li>Scroll down, click "Commit changes"</li>
            <li>Vercel redeploys automatically — check your site in about a minute</li>
          </ol>
          <button className="copy-btn" onClick={copyJson}>{copied ? 'Copied!' : 'Copy updated content'}</button>
          <textarea className="json-preview" readOnly value={jsonString} />
        </section>
      </div>
    </div>
  );
}
