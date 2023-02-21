import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./slices";
import RestaurantReducer from "../features/restaurant/slice";

export default configureStore({
  reducer: {
    root: RootReducer,
    restaurant: RestaurantReducer,
  },
});
