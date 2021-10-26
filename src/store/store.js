import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { postsReducer } from "./postsReducer";
import { userReducer } from "./userReducer";
import storage from 'redux-persist/lib/storage'; // localStorage
import { persistStore, persistReducer } from 'redux-persist';
import { childrenReducer } from "./childrenReducer";

// создаем объект конфигурации для persist
const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
  children: childrenReducer
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());


// создаем persistor
export const persistor = persistStore(store);