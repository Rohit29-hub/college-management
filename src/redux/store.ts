import studentReducer from "./slices/studentReducer";
import coursesReducer from "./slices/coursesReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        courses: coursesReducer,
        student: studentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store