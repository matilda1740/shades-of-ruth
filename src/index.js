import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { StateProvider } from "./Components/StateProvider";
import { initialState } from "./Components/reducer";
import { reducer } from "./Components/reducer";

ReactDOM.render(
    <React.StrictMode>
        {/* This just passed in the data layer as prop */}
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>,
  document.getElementById("root")
    );
registerServiceWorker();

