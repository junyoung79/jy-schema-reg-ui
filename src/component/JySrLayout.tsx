import React, {useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {blue, blueGrey, common, green, lightBlue} from "@mui/material/colors";
import {AppBar, Grid} from "@mui/material";
import Container from "@mui/material/Container";

import TopFullWidthMenu from "./TopFullWidthMenu";
import SchemaSearch from "./left/SchemaSearch";
import SchemaContent from "./right/SchemaContent";

export default function JySrLayout() {

    const [clusterIdx , setClusterIdx] = useState(-1)

    let mdTheme = createTheme({
        palette: {
            primary: {
                main: blueGrey[500],
            },
            secondary: {
                main: green[500],
            },
        },
    });

    return (
        <ThemeProvider theme={mdTheme}>
            <TopFullWidthMenu/>

            <Container maxWidth="xl">
                <Grid container maxWidth="xl" spacing={1}>
                    <Grid item sm={12} xs={12} md={4}>
                        <SchemaSearch/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={8}>
                        <SchemaContent/>
                    </Grid>
                    <Grid item sm={12} xs={12} md={12}>
                        bottom
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}