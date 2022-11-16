import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";
import SearchInput from "./SearchInput";
import SchemaService from "../../service/schema.service";
import SubjectList from "./SubjectList";



export default function SchemaSearch(props:any) {

    const [subjects, setSubjects] = useState([])
    const [allSubjects, setAllSubjects] = useState([])

    const searchSubjects = (searchString:string) => {
        setSubjects(allSubjects.filter((s:string) => s.includes(searchString)))
        console.log("subject : " + JSON.stringify(subjects))
    }
    // TODO : axios 로 schema 데이터 받아 오기.

    useEffect(() => {
        SchemaService.getSubjects()
            .then( response => {
                console.log("SchemaService.getSubjects() when mounting/unmounting")
                console.log(response.data)
                setSubjects(response.data)
                setAllSubjects(response.data)
            }).catch(error => {
            console.error(error)
        })
    }, [])

    // 4/12 * 960
    return (
        <Stack spacing={2} style={{width: '100%', minHeight: 500}}>
            <SearchInput searchSubjects={searchSubjects}/>
            <Box style={{width: '100%'}} >
                <SubjectList rows={subjects}/>
            </Box>
        </Stack>
    );

}