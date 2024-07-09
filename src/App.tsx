import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/about";
import Header from "./components/header";
import MarkdownProcessor from "./components/markdown_processor";
import theme from "./material_theme";
import MarkdownRequester from "./components/markdown_requester";
import BlogList from "./components/blog_list";

import "./styles.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Container maxWidth="xl">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <BlogList />
                                    // <MarkdownProcessor markdown="# This blog is currently in development :)" />
                                }
                            />
                            <Route path="/about" element={<AboutPage />} />
                            <Route
                                path="/read/:markdownFilename"
                                element={<MarkdownRequester />}
                            />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
