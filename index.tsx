
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  document.body.innerHTML = '<div style="color: red; padding: 20px; font-family: monospace;"><h1>Error: Could not find root element</h1><p>The app failed to initialize. Check browser console for details.</p></div>';
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Failed to render app:", error);
  rootElement.innerHTML = '<div style="color: red; padding: 20px; font-family: monospace;"><h1>App Error</h1><p>Check browser console for details.</p><pre>' + String(error) + '</pre></div>';
}
