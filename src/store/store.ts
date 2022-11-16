import { configureStore } from '@reduxjs/toolkit';
import subjectsReducer from '../slices/subjectsSlice';
import globalConfigReducer from "../slices/globalConfigSlice";

export const store = configureStore({
//export default configureStore({
    reducer: {
        //globalConfig: globalConfigReducer,
        subjects: subjectsReducer,
        globalConfig: globalConfigReducer,
    },
    devTools: true,
})


// Store 는 state 와 dispatch 를 보관 하는 용도가 가장 중요하므로 아래의 두개 export 는 기본적으로 export 한다고생각하자.
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

