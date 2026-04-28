import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from "./redux/StateProvider";
import { AuthProvider } from './contexts/AuthContext';

import store from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 
    // <React.StrictMode>
        <StateProvider store={store}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </StateProvider>
    // </React.StrictMode>
);


