import { combineReducers } from "redux";
import reducer from "./createt_file/reducer";
import search from "./Search/reducer";
import songs from "./songs/reducer";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const root=combineReducers({
    file:reducer,
    search:search,
    songs:songs
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['songs','search']
  }
const reducers= persistReducer(persistConfig,root)

export default reducers