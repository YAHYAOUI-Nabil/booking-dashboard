import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { privateApi } from "../api/private";
import { publicApi } from "../api/public";
import rootReducer, { RootState } from "./reducers";

const store = configureStore({
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(privateApi.middleware)
      .concat(publicApi.middleware),
});

setupListeners(store.dispatch);
export default store;

export type AppDispatch = typeof store.dispatch;

export type AppThunkAPI = { dispatch: AppDispatch; state: RootState };

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
