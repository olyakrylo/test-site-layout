import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
    showingComponent: 'page'
};
export const store = createStore(reducer, initialState);