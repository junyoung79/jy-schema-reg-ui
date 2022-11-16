import React from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "../store/store";
import {changeCluster} from "../slices/globalConfigSlice";


export default function ClusterList() {

    //const [clusterIdx,setClusterIdx] = useState(-1)
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

    const cluster = useSelector((state:RootState) => state.globalConfig)
    const dispatch = useDispatch<AppDispatch>()

    const clusters = clusterInfo // env


    const handleChangeCluster = (event: SelectChangeEvent) => {
        dispatch(changeCluster(+ event.target.value))
        //setClusterIdx(+event.target.value);
    }

/*    useEffect(() => {
        setClusterIdx(cluster.clusterIndex)
    }, [dispatch])*/

    const clustList = clusters.map( (c, idx) => (<MenuItem key={idx} value={idx}>cluster : {c.name}, idx:{idx}</MenuItem>))

    console.log("render ClusterList")
    return (
        <Box style={{ flexGrow: 1, display: 'flex'}}>
            <FormControl sx={{m:1, minWidth:120 }} size="small">
                <InputLabel id="schema-cluster">Cluster</InputLabel>
                <Select
                    labelId="schema-cluster"
                    id="schema-registry-cluster"
                    value={cluster.clusterIndex.toString()}
                    label="Cluster"
                    onChange={handleChangeCluster}
                >
                    {clustList}
                </Select>
            </FormControl>
        </Box>
    )
}