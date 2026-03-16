import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Clock } from './components/clock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className="main-container p-4">
      <div className="flex flex-row">
        <div className="flex-1">
          Left
        </div>
        <div className="flex-1">
          <Clock />
        </div>

      </div>
    </div>
  </StrictMode>
);
