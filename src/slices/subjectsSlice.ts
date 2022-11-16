import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

// 초기값 타입 정의
// @ts-ignore
export type SubjectsState = {
    subject: string;
    maxVersion: number;
}

export type SubjectSearchState = {
    searchString : string,
    searchCnt : number,
    allSubjects : SubjectsState[],
    filteredSubjects : SubjectsState[],
}

const initialSubjectState : SubjectSearchState = {
    searchString: '',
    searchCnt: 0,
    allSubjects: [],
    filteredSubjects: [],

}


// createSlice는 name, initialState, reducers 세 요소를 요구한다.
// action 은 객체로 {type, payload} 로 되어 있다.
export const subjectsSlice = createSlice({
    name: "schemas",
    initialState: initialSubjectState, // { value:[{schema list
    reducers: {
        // state 는 현재 state 를 받는다.
        // action 은 dispatch 를 통해 받는 action 객체 이다.
        getAllSubjects: (state:any, action:PayloadAction<string[]>) => {
            const receivedSubjects:string[] = action.payload
            //state.value = action.payload
            const filteredSubjects:string[] = receivedSubjects.filter(it => it.includes(state.searchString))
            const cnt = filteredSubjects.length

            const newState:SubjectSearchState = {
                ...state,
                searchCnt: cnt,
                allSubjects: receivedSubjects,
                filteredSubjects: filteredSubjects
            }
            state = newState

        },
        changeSearch: (state:any, action:PayloadAction<string>) => {
            const changedSearchString = action.payload
            const filteredSubjects:string[] = state.allSubjects.filter((it: string) => it.includes(changedSearchString))
            const cnt = filteredSubjects.length

            const newState:SubjectSearchState = {
                ...state,
                searchString:changedSearchString,
                searchCnt: cnt,
                filteredSubjects: filteredSubjects
            }
            state = newState
        }
    }
})

// 여기서 내보내는 getSubjects 는 위의 subjects 를 말하는게 아니다.
// 같은 이름의 actionCreator 함수를 내보내기 하고 있는 것이다.
export const {getAllSubjects, changeSearch} = subjectsSlice.actions

// reducer 를 내보내기 하지만 위의 reducers 전첼를 내보내기 하고 있다.
// 여기서 내보내는 함수 목록은 store 로 들어 가게 된다.
export default subjectsSlice.reducer
