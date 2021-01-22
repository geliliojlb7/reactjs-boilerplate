import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router";
import history from "./utils/history";

const rootReducer = combineReducers({
    router: connectRouter(history),
});

export default rootReducer;
