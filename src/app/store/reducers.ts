import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import { privateApi } from "../api/private";
import { publicApi } from "../api/public";
import authReducer from "./authSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  [privateApi.reducerPath]: privateApi.reducer,
  [publicApi.reducerPath]: publicApi.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

export type RootState = ReturnType<typeof rootReducer>;
