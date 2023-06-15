import { combineReducers } from "redux";
// import modalReducer from "./modalReducer";
// import pageReducer from "./pageReducer";
// import prescriptionReducer from "./prescriptionReducer";
// import socketReducer from "./socketReducer";
// import stateReducer from "./stateReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  // // modalReducer: modalReducer,
  // pageReducer: pageReducer,
  // // prescriptionReducer: prescriptionReducer,
  // // socketReducer: socketReducer,
  // // stateReducer: stateReducer,
  userReducer: userReducer,
});

export default rootReducer;
