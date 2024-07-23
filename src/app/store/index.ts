import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { privateApi } from "../api/private";
import { publicApi } from "../api/public";
import rootReducer, { RootState } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(privateApi.middleware)
      .concat(publicApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;

export type AppThunkAPI = { dispatch: AppDispatch; state: RootState };

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
