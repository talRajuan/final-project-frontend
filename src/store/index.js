import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import counterReducer from "./counter";

//initialize the global redux state
const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
  },
});

export default store;
