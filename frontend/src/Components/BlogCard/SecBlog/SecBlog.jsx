import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const SecBlog = () => {
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
        <Link to="/surya-kumar-yadav-can-he-only-bat-at-fast-pitches" style={linkStyle}>
          <CardActionArea>
            <Box sx={{ margin: 1 }}>
              <CardMedia
                style={imgStyle}
                component="img"
                height="190"
                image="Surya-1.jpg"
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
                Surya Kumar Yadav, can he only bat at fast pitches ? Knock
                against USA says otherwise ?
              </Typography>
              <Typography
                style={{
                  fontFamily: "DM Sans,sans-serif",
                  color: "red",
                  fontSize: "1.150rem",
                  fontWeight: "500",
                }}
              >
                JUNE 17, 2024
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
                Suryakumar Yadav’s overall strike-rates in the shortest format
                are as follows – 168.06
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Box>
  );
};

export default SecBlog;
