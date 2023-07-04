import axios from "axios";

// USER_AUTH
export const signin = (data) => axios.post("/auth/signin", data);
export const signup = (data) => axios.post("/auth/signup", data);
export const getAuthToken = () => axios.get("/auth/authtoken");
export const signout = () => axios.get("/auth/signout");
export const checkuseremail = (data) =>
  axios.post("/auth/checkuseremail", data);

// USER_LIKE
export const addlike = (data) => axios.post("/user/addlike", data);
export const deletelike = (data) => axios.post("/user/deletelike", data);
export const likecheck = () => axios.post("/user/likecheck");
export const likelist = () => axios.post("/user/likelist");

// USER_CART
export const addcart = (data) => axios.post("/user/addcart", data);
export const deletecart = (data) => axios.post("/user/deletecart", data);
export const cartcheck = () => axios.post("/user/cartcheck");
export const cartlist = () => axios.post("/user/cartlist");

// USER_BOOKSHELF
export const alladdbookshelf = (data) =>
  axios.post("/user/alladdbookshelf", data);
export const addbookshelf = (data) => axios.post("/user/addbookshelf", data);
export const deletebookshelf = (data) =>
  axios.post("/user/deletebookshelf", data);
export const bookshelfcheck = () => axios.post("/user/bookshelfcheck");
export const bookshelflist = () => axios.post("/user/bookshelflist");

// USER_PROFILE
export const profilechange = (data) => axios.post("/user/profilechange", data);

// USER_STAT
export const countBookshelfInfo = () => axios.post("/user/countBookshelfInfo");
