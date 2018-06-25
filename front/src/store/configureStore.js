import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createHistory from "history/createBrowserHistory";
import {routerMiddleware, routerReducer} from "react-router-redux";

import {loadState, saveState} from "./localStorage";

import usersReducer from "./reducers/users";
import adminReducer from "./reducers/admin";

const  rootReducer = combineReducers({
    admin: adminReducer,
    users: usersReducer,
    routing: routerReducer
});


export const history = createHistory();

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: store.getState().users
    });
});

export default store;
