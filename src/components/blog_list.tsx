import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Step 1: Import Grid
import Box from "@mui/material/Box";
import CustomCard from "./card";
import MarkdownProcessor from "./markdown_processor";
const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

function BlogList() {
    return (
        <>
            <MarkdownProcessor markdown="# This blog is currently in development :), so the links do not work" />
            <Grid container spacing={2}>
                {" "}
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </Grid>
        </>
    );
}

export default BlogList;
