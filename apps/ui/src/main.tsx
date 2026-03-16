import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Clock } from './components/clock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className="main-container">
      <Clock />
    </div>
  </StrictMode>
);
