import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {AppBar} from "@mui/material";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ClusterList from "./ClusterList";
import React from "react";


export default function TopFullWidthMenu() {
    return (
        <Box component="div" style={{display:"inline"}}>
            <CssBaseline/>
            <AppBar position="static" >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            component="h5"
                            variant="subtitle2"
                            noWrap
                            color="inherit"
                        >
                            SCHEMA
                        </Typography>
                        <Typography
                            component="h5"
                            variant="subtitle1"
                            noWrap
                            color="inherit"
                            sx={{
                                marginRight: '36px'
                            }}
                        >
                            -view (The Hitchhiker's Guide to the schema registry)
                        </Typography>
                        <ClusterList/>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}