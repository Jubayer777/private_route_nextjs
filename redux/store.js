import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import sidebarReducer from "./sidebarSlice";
import storage from 'redux-persist/lib/storage'
import {persistReducer} from "redux-persist";


const persistConfig = {
    key: 'root',
    version:1,
    storage
  }
const reducer=combineReducers({
    sidebar: sidebarReducer,
    question: questionReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
    reducer: persistedReducer
});
