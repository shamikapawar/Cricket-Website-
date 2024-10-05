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

const BlogContent14 = () => {
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
            <Helmet>
                <title>Indian Cricket Team: Champions Trophy and World Test Championship</title>
                <meta name="description" content="As the cricketing world gears up for a thrilling season ahead, the Indian cricket team has set its sights firmly on clinching the prestigious Champions Trophy and the World Test Championship." />
                <meta name="keywords" content="Indian cricket team, Champions Trophy, World Test Championship, Rohit Sharma, Virat Kohli, Shubman Gill, Jasprit Bumrah, Ravichandran Ashwin" />
            </Helmet>
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
                                    Indian Cricket Team Eyes Glory in Champions Trophy and World Test Championship
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
                                        JULY 10, 2024
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
                                <div style={{ display: "flex", }}>
                                    <Typography
                                        style={{
                                            fontFamily: "DM Sans, sans-serif",
                                            color: "blue",
                                            fontSize: "1.06rem",
                                            fontWeight: "500",
                                            margin: "10px ",
                                            borderRadius: "5px",
                                            wordSpacing: "0.10em",

                                        }}
                                    >
                                        <u style={{ marginRight: "15px" }}>Champions Trophy 2024</u>
                                        <u style={{ marginRight: "15px" }}>Virat Kohli batting</u>
                                        <u style={{ marginRight: "15px" }}>Rohit Sharma leadership</u>
                                        <u style={{ marginRight: "15px" }}>Rahul Dravid coaching</u>
                                    </Typography>
                                </div>
                                <Divider variant="middle" />
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b14.jpg"
                                        alt="green iguana"
                                    />
                                </Box>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px 0",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    As the cricketing world gears up for a thrilling season ahead, the Indian cricket team has set its sights firmly on clinching the prestigious Champions Trophy and the World Test Championship. With a blend of seasoned veterans and dynamic young talents, the Men in Blue are poised to leave an indelible mark on these two marquee tournaments.
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        color: "blue",
                                        fontSize: "1.375rem",
                                        fontWeight: "500",
                                        margin: "15px",
                                    }}
                                >
                                    Champions Trophy Aspirations
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px 0",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    The Champions Trophy, often dubbed the 'mini World Cup', has always been a fiercely contested event. India, having won the trophy twice (in 2002 and 2013), aims to add another feather to its cap. Under the astute leadership of Rohit Sharma, known for his strategic acumen and calm demeanor, the team is gearing up to tackle the best in the business.
                                    <p />
                                    The batting lineup, featuring stalwarts like Virat Kohli and emerging sensations like Shubman Gill, promises fireworks. Kohli's experience and Gill's flair make for a formidable top order. The middle order, bolstered by the versatile Hardik Pandya and the ever-reliable KL Rahul, adds depth and resilience.
                                    <p />
                                    India's bowling attack, led by the fiery Jasprit Bumrah and the wily Ravichandran Ashwin, is expected to pose significant challenges to opponents. Bumrah's lethal yorkers and Ashwin's cunning variations can turn games around in the blink of an eye. The inclusion of young talents like Mohammed Siraj ensures that the bowling unit remains dynamic and unpredictable.
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        color: "blue",
                                        fontSize: "1.375rem",
                                        fontWeight: "500",
                                        margin: "15px",
                                    }}
                                >
                                    World Test Championship Goals
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px 0",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    The World Test Championship (WTC), the pinnacle of Test cricket, is another coveted title India is eager to secure. Having come close in the previous edition, the team is more determined than ever to go the distance this time. The WTC final loss to New Zealand and Australia in two consecutive finals is a fresh wound, and the squad is keen to redeem itself.
                                    <p />
                                    In the Test arena, the emphasis will be on resilience and consistency. Rohit Sharma’s calm leadership in the longer format, combined with Virat Kohli’s rock-solid technique, provides a sturdy backbone to the team. The return of Rishabh Pant, with his explosive batting and agile wicket-keeping, adds an X-factor to the side.
                                    <p />
                                    The pace trio of Bumrah, Mohammed Shami, and Mohammad Siraj, complemented by the spin duo of Ashwin and Ravindra Jadeja, forms a balanced and potent attack. Their ability to exploit home conditions and adapt to overseas pitches will be crucial in India's quest for Test supremacy.
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="400"
                                        image="b141.jpg"
                                        alt="green iguana"
                                    />
                                </Box>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        color: "blue",
                                        fontSize: "1.375rem",
                                        fontWeight: "500",
                                        margin: "15px",
                                    }}
                                >
                                    Preparations and Prospects
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px 0",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    The Indian team management, under the guidance of head coach Rahul Dravid, had meticulously planned the preparation schedule. But since Rahul term as head coach already ended in t-20 world cup 2024. So, whosoever will be next indian coach which is more likely to be Gautam Gambhir, the emphasis is being placed on fitness, mental conditioning, and honing specific skills required for different formats.
                                    <p />
                                    Dravid, with his wealth of experience and calm approach, has been instrumental in nurturing young talents and creating a cohesive team environment. His focus on discipline and strategic planning is expected to pay dividends as the team embarks on its dual quest for glory.
                                    <p />
                                    As the anticipation builds, cricket fans across India are hopeful that their team will bring home the coveted trophies. The blend of youth and experience, coupled with a burning desire to succeed, makes the Indian cricket team a formidable force on the global stage. With the Champions Trophy and the World Test Championship on the horizon, the Men in Blue are ready to script a new chapter in their illustrious cricketing journey.
                                </Typography>
                            </Paper>

                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/Dominant-India-Thrashes-Zimbabwe-by-100-Runs-in-Second-T20-Match"
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

                                            <u> Dominant India Thrashes Zimbabwe by 100 Runs in Second T20 Match</u>
                                        </Typography>
                                    </Link>

                                    <Link to="/Gautam-Gambhir-appointed-as-indian-cricket-team-head-coach"
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
                                            <u>Gautam Gambhir appointed as indian cricket team head coach.</u>
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

export default BlogContent14






