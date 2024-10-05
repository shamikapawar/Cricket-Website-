import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const NineBlog = () => {
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
        <Link to="/afghanistan-reaches-t20-world-cup-semi-finals-first-time" style={linkStyle}>
          <CardActionArea>
            <Box sx={{ margin: 1 }}>
              <CardMedia
                style={imgStyle}
                component="img"
                height="190"
                image="B9.webp"
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
                Historic Triumph: Afghanistan Reaches T20 World Cup Semi-Finals for the First Time
              </Typography>
              <Typography
                style={{
                  fontFamily: "DM Sans,sans-serif",
                  color: "red",
                  fontSize: "1.1500rem",
                  fontWeight: "500",
                }}
              >
                JUNE 24, 2024
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
                Afghanistan's performance in this T20 World Cup has been nothing short of remarkable. Reaching the semi-finals for the first time in their history is a testament to their growth as a cricketing nation and their relentless pursuit of excellence.  </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Box>
  );
};

export default NineBlog;

