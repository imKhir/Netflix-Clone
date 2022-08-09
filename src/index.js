import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import stores from './components/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={stores}>
            <App />
        </Provider>
    </React.StrictMode>,
);
