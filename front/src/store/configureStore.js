import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createHistory from "history/createBrowserHistory";
import {routerMiddleware} from "react-router-redux";
import {loadState, saveState} from "./localStorage";

const  rootReducer = combineReducers({
    users: usersReducer,
    routing: routerReducer
});

export const history = createHistory();

const middleware = [
        thunkMiddleware,
        routerMiddleware(history)
];

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        users: store.getState().users

    });
});

export default store;

