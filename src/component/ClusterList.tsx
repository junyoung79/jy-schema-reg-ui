import React, {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import Box from "@mui/material/Box";


export default function ClusterList() {
    const [cluster, setCluster] = useState('');

    const clusters = [
        {
            key: "cluster1",
            name: "MyCluster"
        },

        {
            key: "cluster2",
            name: "YourCluster"
        },
    ]

    const handleChangeCluster = (event: SelectChangeEvent) => {
        setCluster(event.target.value);
    }

    const clustList = clusters.map( (c) => (<MenuItem value={c.name}>cluster : {c.name}</MenuItem>))

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex'} }}>
            <FormControl sx={{m:1, minWidth:120 }}>
                <InputLabel id="demo-simple-select-label">Cluster</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="schema-registry-cluster"
                    value={cluster}
                    label="Cluster"
                    onChange={handleChangeCluster}
                >
                    {clustList}
                </Select>
            </FormControl>
        </Box>
    )
}