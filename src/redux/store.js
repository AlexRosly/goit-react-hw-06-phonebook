import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import phoneBookReducer from "./reducer";

const persistConfig = {
  key: "contact",
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const rootReducer = combineReducers({
  contacts: phoneBookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };

//Made on Redux

// import { combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import phoneBookReducer from "./reducer";

// const rootReducer = combineReducers({
//   contacts: phoneBookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
