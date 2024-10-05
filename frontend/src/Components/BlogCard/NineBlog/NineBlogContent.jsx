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

const NineBlogContent = () => {
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
    <div style={{ marginTop: "75px" }}>
      <Helmet>
        <title>Historic Triumph: Afghanistan Reaches T20 World Cup Semi-Finals for the First Time</title>
        <meta name="description" content="Discover the historic achievement of Afghanistan reaching the T20 World Cup semi-finals for the first time. Explore key points of their performance, including team cohesion, bowling brilliance, batting improvements, fielding excellence, and leadership. Learn how this achievement impacts the future of Afghan cricket." />
        <meta name="keywords" content="Afghanistan T20 World Cup semi-finals, Historic achievement Afghanistan cricket, T20 World Cup performance analysis, Afghanistan cricket team, Rashid Khan bowling, Hazratullah Zazai batting, Mohammad Nabi leadership, Afghanistan cricket milestones, Future of Afghan cricket, Cricket World Cup history" />
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
                  "Historic Triumph: Afghanistan Reaches T20 World Cup Semi-Finals for the First Time"
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
                    JUNE 24, 2024
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
                    <u style={{ marginRight: "15px" }}> Afghanistan</u>
                    <u style={{ marginRight: "15px" }}> T20 World Cup</u>
                    <u style={{ marginRight: "15px" }}>Rashid Khan</u>
                    <u style={{ marginRight: "15px" }}>Batting</u>
                    <u style={{ marginRight: "15px" }}>Leadership</u>
                  </Typography>
                </div>

                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="B9.webp"
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
                  Afghanistan's performance in this T20 World Cup has been nothing short of remarkable. Reaching the semi-finals for the first time in their history is a testament to their growth as a cricketing nation and their relentless pursuit of excellence.
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
                  Key Points of Afghanistan's Performance:
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

                  <li>
                    <strong>Team Cohesion and Strategy: </strong>
                    The team displayed remarkable cohesion, both on and off the field. Their strategic planning and execution were evident in their game plans, which were well thought out and adapted to different opponents.
                  </li>
                  <p />
                  <li>
                    <strong>Bowling Brilliance: </strong>
                    Afghanistan's spin attack, led by Rashid Khan, was exceptional. Rashid's ability to take crucial wickets and maintain a tight economy rate was pivotal. The support from other spinners like Mujeeb Ur Rahman and the pace attack, including Naveen-ul-Haq, added depth to their bowling arsenal.
                  </li>
                  <p />
                  <li>
                    <strong>  Batting Improvements: </strong>
                    The batting unit showed significant improvements, with consistent performances from key players. Hazratullah Zazai and Rahmanullah Gurbaz provided explosive starts, while experienced middle-order batsmen like Najibullah Zadran and Mohammad Nabi ensured stability and acceleration during crucial phases of the game.
                  </li>
                  <p />
                  <li>
                    <strong>Fielding and Fitness: </strong>
                    Their fielding standards were high, often saving crucial runs and affecting vital run-outs. The overall fitness levels of the players contributed to their agility and endurance throughout the tournament.
                  </li>
                  <p />
                  <li>
                    <strong> Mental Fortitude: </strong>
                    The team exhibited strong mental fortitude, bouncing back from challenging situations and handling pressure with maturity. Their ability to stay composed under pressure was instrumental in their success.
                  </li>
                  <p />
                  <li>
                    <strong>  Leadership: </strong>
                    Mohammad Nabi’s leadership was exemplary. His tactical acumen, ability to inspire the team, and personal performances provided a strong foundation for Afghanistan's success.
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
                  Historic Achievement:
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.05em",
                  }}
                >
                  Reaching the semi-finals marks a historic milestone for Afghanistan cricket. This achievement is a culmination of years of hard work, dedication, and investment in grassroots cricket and infrastructure. It also highlights the immense talent and potential within the country.
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
                  Impact on Future:
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
                  This performance will undoubtedly inspire a new generation of cricketers in Afghanistan. It places them firmly on the global cricketing map and promises a bright future. The experience gained from competing at such a high level will be invaluable for the players and the team management, setting a solid platform for future tournaments.
                  <p />
                  In conclusion, Afghanistan's journey to the semi-finals in this T20 World Cup is a story of resilience, skill, and determination. They have proven that they belong among the elite teams in world cricket and have set the stage for even greater achievements in the future.
                </Typography>
              </Paper>
              <Paper>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

                      <u> Jasprit Bumrah: A Detailed Analysis of<br/> One of the Greatest Bowlers of Our Time</u>
                    </Typography>
                  </Link>

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
                      <u>
                        India Clinches Second T20 World Cup Title in a Thrilling Finale Against South Africa
                      </u>
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

export default NineBlogContent
