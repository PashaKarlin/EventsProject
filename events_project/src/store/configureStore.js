import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

export default function configureStore() {
    const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;

            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
