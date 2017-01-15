import {combineReducers} from "redux";

import testReducer from "../modules/testReducer";

const rootReducer = combineReducers({
    test : testReducer,
});

export default rootReducer;
