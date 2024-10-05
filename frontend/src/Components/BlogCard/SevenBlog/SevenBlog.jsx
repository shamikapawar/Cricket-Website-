import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const SevenBlog = () => {
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
                sx={{ maxWidth: 320, maxHeight: 430 }}
                style={cardStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Link to="/gautam-gambhir-the-unsung-hero-of-2007-and-2011-world-cups" style={linkStyle}>
                    <CardActionArea>
                        <Box sx={{ margin: 1 }}>


                            <CardMedia
                                style={imgStyle}
                                component="img"
                                height="200"
                                image="B72.webp"
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
                                Gautam Gambhir: The Unsung Hero of the 2007 and 2011 World Cups
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: "DM Sans,sans-serif",
                                    color: "red",
                                    fontSize: "1.150rem",
                                    fontWeight: "500",
                                }}
                            >
                                JUNE 22, 2024
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
                                Gautam Gambhir, often overshadowed by the more glamorous stars of
                                Indian cricket, played pivotal roles in two of India's most
                                significant cricketing triumphs: the 2007 ICC T20 World Cup
                                and the 2011 ICC Cricket World Cup.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </Box>
    );
};

export default SevenBlog;


