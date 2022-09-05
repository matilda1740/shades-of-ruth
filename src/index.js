import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from "./Components/StateProvider";
import { initialState } from "./Components/reducer";
import { reducer } from "./Components/reducer";
import { AuthProvider } from './Hooks/firebase/userHooks';

ReactDOM.render(
    <React.StrictMode>
        {/* This just passed in the data layer as prop */}
        <StateProvider initialState={initialState} reducer={reducer}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </StateProvider>
    </React.StrictMode>,
  document.getElementById("root")
    );
registerServiceWorker();

