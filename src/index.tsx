import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';

export const App1 = () => {
  return (
    <div>
      <App />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App1 />);
