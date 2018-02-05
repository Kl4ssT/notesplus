import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducers from './reducers';

const navigationMiddleware = createReactNavigationReduxMiddleware("root", (state) => state.navigation);

const middlewares = [
    thunk,
    navigationMiddleware
];

if (__DEV__)
{
    middlewares.push(createLogger());
}

export default createStore(
    reducers,
    undefined,
    compose(applyMiddleware(...middlewares))
);