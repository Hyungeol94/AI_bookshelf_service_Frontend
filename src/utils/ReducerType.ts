/** userReducer의 initialState를 위한 타입 */
export interface UserReducerType {
  authData: {
    email: string;
    gender: string;
    name: string;
    role: string;
    signup_type: string;
    user_id: string;
  };
  error: object;
  loginState: boolean;
  isAuth: boolean;
}
/** zoomReducer의 initialState를 위한 타입 */
export interface ZoomReducerType {
  zoomData: {
    url: string;
    meetingNumber: string;
    passWord: string;
    myId: string;
    yourId: string;
    personNumber: number;
    callAccepted: boolean;
    reserve_id: string;
    yourEmail: string;
  };
  zoomKey: {
    sdkKey: string;
    sdkSec: string;
    apiKey: string;
    apiSec: string;
  };
  error: {
    message: string;
  };
  loadingZoomKey: boolean;
}
/** pageReducer의 initialState를 위한 타입 */
export interface PageReducerType {
  pageState: {
    currentPage: string;
    hide: boolean;
  };
}
/** modalReducer의 initialState를 위한 타입 */
export interface ModalReducerType {
  modalState: {
    src: string;
    isModal: boolean;
  };
  checkState: {
    isModal: boolean;
    isConfirm: boolean;
  };
}
/** stateReducer의 initialState를 위한 타입 */
export interface StateReducerType {
  state: {
    isCheckTool: boolean;
    capturing: boolean;
    hiddenVideo: boolean;
  };
  recordState: "INIT" | "START" | "END" | "STOP";
}
