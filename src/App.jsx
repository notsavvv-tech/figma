import { useEffect, useState } from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import './styles.css';

import './builderConfig.js';

const MODEL_NAME = 'page';
const DEFAULT_PAGE = 'home';

export default function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder.get(MODEL_NAME, { url: '/' }).promise().then((data) => {
      setContent(data);
    });
  }, []);

  return (
    <div className="app-shell">
      <header>
        <h1>Figma + Builder.io Starter</h1>
        <p>Replace the Builder page content with your Figma design blocks.</p>
      </header>

      {content ? (
        <BuilderComponent model={MODEL_NAME} content={content} />
      ) : (
        <div className="fallback-card">
          <h2>Builder content not loaded yet</h2>
          <p>
            Add a page in Builder.io with model <strong>page</strong> and publish it. Then refresh this app.
          </p>
        </div>
      )}

      <section className="help-card">
        <h3>Next steps</h3>
        <ul>
          <li>Install dependencies: <code>npm install</code></li>
          <li>Run dev server: <code>npm run dev</code></li>
          <li>Set your Builder API key in <code>src/builderConfig.js</code></li>
          <li>Use Builder.io to import your Figma design or add sections manually</li>
        </ul>
      </section>
    </div>
  );
}
