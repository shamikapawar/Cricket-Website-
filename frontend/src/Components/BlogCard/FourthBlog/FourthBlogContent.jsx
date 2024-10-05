import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import ShareIcons from "../../SideImagesBlog/ShareIcons";
import Avatar from '@mui/material/Avatar';
import '../../../App.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import { Helmet } from "react-helmet";


const FourthBlogContent = () => {
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
    <div style={{ marginTop: "80px" }}>
            <Helmet>
        <title>Was Hardik Pandya the Right Choice for Mumbai Indians Captain? Analyzing Leadership Decisions and Future Prospects</title>
        <meta name="description" content="Explore a die-hard fan's perspective on Hardik Pandya’s appointment as Mumbai Indians' captain. Analyze the timing of the decision, compare with Rohit Sharma’s legacy, and discuss what’s next for the team in this detailed blog post." />
        <meta name="keywords" content="Hardik Pandya Mumbai Indians captain, Hardik Pandya vs Rohit Sharma, Mumbai Indians IPL 2024, Mumbai Indians leadership, Hardik Pandya IPL performance, Rohit Sharma Mumbai Indians, Mumbai Indians captaincy analysis, IPL leadership decisions, Mumbai Indians future, Hardik Pandya captaincy review, Mukesh Ambani" />
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
                    fontFamily: "DM Sans,sans-serif",
                    color: "black",
                    fontSize: "1.799rem",
                    fontWeight: "bolder",
                    margin: "15px ",
                    whiteSpace: "pre-line",
                  }}
                >
                  Was Hardik Pandya the Right Choice for Mumbai Indians Captain?
                  An Analysis from a Die-Hard Fan
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
                    JUNE 19, 2024
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
                    <u style={{ marginRight: "15px" }}>Hardik Pandya</u>
                    <u style={{ marginRight: "15px" }}>Rohit Sharma</u>
                    <u style={{ marginRight: "15px" }}>Mumbai Indians</u>
                    <u style={{ marginRight: "15px" }}>IPL</u>
                    <u style={{ marginRight: "15px" }}>Leadership</u>
                    <u style={{ marginRight: "15px" }}>Mukesh Ambani</u>
                  </Typography>
                </div>


                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="hardik-1.jpg"
                    alt="green iguana"
                  />
                </Box>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  As a passionate Mumbai Indians fan, the appointment of Hardik
                  Pandya as the captain of our beloved team was a moment of mixed
                  emotions. On one hand, Hardik has been a crucial part of Mumbai
                  Indians' success over the years, but on the other hand, the
                  decision raised questions about timing and the treatment of our
                  stalwart captain, Rohit Sharma. Let's dive deep into this
                  contentious decision.
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
                  Hardik Pandya: A Star in the Making
                </h2>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  Hardik Pandya’s rise in Mumbai Indians has been meteoric. Since
                  making his debut in 2015, he has evolved into one of the most
                  explosive all-rounders in the Indian Premier League (IPL). His
                  ability to change the course of a game with both bat and ball
                  has been pivotal for the team.
                  <li>
                    Performance Under Pressure: Hardik has shown the ability to
                    perform under pressure. His crucial knocks and timely wickets
                    have often been the difference-maker for Mumbai Indians in
                    tight matches.
                  </li>
                  <li>
                    Aggressive Captaincy Potential: His aggressive style and
                    never-say-die attitude reflect a leadership quality that
                    resonates with the modern T20 game. His stint as the captain
                    of Gujarat Titans in the 2022 IPL, leading them to their
                    maiden title in their debut season, further proved his
                    credentials​ (icc)​ .
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
                  The Timing of the Decision
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  The decision to appoint Hardik Pandya as the captain can be seen
                  as both a bold and risky move.
                  <li>
                    Injury Concerns: Hardik has struggled with injuries over the
                    past few seasons, which has often kept him out of key matches.
                    His fitness remains a concern, and entrusting him with the
                    captaincy adds additional pressure.
                  </li>
                  <li>
                    Leadership Experience: While his leadership of Gujarat Titans
                    was successful, leading Mumbai Indians, with its star-studded
                    lineup and high expectations, is a different ball game
                    altogether. The timing of the decision raises questions about
                    whether the management considered these factors adequately.
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
                  Rohit Sharma: The Undisputed Leader
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  Rohit Sharma's contributions to Mumbai Indians are unparalleled.
                  Under his captaincy, Mumbai Indians have won five IPL titles,
                  making them the most successful franchise in the league’s
                  history.
                  <li>
                    Calm and Composed Leadership: Rohit’s calm demeanor and
                    strategic acumen have been instrumental in handling
                    high-pressure situations and guiding the team to victory.
                  </li>
                  <li>
                    Batting Prowess: As a batsman, Rohit has been a consistent
                    performer, anchoring the innings at the top of the order and
                    playing match-winning knocks.
                  </li>
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="Rohit-2.jpg"
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
                  Did Rohit Sharma Deserve Better Treatment?
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  The transition from Rohit to Hardik should have been managed
                  with more transparency and respect for Rohit's contributions.
                  Rohit deserved a proper send-off or a clear communication
                  regarding his future role within the team.
                  <li>
                    Respecting Legacy: Rohit Sharma's legacy with Mumbai Indians
                    is monumental. Any change in leadership should reflect his
                    significant contributions and ensure that his exit from the
                    captaincy role is graceful.
                  </li>
                  <li>
                    Continuity and Transition: A gradual transition, where Rohit
                    mentors Hardik, could have been a more prudent approach. This
                    would ensure continuity and a smoother handover of
                    responsibilities.
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
                  Conclusion: A Balanced Perspective
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  Hardik Pandya as Mumbai Indians’ captain brings a fresh and
                  dynamic approach that aligns with the evolving nature of T20
                  cricket. However, the decision does seem a bit rushed given
                  Hardik’s injury concerns and the immense pressure of leading
                  such a high-profile team.
                  <p />
                  Rohit Sharma deserved a more respectful and transparent handling
                  of the leadership transition. His legacy with Mumbai Indians
                  should be honored, and he should continue to play a significant
                  role within the team, possibly as a mentor or senior player
                  providing strategic insights.
                  <p />
                  As a die-hard Mumbai Indians fan, while I welcome Hardik’s
                  leadership, I hope the management ensures that Rohit’s
                  contributions are adequately acknowledged, and he remains an
                  integral part of the team’s journey ahead.
                </Typography>
              </Paper>
              <Paper>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="/looking-at-the-usa-performance-this-world-cup"
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

                      <u> Looking at the USA’s performance this <br/>t-20 world cup, a very
                        promising and beyond Satisfactory.</u>
                    </Typography>
                  </Link>

                  <Link to="/thala-for-a-reason-examining-csk-decline-this-year"
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
                      <u>  "Thala for a Reason": Examining CSK's Decline This Year</u>
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
  );
};

export default FourthBlogContent;
