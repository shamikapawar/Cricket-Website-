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

const BlogContent15 = () => {
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
                <title>Gautam Gambhir Appointed as Indian Cricket Team Head Coach</title>
                <meta name="description" content="Read about Gautam Gambhir's appointment as the Indian cricket team's head coach and the strategic changes he is expected to bring." />
                <meta name="keywords" content="Gautam Gambhir, Indian cricket team, head coach, BCCI, ICC tournaments, cricket news" />
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
                                    Gautam Gambhir appointed as indian cricket team head coach.
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
                                        JULY 11, 2024
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
                                        <u style={{ marginRight: "15px" }}>Gambhir coaching career</u>
                                        <u style={{ marginRight: "15px" }}>Rahul Dravid tenure end</u>
                                        <u style={{ marginRight: "15px" }}>India T20 World Cup victory</u>
                                        <u style={{ marginRight: "15px" }}>Gambhir strategic acumen</u>
                                    </Typography>
                                </div>
                                <Divider variant="middle" />
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b153.avif"
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
                                    Jay Shah, BCCI secretary announced the news of Gautam Gambhir being appointed as indian cricket team new head coach, replacing Rahul Dravid whose term of 3 years ended after recently concluded T-20 world cup where india was victorious in a nail-bitting finish. Gambhir at 42, will be india’s youngest ever head coach.
                                    <p />

                                    The Board of Control for Cricket in India (BCCI) finalized his appointment following an extensive interview process conducted by the Cricket Advisory Committee (CAC). Gambhir was the leading candidate and his appointment was anticipated for some time.
                                    <p />
                                    The BCCI's decision to appoint Gambhir comes at a pivotal time, as the Indian team prepares for several important ICC events, including the World Test Championship and the Champions Trophy. His tenure will last until December 2027, covering four ICC tournaments across different formats​. The announcement of Gambhir’s appointment is seen as a move to inject fresh ideas and strategies into the team, aiming to end India's ICC trophy drought(which ended slightly after india’s world cup win at t-20s) and build a future-ready squad​.
                                    <p />
                                    Gambhir's coaching career, although relatively short, has been marked by significant achievements. He recently led the Kolkata Knight Riders (KKR) to victory in the 2024 Indian Premier League (IPL) as a mentor, showcasing his strategic acumen and leadership skills. His role with KKR undoubtedly bolstered his credentials for the national team role.
                                    <p />
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
                                    Let us get more insights on this:-
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
                                    Background and Selection Process
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
                                    <li>
                                        <strong>
                                            Interview Process
                                        </strong>
                                        The Cricket Advisory Committee (CAC) of the BCCI conducted an extensive interview process to select the new head coach. Gautam Gambhir emerged as the leading candidate after impressing the committee with his vision for the team's future​.

                                    </li>
                                    <li>
                                        <strong>
                                            CAC Members:
                                        </strong>
                                        The committee was chaired by Ashok Malhotra, with Jatin Paranjpe and Sulakshana Naik as members. Their focus was on understanding Gambhir's roadmap for the next three years, which includes preparations for four ICC tournaments​.

                                    </li>
                                    <li>
                                        <strong>
                                            Formal Announcement:
                                        </strong>
                                        The final decision was made following an Apex Council meeting, where the selection process and Gambhir's credentials were discussed. Jay Shah, the BCCI Secretary, played a key role in this process​.
                                    </li>
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b151.png"
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
                                    In addition to his recent success as a KKR mentor in IPL 2024 which led KKR to win    their next title after 2012 and 2014(when Gautam Gambhir captained KKR) his performances as an all format batter is also impressive. He debuted in 2003 and is one of india’s accomplished openers with very impressive performances across formats.
                                    <p />
                                    He is deemed to be very aggressive in his approach and known to back his players as a captain and as a mentor in his previous roles. He is very passionate about cricket and his assignments. Under his tenure BCCI is looking forward to take indian team to next level in all the icc tournaments and in general the state of indian cricket men’s team.
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="300"
                                        image="b152.png"
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
                                    Gambhir have to basically focus on these aspects:-
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
                                    <strong>
                                        Focus on ICC Tournaments:
                                    </strong>
                                    One of Gambhir's primary objectives will be to prepare the Indian team for upcoming ICC tournaments, including the World Test Championship and the champions trophy. His vision includes building a team capable of performing consistently on the global stage​.
                                    <p />
                                    <strong>
                                        Youth Development:
                                    </strong>
                                    Gambhir has expressed a keen interest in developing young talent and ensuring a strong pipeline of players ready to step up to the international level. His tenure will likely see a focus on nurturing emerging cricketers and integrating them into the national setup​.
                                    <p />
                                    <strong>
                                        Strategic Planning:
                                    </strong>
                                    Known for his analytical approach to the game, Gambhir is expected to bring fresh strategies and innovative ideas to the team. His emphasis on preparation, mental toughness, and adaptability will be key elements of his coaching philosophy​.
                                    <p />
                                    We sincerely hope that Gambhir will deliver what he is expected to deliver.
                                </Typography>
                            </Paper>

                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/World-Test-Championship"
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

                                            <u> Indian Cricket Team Eyes Glory in Champions <br />Trophy and World Test Championship</u>
                                        </Typography>
                                    </Link>

                                    <Link to="/Farewell-to-a-Legend-James-Anderson-Bows-Out-from-Cricket"
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
                                            <u> Farewell to a Legend: James Anderson<br /> Bows Out from Cricket </u>
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

export default BlogContent15

