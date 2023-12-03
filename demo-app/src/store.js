import { combineReducers,legacy_createStore } from "redux";
import cartReducer from "./redux/reducers/cartReducer";
import studentReducer from "./redux/reducers/studentReducer";

const reducers=combineReducers({
    cart:cartReducer,
    student:studentReducer
})

const store=legacy_createStore(reducers)
export default store