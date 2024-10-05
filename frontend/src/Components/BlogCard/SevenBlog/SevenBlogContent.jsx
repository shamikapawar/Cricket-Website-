import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import ShareIcons from "../../SideImagesBlog/ShareIcons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import '../../../App.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { Helmet } from "react-helmet";


const SevenBlogContent = () => {
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
        <div>
            <Helmet>
                <meta name="title" content="Gautam Gambhir: The Unsung Hero of the 2007 and 2011 World Cups | Blog" />
                <meta name="description" content="Explore the remarkable journey of Gautam Gambhir, the unsung hero of India's 2007 T20 World Cup and 2011 Cricket World Cup victories. Discover his key performances, attributes, and legacy in this detailed blog post." />
                <meta name="keywords" content="Gautam Gambhir, 2007 T20 World Cup, 2011 Cricket World Cup, Indian cricket, cricket heroes, cricket legacy, cricket performances, Gautam Gambhir achievements, cricket history, India cricket success" />

            </Helmet>
            <Box sx={{ margin: "20px", marginTop: "75px" }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                "& > :not(style)": {
                                    m: 1,
                                    width: "100%",
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
                                        fontFamily: "DM Sans, sans-serif",
                                        color: "black",
                                        fontSize: "1.799rem",
                                        fontWeight: "bolder",
                                        margin: "15px ",
                                        whiteSpace: "pre-line",
                                    }}
                                >
                                    Gautam Gambhir: The Unsung Hero of the 2007 and 2011 World Cups

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
                                        JUNE 22, 2024
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
                                            fontSize: "1rem",
                                            fontWeight: "500",
                                            margin: "10px ",


                                        }}
                                    >
                                        <u style={{ marginRight: "15px" }}>Gautam Gambhir</u>
                                        <u style={{ marginRight: "15px" }}>Indian cricket</u>
                                        <u style={{ marginRight: "15px" }}>Unsung Hero</u>
                                        <u style={{ marginRight: "15px" }}>T20 World Cup 2007</u>
                                        <u style={{ marginRight: "15px" }}>T20 World Cup 2011</u>
                                    </Typography>
                                </div>


                                <Divider variant="middle" />
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        height="auto"
                                        image="B7.jpg"
                                        alt="Surya Kumar Yadav"
                                    />
                                </Box>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    Gautam Gambhir, often overshadowed by the more glamorous stars of
                                    Indian cricket, played pivotal roles in two of India's
                                    most significant cricketing triumphs: the 2007 ICC T20
                                    World Cup and the 2011 ICC Cricket World Cup. His
                                    contributions were crucial in India clinching these
                                    titles, earning him the status of an unsung hero in the annals of Indian cricket.
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
                                    2007 ICC T20 World Cup

                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    In the inaugural T20 World Cup held in South Africa, India entered the tournament with low expectations,
                                    especially after a disappointing 50-over World Cup earlier that year. However, under the captaincy of
                                    MS Dhoni and with a blend of young talent, the team exceeded expectations.
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        fontSize: "1.205rem",
                                        fontWeight: "500",
                                        margin: "15px",

                                    }}
                                >
                                    <li >Final Against Pakistan</li>

                                </Typography>

                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong> Match Situation: </strong>
                                        In a high-pressure final against arch-rivals Pakistan, Gambhir played a lone hand at the top of the order.
                                    </li>
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong>Performance: </strong>
                                        He scored a crucial 75 off 54 balls, anchoring the Indian innings and helping set a competitive total of 157.

                                    </li>
                                    <li style={{ listStyleType: "circle" }} >
                                        <strong> Impact: </strong>
                                        His innings was characterized by composure and aggression, laying a strong foundation that ultimately led to a nail-biting win for India.

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
                                    2011 ICC Cricket World Cup
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    The 2011 World Cup, co-hosted by India, Sri Lanka, and Bangladesh, was a historic tournament for Indian cricket. The expectations were immense, and the pressure was on the team to deliver on home soil.
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        fontSize: "1.205rem",
                                        fontWeight: "500",
                                        margin: "15px",

                                    }}
                                >
                                    <li> Final Against Sri Lanka:</li>

                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong>Match Situation: </strong>
                                        Chasing a formidable target of 275 in the final at Wankhede Stadium, Mumbai, India found themselves in trouble early on, losing Virender Sehwag and Sachin Tendulkar cheaply.

                                    </li>
                                    <li style={{ listStyleType: "circle" }} >
                                        <strong> Performance: </strong>
                                        Gambhir walked in at a precarious position and steadied the innings with a gritty 97 off 122 balls. His partnership with Virat Kohli and later with MS Dhoni was crucial in turning the tide in India's favor.

                                    </li>
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong>Impact: </strong>
                                        Impact: Although he fell short of a century, Gambhir's innings was the backbone of India’s chase, setting the stage for Dhoni to finish the match with his iconic six.

                                    </li>
                                </Typography>
                                <h2
                                    style={{
                                        fontFamily: "DM Sans,sans-serif",
                                        color: "blue",
                                        fontSize: "1.375rem",
                                        fontWeight: "500",
                                        margin: "15px",
                                    }}
                                >
                                    Gambhir’s Attributes
                                </h2>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong> Mental Toughness: </strong>
                                        Gambhir's ability to perform under pressure was evident in both finals. His mental fortitude and determination made him a reliable player in crucial situations.
                                    </li>
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong>Adaptability: </strong>
                                        His versatility and adaptability across different formats and conditions were key to his success. Whether it was the fast-paced T20 format or the more demanding 50-over format, Gambhir adjusted his game to suit the team's needs.

                                    </li>
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong>Leadership Qualities: </strong>
                                        Although not the captain during these tournaments, Gambhir’s leadership qualities were on display. His ability to guide younger players and his strategic thinking were assets to the team.

                                    </li>
                                </Typography>
                                <Box sx={{ margin: "25px 0" }}>
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        height="auto"
                                        image="B71.jpg"
                                        alt="Surya Kumar Yadav"
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
                                    Recognition and Legacy

                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >

                                    Despite his significant contributions 123 Gambhir often did not receive the same level of adulation as some of his contemporaries. However, his teammates and cricketing experts have consistently acknowledged his importance in India’s World Cup victories.
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong>Team Player: </strong>
                                        Gambhir always emphasized team success over personal glory, a trait that endeared him to his colleagues and coaches.

                                    </li>
                                    <li style={{ listStyleType: "circle" }}>
                                        <strong>Role Model: </strong>
                                        His work ethic and commitment to the game have made him a role model for aspiring cricketers.

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
                                    Conclusion

                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "DM Sans, sans-serif",
                                        fontSize: "0.985rem",
                                        fontWeight: "500",
                                        margin: "15px ",
                                        wordSpacing: "0.10em",
                                    }}
                                >
                                    Gautam Gambhir’s performances in the 2007 T20 World Cup and the 2011 Cricket World Cup were instrumental in India’s triumphs. His innings in the finals of both tournaments exemplified his skill, resilience, and unyielding spirit. While he may not always be in the limelight, Gambhir's contributions have left an indelible mark on Indian cricket, making him truly an unsung hero of these monumental victories.
                                </Typography>
                            </Paper>
                            <Paper>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Link to="/kkr's-win-a-lesson-for-franchises-relying-on-big-names"
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

                                            <u> KKR’s Win: A Lesson for Franchises Relying<br /> on Big Names</u>
                                        </Typography>
                                    </Link>

                                    <Link to="/A-Detailed-Analysis-of-One-of-the-Greatest-Bowlers-of-Our-Time"
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
                                                margin: '6px',
                                                cursor: 'pointer',
                                                textDecoration: hover.newLaunch ? 'underline' : 'none',
                                            }}
                                            onMouseEnter={() => handleMouseEnter('newLaunch')}
                                            onMouseLeave={() => handleMouseLeave('newLaunch')}
                                        >
                                            <u>Jasprit Bumrah: A Detailed Analysis of<br /> One of the Greatest Bowlers of Our Time </u>
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

export default SevenBlogContent
