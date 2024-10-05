import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const FourthBlog = () => {
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
        <Link to="/was-hardik-pandya-right-choice-for-mumbai-indians-captaincy" style={linkStyle}>
          <CardActionArea>
            <Box sx={{ margin: 1 }}>
            <CardMedia
              style={imgStyle}
              component="img"
              height="200"
              image="hardik-1.jpg"
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
                Was Hardik Pandya the Right Choice for Mumbai Indians Captain?
                An Analysis from a Die-Hard Fan
              </Typography>
              <Typography
                style={{
                  fontFamily: "DM Sans,sans-serif",
                  color: "red",
                  fontSize: "1.150rem",
                  fontWeight: "500",
                }}
              >
                JUNE 19, 2024
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
                As a passionate Mumbai Indians fan, the appointment of Hardik
                Pandya as the captain of our beloved team was a moment of mixed
                emotions. On one hand, Hardik has been a crucial part of Mumbai
                Indians' success over the years
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Box>
  );
};

export default FourthBlog;
