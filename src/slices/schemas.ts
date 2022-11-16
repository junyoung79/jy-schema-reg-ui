
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import SchemaService from "../service/schema.service";

const initialSubjects:[] = []
const initialSchma = {}


export const getSubjects = createAsyncThunk(
    "schemas/subjects",
    async () => {
        const res = await SchemaService.getSubjects()
        return res.data
    }
)
/*

export const getVersions = createAsyncThunk(
    "schema/versions",
    async(subject:string) => {
        const res = await SchemaService.getVersionsFromSubject(subject)
        return res.data
    }
)

const subjectSlice = createSlice({
    name: "subjects",
    initialSubjects,
    extraReducers: {
        [getSubjects.fulfilled]: (state, action) => {
            state.push(action.payload)
        }
    }
});
*/

