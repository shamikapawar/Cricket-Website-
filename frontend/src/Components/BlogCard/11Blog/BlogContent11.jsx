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

const BlogContent11 = () => {
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
                <title>Indian Women’s Cricket Team Beats SA by 10 Wickets</title>
                <meta name="description" content="The Indian women's cricket team has been on an impressive run in Test cricket at home over the past seven months. On Monday 1st July, the Harmanpreet Kaur-led squad secured a hat-trick of Test victories on home soil by defeating South Africa in the one-off Test in Chennai by 10 wickets." />
                <meta name="keywords" content="Indian women's cricket team, Harmanpreet Kaur, Rajeshwari Gayakwad, Smriti Mandhana, Cricket, Test cricket, India vs South Africa" />
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
                                    Indian Women’s Cricket Team Beats SA by 10 Wickets
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
                                        JULY 5, 2024
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
                                        <u style={{ marginRight: "15px" }}>Indian women's cricket team</u>
                                        <u style={{ marginRight: "15px" }}>Harmanpreet Kaur</u>
                                        <u style={{ marginRight: "15px" }}>Rajeshwari Gayakwad</u>
                                        <u style={{ marginRight: "15px" }}>Smriti Mandhana</u>
                                    </Typography>
                                </div>
                                <Divider variant="middle" />
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b11.png"
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
                                    <strong>
                                        Chandigarh:
                                    </strong>
                                    The Indian women's cricket team has been on an impressive run in Test
                                    cricket at home over the past seven months. On Monday 1st July, the Harmanpreet Kaur-led
                                    squad secured a hat-trick of Test victories on home soil by defeating South Africa in the
                                    one-off Test in Chennai by 10 wickets.
                                    <p />
                                    Seven months ago, India triumphed over England and Australia in Test matches held in
                                    Mumbai. This comprehensive victory marks the joint-longest winning streak in women's
                                    Tests under Kaur's captaincy. India previously achieved three consecutive Test wins
                                    between 2006 and 2014, a feat matched only by Australia, who have also recorded
                                    three such streaks.
                                    <p />
                                    On the final day of the match, India successfully chased down a fourth-innings target of
                                    37 to secure victory, but not before South Africa had put up a determined and gritty
                                    fight.
                                    <p />
                                    Spinners Sneh Rana, Deepti Sharma and Rajeshwari Gayakwad gelled well to finally
                                    dismiss South Africa, after following on, for 373 in reply to India's mammoth first innings
                                    603/6 declared. South Africa were 266 all out in the first innings.
                                    <p />
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b112.png"
                                        alt="green iguana"
                                    />
                                </Box>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        color: "darkgray",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px",
                                        wordSpacing: "0.10em",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    Rana's 10-wicket haul wraps up India's victory over South Africa
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
                                    Despite the ten-wicket margin, the victory in Chennai came down to the final session of
                                    the last day.
                                    <p />
                                    India clinched a resounding victory in the one-off Test against South Africa, winning by
                                    10 wickets in the final session of the last day at Chepauk. This win kept the visitors
                                    winless in the series. Highlights for India included Shafali Verma's double-century, Smriti
                                    Mandhana's impressive 149, and Sneh Rana's remarkable 10-wicket haul. The match
                                    was also notable for South Africa's resilient fight over nearly 240 overs in challenging
                                    conditions.
                                    <p />
                                    South Africa's remarkable determination was evident as they compelled India to bat
                                    again after declaring at 603 for 6. Despite limited red-ball practice, South Africa
                                    bounced back from being bowled out for 266 in the first innings, fueled by centuries
                                    from Laura Wolvaardt and Sune Luus, along with a determined effort from Nadine de
                                    Klerk. Their resilience kept the contest alive until the final session of the match.

                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b113.png"
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
                                    On a gloomy fourth day, South Africa began at 232 for 2, trailing by 105 runs, with Laura
                                    Wolvaardt approaching her maiden hundred. She reached the milestone in 259 balls,
                                    capitalizing on anything short and wide of off stump. However, their innings took a turn
                                    when Marizanne Kapp fell lbw to Deepti Sharma early in the day. Delmi Tucker followed
                                    soon after, caught sharply by Jemimah Rodrigues at cover off Sneh Rana. Rajeshwari
                                    Gayakwad then made a crucial breakthrough by dismissing Wolvaardt for 122 with a
                                    quicker delivery that caught her off guard after a series of deliveries outside off stump.
                                    <p />
                                    In the morning session, India tightened their grip, taking three wickets and conceding
                                    just 70 runs in 30 overs as they closed in on victory. However, the afternoon saw a stark
                                    contrast with South Africa's slow progress, scoring 34 runs in 29 painstaking overs.
                                    Nadine de Klerk emerged as a silent hero, showcasing her ability to adapt from her
                                    usual aggressive style in white-ball cricket to a patient, resilient approach in Test cricket.
                                    Spending 213 minutes at the crease, she crafted a maiden Test fifty off 174 balls,
                                    playing a defensive masterclass against India's spinners.
                                    <p />
                                    Sinalo Jafta, earlier retired hurt due to cramps, returned bravely but South Africa's
                                    hopes of salvaging a draw were dashed when Shafali Verma and Rajeshwari Gayakwad
                                    struck crucial blows. Shafali dismissed Masabata Klaas with a turning delivery, while
                                    Gayakwad clean-bowled de Klerk, ending her defiant innings. Despite briefly taking the
                                    lead, South Africa's efforts fell short as India, led by Shafali and Shubha Satheesh,
                                    chased down the 36-run target in 9.2 overs to secure victory.
                                    <p />
                                    As attention now turns to the upcoming T20Is, this Test match at Chepauk marked a
                                    return of women's Test cricket to the venue after nearly five decades, showcasing
                                    cricket at its finest with moments of resilience and skill on display.
                                </Typography>

                            </Paper>

                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/india-won-t20-world-cup-2024"
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

                                            <u>India Clinches Second T20 World Cup Title in a Thrilling Finale Against South Africa</u>
                                        </Typography>
                                    </Link>

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
                                            <u>Mumbai Overflows with Joy as Fans Celebrate India's T20 World Cup Victory </u>
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

export default BlogContent11

