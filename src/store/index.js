import { configureStore} from "@reduxjs/toolkit";
import navtogReducer from "./navbar-togler";

const store = configureStore({
    reducer: {navtog: navtogReducer}
});

export default store;