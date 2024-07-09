import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#66a2fb",
        },
        text: {
            primary: "#333333",
            secondary: "#FFFFFF",
        },
    },
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: "#333333",
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: "#66a2fb !important",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#333333 !important",
                    // color: "#66a2fb !important",
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    // backgroundColor: "#66a2fb !important",
                    color: "#66a2fb !important",
                    secondaryColor: "#FFFFFF !important",
                },
            },
        },
    },
});

export default theme;
