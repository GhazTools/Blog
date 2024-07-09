import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#66a2fb",
        },
    },
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: "#333333",
                    color: "#66a2fb",
                },
            },
        },
    },
});

export default theme;
