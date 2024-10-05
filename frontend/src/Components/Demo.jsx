import React from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import SideImg from "../../SideImagesBlog/SideImg";
import SideImg1 from "../../SideImagesBlog/SideImg1";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import ShareIcons from "../../SideImagesBlog/ShareIcons";
import Avatar from '@mui/material/Avatar';
import '../../../App.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { Helmet } from 'react-helmet';

const TenBlogContent = () => {
    const [hover, setHover] = useState({
        previous: false,
        next: false,
        nextLink: false,
        newLaunch: false,
    });

    const handleMouseEnter = (key) => {
        setHover({ ...hover, [key]: true });
    };

    const handleMouseLeave = (key) => {
        setHover({ ...hover, [key]: false });
    };
    return (
        <div style={{ marginTop: "69px" }}>
            <Box sx={{ margin: "20px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 1,
                                    width: "95%",
                                    height: "auto",
                                },
                            }}
                        >
                            <Paper style={{ margin: "5px", padding: "15px" }}>
                                <Link to="/" >
                                    <Typography style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        fontSize: "1.145rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        whiteSpace: "pre-line",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "end"
                                    }}>
                                        <ArrowBackIosIcon style={{ fontSize: "1.099rem" }} />
                                        Back to Blogs
                                    </Typography>
                                </Link>
                                <h1
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        color: "black",
                                        fontSize: "1.799rem",
                                        fontWeight: "bolder",
                                        margin: "15px ",
                                        whiteSpace: "pre-line",
                                    }}
                                >
                                    blog title heading
                                </h1>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="s1.jpeg"
                                            sx={{ width: 56, height: 56 }}
                                        />
                                        <Typography
                                            style={{
                                                fontFamily: "DM Sans,sans-serif",
                                                color: "",
                                                fontSize: "1.375rem",
                                                fontWeight: "500",
                                                margin: "15px",
                                            }}
                                        ><span style={{
                                            fontFamily: "DM Sans,sans-serif",
                                            fontSize: "0.985rem",
                                            fontWeight: "500",

                                            wordSpacing: "0.10em",
                                        }}>Written By:</span> <br />
                                            Sidharth
                                        </Typography>
                                    </div>
                                    <Typography
                                        style={{
                                            fontFamily: "DM Sans,sans-serif",
                                            color: "red",
                                            fontSize: "1.1rem",
                                            fontWeight: "500",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center"

                                        }}
                                    >
                                        JUNE 16, 2024
                                        <Typography
                                            style={{
                                                fontFamily: "DM Sans,sans-serif",
                                                color: "red",
                                                fontSize: "1.1rem",
                                                fontWeight: "500",

                                            }}
                                        > 3 min read</Typography>
                                    </Typography>
                                </div>
                            </Paper>

                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/"
                                        style={{
                                            display: 'flex',
                                            flexDirection: "column",
                                            // alignItems: 'center',
                                            // justifyContent: 'center',
                                            color: hover.nextLink ? 'blue' : 'red',
                                            textDecoration: hover.nextLink ? 'underline' : 'none',
                                        }}
                                        onMouseEnter={() => handleMouseEnter('nextLink')}
                                        onMouseLeave={() => handleMouseLeave('nextLink')}>
                                        <Typography
                                            style={{
                                                fontFamily: 'DM Sans,sans-serif',
                                                color: hover.previous ? 'blue' : 'red',
                                                fontSize: '1.250rem',
                                                fontWeight: '500',
                                                margin: '15px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                // justifyContent: 'center',
                                                cursor: 'pointer',
                                                textDecoration: hover.previous ? 'underline' : 'none',

                                            }}
                                            onMouseEnter={() => handleMouseEnter('previous')}
                                            onMouseLeave={() => handleMouseLeave('previous')}
                                        >
                                            <ArrowBackIosIcon style={{ fontSize: '30px' }} /> <u style={{ textDecoration: 'none' }}>Previous Blog</u>
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontFamily: 'DM Sans,sans-serif',
                                                color: hover.newLaunch ? 'blue' : 'black',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                margin: '10px',
                                                cursor: 'pointer',
                                                textDecoration: hover.newLaunch ? 'underline' : 'none',
                                            }}
                                            onMouseEnter={() => handleMouseEnter('newLaunch')}
                                            onMouseLeave={() => handleMouseLeave('newLaunch')}
                                        >

                                            <u> How AI is Revolutionizing GPS Technology</u>
                                        </Typography>
                                    </Link>

                                    <Link to="/surya-kumar-yadav-can-he-only-bat-at-fast-pitches"
                                        style={{
                                            display: 'flex',
                                            flexDirection: "column",
                                            // alignItems: 'center',
                                            // justifyContent: 'center',
                                            color: hover.nextLink ? 'blue' : 'red',
                                            textDecoration: hover.nextLink ? 'underline' : 'none',
                                        }}
                                        onMouseEnter={() => handleMouseEnter('nextLink')}
                                        onMouseLeave={() => handleMouseLeave('nextLink')}>
                                        <Typography
                                            style={{
                                                fontFamily: 'DM Sans,sans-serif',
                                                color: hover.next ? 'blue' : 'red',
                                                fontSize: '1.250rem',
                                                fontWeight: '500',
                                                margin: '15px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: "flex-end",
                                                cursor: 'pointer',
                                                textDecoration: hover.next ? 'underline' : 'none',
                                            }}
                                            onMouseEnter={() => handleMouseEnter('next')}
                                            onMouseLeave={() => handleMouseLeave('next')}
                                        >
                                            <u style={{ textDecoration: 'none' }}>Next Blog</u>
                                            <ArrowForwardIosIcon
                                                style={{ marginLeft: '10px', fontSize: '30px' }}
                                            />
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontFamily: 'DM Sans,sans-serif',
                                                color: hover.newLaunch ? 'blue' : 'black',
                                                fontSize: '1rem',
                                                fontWeight: '500',
                                                margin: '10px',
                                                cursor: 'pointer',
                                                textDecoration: hover.newLaunch ? 'underline' : 'none',
                                            }}
                                            onMouseEnter={() => handleMouseEnter('newLaunch')}
                                            onMouseLeave={() => handleMouseLeave('newLaunch')}
                                        >
                                            <u> Surya Kumar Yadav, can he only bat <br />at fast pitches ? Knock
                                                against USA<br /> says otherwise ? </u>
                                        </Typography>
                                    </Link>
                                </div>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="sticky-sidebar">
                            <ShareIcons />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default TenBlogContent
