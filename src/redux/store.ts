import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import fetchReducer from './reducers/fetchReducer';
import searchReducer from './reducers/searchReducer';

const reducers = combineReducers({
  search: searchReducer,
  fetch: fetchReducer,
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

const persistedReducers = persistReducer(persistConfig, reducers);

const global = window as any;
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducers, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
