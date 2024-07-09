import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/about";
import Header from "./components/header";
import MarkdownProcessor from "./components/markdown_processor";
import theme from "./material_theme";
import "./styles.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <MarkdownProcessor markdown="# This blog is currently in development :)" />
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
