import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Blog14 = () => {
    const [hovered, setHovered] = useState(false);
    const cardStyle = {
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        boxShadow: hovered ? "0px 4px 20px rgba(0, 0, 0, 0.2)" : "none",
    };

    const imgStyle = {
        transition: "transform 0.3s",
        transform: hovered ? "scale(1.1)" : "scale(1)",
    };
    const linkStyle = {
        textDecoration: "none", // Remove underline from links
    };
    return (
        <Box style={{ margin: "5px" }}>
            <Card
                sx={{ maxWidth: 350, maxHeight: 430 }}
                style={cardStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Link to="/World-Test-Championship" style={linkStyle}>
                    <CardActionArea>
                        <Box sx={{ margin: 1 }}>
                            <CardMedia
                                style={imgStyle}
                                component="img"
                                height="190"
                                image="b14.jpg"
                                alt="green iguana"
                            />
                        </Box>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                style={{ fontFamily: "DM Sans,sans-serif" }}
                            >
                                Indian Cricket Team Eyes Glory in Champions Trophy and World Test Championship
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: "DM Sans,sans-serif",
                                    color: "red",
                                    fontSize: "1.1500rem",
                                    fontWeight: "500",
                                }}
                            >
                                JULY 10, 2024
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                style={{
                                    fontFamily: "DM Sans,sans-serif",
                                    fontSize: "0.975rem",
                                    lineHeight: "1.57",
                                    fontWeight: "500",
                                    wordSpacing: "0.05em",
                                }}
                            >
                                As the cricketing world gears up for a thrilling season ahead, the Indian cricket team has set its sights firmly on clinching the prestigious Champions Trophy and the World Test Championship.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </Box>
    );
};

export default Blog14;





