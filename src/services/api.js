import axios from "axios";

/* user */
// export const getAuthToken = () =>
//   axios.get(SERVER_ADDRESS + "/api/user/authtoken");
export const signin = (data) => axios.post("/auth/signin", data);
export const signup = (data) => axios.post("/auth/signup", data);
export const getAuthToken = () => axios.get("/auth/authtoken");
export const signout = () => axios.get("/auth/signout");
export const addlike = (data) => axios.post("/user/addlike", data);
export const deletelike = (data) => axios.post("/user/deletelike", data);
export const likelist = () => axios.post("/user/likelist");
// export const logout = () => axios.delete("/api/user/logout");
// export const signup = (data) => axios.post("/api/user/signup", data);
