import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid"; // Step 1: Import Grid
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { CardMedia } from "@mui/material";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

function CustomCard() {
    // Example onClick handler if not using Link for navigation
    const handleClick = () => {
        // const history = useHistory();
        // const handleClick = () => {
        //     // Navigate to the blog item
        //     // Replace '/blog-item-path' with the actual path you want to navigate to
        //     history.push("/blog-item-path");
        // };
    };

    return (
        <Grid item xs={12} md={6}>
            <Link
                to={"/read/invalidBlogPost"}
                key={"Home"}
                style={{ textDecoration: "none" }}
            >
                <Card
                    sx={{
                        minWidth: 400,
                        backgroundColor: "#f0f0f0",
                        padding: "40px",
                        transition: "0.3s",
                        "&:hover": {
                            transform: "scale(1.02)", // Slightly scale up the card
                            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)", // Increase box-shadow
                        },
                    }}
                    // onClick={handleClick} // Add this if using onClick for navigation
                    // component={Link} to="/blog-item-path" // Uncomment and modify if using Link for navigation
                >
                    <CardMedia
                        component="img"
                        sx={{ minWidth: 400, height: 250 }}
                        image="server_images/test.png"
                        alt="Image description"
                    />
                    <Grid container direction="column" sx={{ flexGrow: 1 }}>
                        <CardContent
                            sx={{
                                justifyContent: "flex-end",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: 24 }}
                                color="text.main"
                                gutterBottom
                            >
                                Writing a Blog
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Why i wrote this blog and what i learned
                            </Typography>
                        </CardContent>
                    </Grid>
                </Card>
            </Link>
        </Grid>
    );
}

export default CustomCard;
