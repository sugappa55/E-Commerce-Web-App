import { applyMiddleware, combineReducers, legacy_createStore as CreateStore } from "redux";
import {CounterReducer} from "./CountReducer/Reducer"
import {TodoReducer} from "./TodoReducer/Reducer"
import thunk from "redux-thunk";
const RootReducer=combineReducers({todos:TodoReducer,counter:CounterReducer})
export const store=CreateStore(RootReducer,applyMiddleware(thunk))