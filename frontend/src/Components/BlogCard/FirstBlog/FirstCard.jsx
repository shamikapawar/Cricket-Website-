import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const FirstCard = () => {
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
    <div>
      <Box style={{ margin: "5px" }}>
        <Card
          sx={{ maxWidth: 350, maxHeight: 430 }}
          style={cardStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link to="/sachin-vs-virat-comparison-between-two" style={linkStyle}>
            <CardActionArea>
              <Box sx={{ margin: 1 }}>
                <CardMedia
                  style={imgStyle}
                  component="img"
                  image="Sachin-Virat 1.jpeg"
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
                  Looking at the Comparison, Sachin vs Virat. What at the stores
                  for indians to consider ? Who is the best batsman ?
                </Typography>
                <Typography
                  color="text.secondary"
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    color: "red",
                    fontSize: "1.150rem",
                    fontWeight: "500",
                    alignItems: "center",
                  }}
                >
                  JUNE 16, 2024
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
                  There's a very known comparison between Sachin and Virat. You
                  must have seen the very controversial koffee with Karan episode
                  when Hardik Pandya and his then considered very
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>

      </Box>
    </div>
  );
};

export default FirstCard;
