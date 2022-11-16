import React, {useState} from "react";
import {Button, Grid, Stack, TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';



/**
 *
 * @param props : {searchCnt : number, searchSchemas : function}
 * @constructor
 */
export default function SearchInput(props:any) {
    const [searchSchemaString, setSearchSchemaString] = useState('')

    const handleSearch = (e:any) => {
        e.preventDefault()
        console.log("SearchInput.handleSearch")
        props.searchSubjects(searchSchemaString)
    }

    const handleChangeSearch = (e:any) => {
        setSearchSchemaString(e.target.value)
    }



    console.log("SearchInput render")
    return (
        <Grid container spacing={0}
              justifyContent="center"
              alignItems="center"
        >

            <Grid item xs={7} sm={7} bgcolor={"white"} flexGrow={1}>
                <TextField id="searchSchema" variant="standard" label="search schema" type="search" size="small" sx={{width:'100%'}} onChange={handleChangeSearch}/>
            </Grid>
            <Grid item xs={2} sm={2} bgcolor={"white"} flexGrow={1}>
                <IconButton onClick={handleSearch}><SearchIcon/></IconButton>
            </Grid>
            <Grid item xs={3} sm={3} alignItems="center" justifyContent="center">
                <Button variant="contained" style={{height:"90%"}} size="small">NEW Schema</Button>
            </Grid>

        </Grid>
    )
}