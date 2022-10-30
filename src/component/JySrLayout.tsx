import React from "react";
import Box from '@mui/material/Box'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {blue, blueGrey, common, green, lightBlue} from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import {AppBar} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ClusterList from "./ClusterList";
import Toolbar from "@mui/material/Toolbar";

export default function JySrLayout() {

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
            <Box sx={{ display: 'flex', }}>
                <CssBaseline/>
                <AppBar position="static" >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                component="h1"
                                variant="h6"
                                noWrap
                                color="inherit"
                                sx={{
                                    marginRight: '36px'
                                }}
                            >
                                JY-SR
                            </Typography>
                            <ClusterList/>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
            <Box sx={{width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },}}>
                left
            </Box>
        </ThemeProvider>
    )
}