import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_app';

const carbonWidget = document.querySelectorAll('.ecooffset-carbon-calculator-widget');
carbonWidget.forEach(elem => {
  const root = ReactDOM.createRoot(
    elem as HTMLDivElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>);
})
