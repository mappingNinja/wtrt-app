import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import { answersReducer } from "../reducers/answersReducer";

const rootReducer = combineReducers({
  answers: answersReducer
})

const middlewares = [thunk];

const middleware = composeWithDevTools(applyMiddleware(...middlewares))

const initalState = { number: { number: 0 } }

const store = createStore(rootReducer, initalState, middleware);

export default store;
