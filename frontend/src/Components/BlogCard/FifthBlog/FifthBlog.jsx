import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const FifthBlog = () => {
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
        sx={{ maxWidth: 320, maxHeight: 430 }}
        style={cardStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to="/thala-for-a-reason-examining-csk-decline-this-year" style={linkStyle}>
        
          <CardActionArea>
          <Box sx={{ margin: 1 }}>
            <CardMedia
              style={imgStyle}
              component="img"
              height="200"
              image="dhoni1.jpg"
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
                "Thala for a Reason": Examining CSK's Decline This Year
              </Typography>
              <Typography
                style={{
                  fontFamily: "DM Sans,sans-serif",
                  color: "red",
                  fontSize: "1.150rem",
                  fontWeight: "500",
                }}
              >
                JUNE 20, 2024
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
                The phrase "Thala for a reason" has become synonymous with
                Chennai Super Kings (CSK) and its charismatic captain, MS Dhoni.
                His leadership and tactical acumen have been crucial to CSK's
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Box>
    </div>
  );
};

export default FifthBlog;
