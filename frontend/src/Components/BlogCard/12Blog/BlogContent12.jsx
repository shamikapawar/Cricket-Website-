import React from 'react'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import ShareIcons from "../../SideImagesBlog/ShareIcons";
import Avatar from '@mui/material/Avatar';
import '../../../App.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { Helmet } from 'react-helmet';

const BlogContent12 = () => {
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
                <title>Mumbai Overflows with Joy as Fans Celebrate India's T20 World Cup Victory</title>
                <meta name="description" content="Mumbai's streets came alive with fans celebrating India's T20 World Cup victory. Read about the thrilling celebrations and the emotional journey of the team." />
                <meta name="keywords" content="Mumbai, India, T20 World Cup, cricket, celebrations, victory lap, fans, cricket team" />
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
                                    Mumbai Overflows with Joy as Fans Celebrate India's T20 World Cup Victory

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
                                        JULY 8, 2024
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
                                        <u style={{ marginRight: "15px" }}>Cricket fans enthusiasm</u>
                                        <u style={{ marginRight: "15px" }}>Historic cricket win</u>
                                        <u style={{ marginRight: "15px" }}>Cricket unity Mumbai</u>
                                        <u style={{ marginRight: "15px" }}>Marine Drive celebration</u>
                                    </Typography>
                                </div>
                                <Divider variant="middle" />
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b12.webp"
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
                                    Mumbai transformed into a sea of blue and white as fans thronged the streets to celebrate the Indian cricket team’s return home after their triumphant T20 World Cup 2024 victory. The city, known for its unwavering passion for cricket, turned out in full force to welcome their heroes for a much-anticipated victory lap.
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
                                    A Hero’s Welcome
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
                                    As the Indian cricket team landed at Chhatrapati Shivaji Maharaj International Airport, they were greeted by thousands of enthusiastic supporters. The airport was a cacophony of cheers, chants, and patriotic songs, with fans waving the tricolor and holding up banners congratulating the team.
                                    <p />
                                    The players, visibly touched by the overwhelming reception, made their way through the sea of supporters, waving and smiling, their faces beaming with pride and joy. The captain, holding the World Cup trophy aloft, was met with thunderous applause and cheers that echoed through the terminal.
                                    <p />
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
                                    The Victory Lap

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
                                    The team embarked on a victory lap through the streets of Mumbai in an open-top bus, giving fans a chance to catch a glimpse of their heroes. The streets were lined with jubilant supporters, from young children perched on their parents' shoulders to elderly fans who had seen the team through many ups and downs.
                                    <p />
                                    The bus moved slowly through the city, allowing the players to soak in the adulation and reciprocate the love with waves and smiles. The atmosphere was festive, with fans singing, dancing, and bursting crackers. It was a celebration of not just a sporting triumph, but a moment of national pride and unity.

                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b121.webp"
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
                                    Emotions Overflow
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
                                    The emotions among the fans were palpable. Many had taken the day off work or traveled from neighboring cities just to be part of the celebrations. The victory, coming after a hard-fought tournament, had sparked an outpouring of joy and pride that transcended age, gender, and socio-economic barriers.
                                    <p />
                                    "I've been a cricket fan all my life, and this victory feels like a personal achievement," said an elated fan draped in the Indian flag. "Seeing the team lift the trophy and now getting to celebrate with them is a dream come true."
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
                                    A City United
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
                                    Mumbai, a city often bustling with its own pace, came to a joyous standstill. The iconic Marine Drive, CST Station, and Gateway of India were awash with colors as fans celebrated together. The city, known for its resilience and spirit, showcased once again how cricket can unite millions.
                                    <p />
                                    Local businesses joined in the celebrations, offering discounts and hosting viewing parties. The city’s famous food stalls did brisk business, serving celebratory snacks and drinks to the revelers. It was a day when the city’s hustle and bustle gave way to unbridled joy and celebration.
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="40"
                                        height="450"
                                        image="b122.webp"
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
                                    Reflecting on the Journey
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
                                    For the players, the victory lap was a time to reflect on the journey that had brought them here. The hard work, dedication, and support from fans had culminated in a moment of triumph that would be etched in history. The team expressed their gratitude to the fans for their unwavering support throughout the tournament.
                                    <p />
                                    "Mumbai never disappoints. We got a solid reception. On behalf of the team, we would like to thank the fans. I am very very happy and relieved," Rohit Sharma said at the Wankhede Stadium.
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
                                    As the celebrations continued into the night, with fireworks lighting up the Mumbai skyline, there was a sense of optimism and excitement for the future. The victory had not only cemented India’s position as a cricketing powerhouse but also inspired a new generation of cricketers.
                                    <p />
                                    The team, while savoring the victory, was already looking ahead to new challenges and opportunities to bring more glory to the nation. The fans, rejuvenated by this historic win, promised to stand by their team, ready to cheer them on in every match.

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
                                    A Day to Remember

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
                                    Mumbai’s celebration of India’s T20 World Cup victory was a testament to the unifying power of sports. It was a day when the city came together to honor their heroes and revel in a shared moment of joy. As the players took their victory lap, they carried with them the hopes, dreams, and pride of a billion hearts.
                                    <p />
                                    Congratulations, Team India! Here's to many more victories and unforgettable moments.

                                </Typography>
                            </Paper>

                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/Indian-Women’s-Cricket-Team-Beats-SA-by-10-Wickets-2024"
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

                                            <u> Indian Women’s Cricket Team Beats <br/>SA by 10 Wickets</u>
                                        </Typography>
                                    </Link>

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
                                            <u>  Dominant India Thrashes Zimbabwe by <br/>100 Runs in Second T20 Match</u>
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

export default BlogContent12

