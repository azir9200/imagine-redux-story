import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import loginReducer from "./features/loginSlice";
import registerReducer from "./features/RegisterSlice";

// const persistUserConfig = {
//   key: "user",
//   storage,
// };
// const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
    register: registerReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({ serializableCheck: false }).concat(
  //     baseApi.middleware
  //   ),
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
