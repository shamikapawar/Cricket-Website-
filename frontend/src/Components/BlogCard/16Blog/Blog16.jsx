import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const Blog16 = () => {
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
                <Link to="/Farewell-to-a-Legend-James-Anderson-Bows-Out-from-Cricket" style={linkStyle}>
                    <CardActionArea>
                        <Box sx={{ margin: 1 }}>
                            <CardMedia
                                style={imgStyle}
                                component="img"
                                height="190"
                                image="b16.jpg"
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
                                Farewell to a Legend: James Anderson Bows Out from Cricket
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: "DM Sans,sans-serif",
                                    color: "red",
                                    fontSize: "1.1500rem",
                                    fontWeight: "500",
                                }}
                            >
                                JULY 16, 2024
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
                                After a stellar career spanning over two decades, England's fast bowling legend, James Anderson, has announced his retirement from all forms of cricket.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>
        </Box>
    );
};

export default Blog16;







