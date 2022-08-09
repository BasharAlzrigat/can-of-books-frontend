import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './theme/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <Auth0Provider
        domain="dev-bmnegx0l.us.auth0.com"
        clientId="wt0B98lEXxcNb52090rMxm5NbFgsTQFu"
        redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
