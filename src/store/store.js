import { applyMiddleware , compose , createStore } from "redux";
import reducrs from "./reducrs";
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducrs , composeEnhancers(applyMiddleware(thunk)));
export const persist = persistStore(store);