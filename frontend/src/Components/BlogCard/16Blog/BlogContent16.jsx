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

const BlogContent16 = () => {
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
        <div style={{ marginTop: "20px" }}>
            <Helmet>
                <title>Farewell to a Legend: James Anderson Bows Out from Cricket</title>
                <meta name="description" content="After a stellar career spanning over two decades, England's fast bowling legend, James Anderson, has announced his retirement from all forms of cricket. This article looks back at his incredible journey and contributions to the game." />
                <meta name="keywords" content="James Anderson retirement, Test cricket records, Swing bowling masterclass, James Anderson legacy" />
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
                                    Farewell to a Legend: James Anderson Bows Out from Cricket
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
                                        JULY 17, 2024
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
                                        <u style={{ marginRight: "15px" }}>James Anderson retirement</u>
                                        <u style={{ marginRight: "15px" }}>Test cricket records</u>
                                        <u style={{ marginRight: "15px" }}>Swing bowling masterclass</u>
                                        <u style={{ marginRight: "15px" }}>James Anderson legacy</u>
                                    </Typography>
                                </div>
                                <Divider variant="middle" />
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b16.jpg"
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
                                    After a stellar career spanning over two decades, England's fast bowling legend, James Anderson, has announced his retirement from all forms of cricket. As fans around the world come to terms with this news, we take a look back at the incredible journey of a cricketer who has left an indelible mark on the game.
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
                                    A Glittering Career: Records and Milestones
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
                                    James Anderson’s career is a testament to skill, perseverance, and unwavering dedication. Debuting in 2003 against Zimbabwe, Anderson’s career saw him evolve from a promising youngster to one of the greatest fast bowlers in the history of cricket.
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
                                    Key Records and Achievements:
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
                                            Most Wickets by a Fast Bowler in Tests:
                                        </strong>
                                        Anderson holds the record for the most wickets by a fast bowler in Test cricket, amassing over 700 wickets. His ability to swing the ball both ways, even in unhelpful conditions, set him apart from his contemporaries
                                    </li>
                                    <li>
                                        <strong>
                                            Five-Wicket Hauls:
                                        </strong>
                                        With over 30 five-wicket hauls in Test cricket, Anderson has been a match-winner for England on numerous occasions, often breaking crucial partnerships and turning games in his team's favor.
                                    </li>
                                    <li>
                                        <strong>
                                            Longevity:
                                        </strong>
                                        One of the most remarkable aspects of Anderson’s career is his longevity. Playing into his 40s, he defied age and continued to perform at the highest level, maintaining his fitness and skill with meticulous care.
                                    </li>
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
                                    Memorable Performances: Defining Moments
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
                                    Throughout his illustrious career, Anderson has delivered countless memorable performances. Here are a few that stand out:
                                    <p />
                                    <strong>
                                        1. The Ashes, 2010-11:
                                    </strong>
                                    Anderson was instrumental in England’s historic Ashes win in Australia. He claimed 24 wickets in the series, including a crucial 4-wicket haul in the Adelaide Test, helping England secure their first series win Down Under in 24 years.
                                    <p />
                                    <strong>
                                        2. The Swing Masterclass at Trent Bridge, 2013:
                                    </strong>
                                    In the first Test of the 2013 Ashes series at Trent Bridge, Anderson's swinging deliveries left the Australian batsmen in tatters. His 10-wicket haul in the match played a pivotal role in England's thrilling 14-run victory.
                                    <p />
                                    <strong>
                                        3. The 600th Wicket:
                                    </strong>
                                    In August 2020, Anderson became the first fast bowler to reach 600 Test wickets, achieving this milestone against Pakistan. This landmark achievement underscored his durability and skill, setting a benchmark for future generations.
                                    <p />
                                    <strong>
                                        The Art of Swing Bowling: Anderson’s Legacy
                                    </strong>
                                    James Anderson’s legacy extends beyond his records. He has been a master of swing bowling, with a seamless ability to move the ball in both directions. His control, accuracy, and ability to outthink batsmen have been the hallmarks of his success.
                                    <p />
                                    <strong>
                                        Impact on Young Bowlers:
                                    </strong>
                                    Anderson’s career has been an inspiration for young fast bowlers around the world. His work ethic, attention to detail, and constant quest for improvement are lessons that aspiring cricketers can emulate.
                                    <p />
                                    <strong>
                                        Contributions to English Cricket:
                                    </strong>
                                    Anderson has been a cornerstone of English cricket for nearly two decades. His partnership with Stuart Broad has been one of the most successful in Test cricket history, providing England with a potent new-ball attack.
                                    <p />
                                    <strong>
                                        The End of an Era: Reflections and Tributes
                                    </strong>
                                    As Anderson hangs up his boots, tributes have poured in from the cricketing fraternity. Former teammates, opponents, and fans have expressed their admiration and gratitude for his contributions to the game.
                                    <p />
                                    <strong>
                                        Joe Root, England Captain:
                                    </strong>
                                    "Sometimes you can be a bit lost for words, and if you gave me 15 minutes, I still wouldn't be able to compliment him enough. He is 41 years old and still always looking to improve himself as a bowler," Stokes said as quoted from Sky Sports.
                                    <p />
                                    <strong>
                                        Sachin Tendulkar, Cricketing Legend:
                                    </strong>
                                    “Hey Jimmy! You've bowled the fans over with that incredible 22-year spell. Here's a little wish as you bid goodbye. It has been a joy to watch you bowl - with that action, speed, accuracy, swing and fitness. You've inspired generations with your game. Wish you a wonderful life ahead with good health and happiness as you put those new shoes on for the most important spell of your life - the time with family.”
                                    <p />
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b161.jpg"
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
                                    The Next Chapter: Life After Cricket
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
                                    While James Anderson may have retired from playing, his association with cricket is far from over. There is speculation that he may take up coaching roles, mentoring young fast bowlers, or become a commentator, sharing his insights and experiences with fans worldwide.
                                    <p />
                                    Anderson’s journey from a young boy in Burnley to becoming a cricketing legend is a story of passion, resilience, and excellence. As we bid farewell to one of the game's greats, we celebrate a career that has given us countless moments of joy and excitement.
                                </Typography>
                            </Paper>

                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

                                            <u> Gautam Gambhir appointed as indian cricket team head coach.</u>
                                        </Typography>
                                    </Link>

                                    <Link to="/Suryakumar-Yadav-The-New-Captain-of-India's-T-20-Cricket-Team"
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
                                            <u> Suryakumar Yadav: The New Captain of India's T-20 Cricket Team </u>
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

export default BlogContent16
