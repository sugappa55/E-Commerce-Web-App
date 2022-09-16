import { applyMiddleware, legacy_createStore as CreateStore } from "redux";

import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

export const store=CreateStore(Reducer,applyMiddleware(thunk))