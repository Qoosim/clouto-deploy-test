import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from "./auth/authSlice";
import primerReducer from "./primers/primerSlice"
import userInfoReducer from "./userInfo/userInfoSlice"


const reducers = combineReducers({
    user: authReducer,
    primers: primerReducer,
    userInfo: userInfoReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persisitedReducer = persistReducer(persistConfig, reducers)

const rootReducer = (state, action) => {
    if (action.type === "RESET") {
        storage.removeItem("persist:root");
        state = {};
    }
    return persisitedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
