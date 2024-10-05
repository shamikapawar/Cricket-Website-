import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

const SideImg1 = () => {
  return (
    <Box style={{ margin: "5px" }}>
      <Card sx={{ maxWidth: 380, margin: 1, padding: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="cricket.png"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideImg1;
