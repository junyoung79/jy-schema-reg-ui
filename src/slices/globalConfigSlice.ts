import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const clusterInfo = [
    {
        name: "test1",
        schemaRegistryUrl: "http://localhost:8081",
        mode: 'READWRITE'
    },
    {
        name: "test2",
        schemaRegistryUrl: "http://localhost:8081",
        mode: 'READWRITE'
    }
];

const env = clusterInfo

export type configType = {
    clusterIndex: number,
    clusterName: string,
    schemaRegistryUrl: string,
    mode: string
}

const initialConfigState:configType = {
    clusterIndex: -1,
    clusterName: '',
    schemaRegistryUrl: '',
    mode: 'READWRITE', //IMPORT, READONLY, READWRITE (default)
}

const globalConfigSlice = createSlice({
    name: "globalConfig",
    initialState: initialConfigState,
    reducers: {
        changeCluster: (state:any, action:PayloadAction<number>) => {
            console.log(`globalConfigSlice.changeCluster idx:${action.payload}, env : ${JSON.stringify(env[action.payload])} `)
            const idx = action.payload
            const newState:configType = {
                ...state,
                clusterIndex: idx,
                clusterName: (idx>=0)?env[idx].name:'',
                schemaRegistryUrl: (idx>=0)?env[idx].schemaRegistryUrl:'',
                mode: (idx>=0)?env[idx].mode:'',
            }
            //state = newState
            return newState
        }
    }
})

export const {changeCluster} = globalConfigSlice.actions

export default globalConfigSlice.reducer