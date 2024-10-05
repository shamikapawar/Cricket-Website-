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

const BlogContent13 = () => {
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
                <title>India Thrashes Zimbabwe by 100 Runs in Second T20</title>
                <meta name="description" content="In a commanding display of cricketing prowess, India thrashed Zimbabwe by 100 runs in the second T20 match of the series, cementing their dominance and showcasing the depth of their talent pool." />
                <meta name="keywords" content="India cricket, Zimbabwe cricket, T20 match, Abhishek Sharma, Ruturaj Gaikwad, Rinku Singh, cricket victory" />
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
                                    Dominant India Thrashes Zimbabwe by 100 Runs in Second T20 Match
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
                                        JULY 9, 2024
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
                                        <u style={{ marginRight: "15px" }}>India vs Zimbabwe T20 match</u>
                                        <u style={{ marginRight: "15px" }}>Abhishek Sharma maiden T20 hundred</u>
                                        <u style={{ marginRight: "15px" }}>Ruturaj Gaikwad half century</u>
                                        <u style={{ marginRight: "15px" }}>India T20 series win</u>
                                    </Typography>
                                </div>
                                <Divider variant="middle" />
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b13.webp"
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
                                    In a commanding display of cricketing prowess, India thrashed Zimbabwe by 100 runs in the second T20 match of the series, cementing their dominance and showcasing the depth of their talent pool. The match, held at a packed stadium in Harare, saw an all-round performance from the Indian team that left Zimbabwe struggling to keep up.
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
                                    India’s Powerful Batting Display
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
                                    Winning the toss, India elected to bat first, and their decision proved to be spot-on. The openers, led by a blazing knock from the Abhishek Sharma scoring his maiden t-20 hundred for India in just his second match itself, set the tone for the innings with a flurry of boundaries. The Zimbabwean bowlers struggled to find their rhythm as India raced to a strong start.
                                    <p />
                                    The middle order continued the momentum, with each batsman contributing valuable runs. The highlight of the innings was a scintillating half century from Ruturaj Gaikwad and a quick 48 from 22 from Rinku Singh,, who played with a perfect blend of aggression and finesse.Their innings included a series of towering sixes that sent the crowd into a frenzy.
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
                                    Scoreboard Pressure
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
                                    India posted a formidable total of 234/2 in their allotted 20 overs. The scoreboard pressure was always going to be a daunting task for Zimbabwe, who needed a perfect start to stand any chance of chasing down the target. The Indian innings was a testament to their batting depth and the ability to accelerate at crucial junctures.
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b131.jpg"
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
                                    Zimbabwe’s Struggle

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
                                    Chasing a mammoth total, Zimbabwe’s innings got off to the bad start losing his first wicket on 4 runs only. The Indian bowlers, led by their fiery pace attack, struck early, removing the top order with alarming ease. The Zimbabwean batsmen found themselves in deep trouble, unable to cope with the accuracy and pace of the Indian bowlers. Bishnoi too joined the party and picked up two wickets.
                                    <p />
                                    Wickets fell at regular intervals, and the required run rate kept climbing. The Indian fielding was top-notch, with sharp catches and quick run-outs further adding to Zimbabwe’s woes. The spinners then came into play, tightening the screws and picking up crucial middle-order wickets.

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
                                    A Comprehensive Victory
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
                                    Zimbabwe was eventually bowled out for 134 runs, handing India a comprehensive victory by 100 runs. It was a complete team performance, with contributions from both the batsmen and the bowlers. The victory not only showcased India’s dominance but also highlighted their ability to adapt and excel in different conditions.
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
                                    Player of the Match
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
                                    The Player of the Match award deservedly went to Abhishek Sharma for his brilliant century, which set the foundation for India’s massive total. His innings was a masterclass in T20 batting, combining power hitting with intelligent shot selection.
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
                                    Post-Match Reactions
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
                                    The Indian captain expressed his satisfaction with the team’s performance,said that  "He is happy to get the win and It was good to be put under pressure in the first game and they knew what to expect in this game and hopes that batter keeps firing”.
                                    <p />
                                    The Zimbabwean captain, while disappointed with the result, acknowledged India’s superiority. "World champions played like the world champions," he admitted. "Feels that dropping catches hurt them and need to get better in that facet of the game”.
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
                                    Looking Ahead

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
                                    With this victory, India levelled the series to 1-1 as of now , showcasing their preparation and form ahead of upcoming tournaments. The team will look to carry this momentum forward, building on their strengths and addressing any areas of improvement.

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
                                    Fan Reactions

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
                                    Fans were ecstatic with the team’s performance, flooding social media with messages of support and congratulations. The dominant win has boosted the morale of the supporters, who are eagerly looking forward to the next matches.

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
                                    Conclusion
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
                                    India’s 100-run victory over Zimbabwe in the second T20 match was a display of cricketing excellence, highlighting their strength in both batting and bowling. As the series progresses, India will aim to maintain their high standards and continue their winning streak, setting the stage for future successes.

                                </Typography>

                            </Paper>

                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/Fans-Celebrate-India's-T20-World-Cup-Victory"
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

                                            <u> Mumbai Overflows with Joy as Fans Celebrate India's T20 World Cup Victory</u>
                                        </Typography>
                                    </Link>

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
                                            <u>Indian Cricket Team Eyes Glory in Champions Trophy and World Test Championship </u>
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

export default BlogContent13
