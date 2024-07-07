import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import authReducer from "./features/authSlice";
import refetchReducer from "./features/authSlice";

export const store = configureStore({
  reducer: { authReducer, refetchReducer },
});

export const useAppSelector = useSelector;
