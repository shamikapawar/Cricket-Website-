import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box, Divider } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ShareIcons = () => {
    return (
        <Box style={{ margin: "5px" }}>
            <Card sx={{ maxWidth: 370, margin: 1, padding: 1 }}>
                <Typography style={{
                    fontFamily: "DM Sans,sans-serif",
                    color: "black",
                    fontSize: "1.375rem",
                    fontWeight: "500",
                    margin: "15px ",
                    whiteSpace: "pre-line",
                    display: "flex",

                    justifyContent: "center"
                }}>
                    Share
                </Typography>
                <Divider variant="middle" />
                <Typography style={{
                    fontFamily: "DM Sans,sans-serif",
                    color: "black",
                    fontSize: "1.375rem",
                    fontWeight: "500",
                    margin: "15px ",
                    whiteSpace: "pre-line",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between"

                }}>
                    <WhatsAppIcon style={{ fontSize: "1.875rem", }} />
                    <InstagramIcon style={{ fontSize: "1.875rem", }} />
                    <FacebookIcon style={{ fontSize: "1.875rem", }} />
                    <LinkedInIcon style={{ fontSize: "1.875rem", }} />
                </Typography>
            </Card>
        </Box>
    );
};

export default ShareIcons;
