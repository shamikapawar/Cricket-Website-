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

const BlogContent17 = () => {
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
                  Suryakumar Yadav: The New Captain of India's T-20 Cricket Team
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
                    JULY 30, 2024
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
                    <u style={{ marginRight: "15px" }}>Suryakumar Yadav captain</u>
                    <u style={{ marginRight: "15px" }}>Hardik Pandya vice-captain</u>
                    <u style={{ marginRight: "15px" }}>Indian T-20 cricket new era</u>
                    <u style={{ marginRight: "15px" }}>Young players Indian cricket</u>
                  </Typography>
                </div>
                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="b17.avif"
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
                  Introduction
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
                  In a significant move that has sent ripples through the cricketing community, Suryakumar Yadav has been appointed as the captain of India's T-20 cricket team. Known for his explosive batting and consistent performances, Yadav's elevation to the captaincy marks a new chapter for Indian cricket.Since Hardik Pandya was doing the captaincy for indian team in absence of Rohit Sharma and also he was the vice-captain in the last t-20 world cup where india was victorious, making SKY a full time captain has grabbed some eyeballs. So let’s delve into what this means for the team and the cricketing world at large.
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
                  Suryakumar Yadav's Journey
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
                  Suryakumar Yadav, often referred to as SKY, has had a remarkable journey in cricket. Born in Mumbai, he honed his skills in the competitive environment of Indian domestic cricket. His consistent performances in the Indian Premier League (IPL) for Mumbai Indians showcased his talent on a global stage. Yadav's ability to adapt to different situations and his fearless approach to batting made him a standout player, eventually earning him a place in the Indian national team.
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="b171.jpg"
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
                  A Natural Leader
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
                  Yadav's appointment as captain is seen as a natural progression. His calm demeanor, tactical acumen, and ability to lead by example have been evident throughout his career. As a senior player, he has often been a guiding force for younger teammates, both on and off the field. His leadership style is expected to bring a fresh perspective to the team, focusing on a blend of aggression and strategic planning.
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
                  Expectations and Challenges
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
                  Taking over the captaincy of a team like India comes with its own set of challenges. The expectations are immense, and the pressure to perform is ever-present. However, Yadav's experience and composure will be key assets in navigating these challenges. His deep understanding of the game, combined with his innovative thinking, will be crucial in devising strategies against formidable opponents.

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
                  A New Era for Indian T-20 Cricket
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
                  Yadav's captaincy is expected to usher in a new era for Indian T-20 cricket. With a focus on aggressive batting, sharp fielding, and smart bowling changes, the team is likely to adopt a dynamic approach under his leadership. His rapport with fellow players and his ability to inspire confidence will be instrumental in fostering a cohesive and motivated unit.

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
                  Impact on Young Players
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
                  One of the most exciting aspects of Yadav's captaincy is the potential impact on young players. Known for his encouraging nature, Yadav is likely to nurture emerging talents, providing them with the necessary guidance and opportunities to shine on the international stage. His journey from domestic cricket to the national team serves as an inspiration for aspiring cricketers, and his leadership can help in harnessing young talent effectively.

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
                  Suryakumar Yadav's appointment as the captain of India's T-20 cricket team is a momentous occasion. It symbolizes a blend of experience, talent, and leadership that can drive the team to new heights. As fans, we eagerly await the exciting times ahead, confident that under Yadav's captaincy, Indian T-20 cricket will continue to thrive and achieve greater success.
                </Typography>
              </Paper>
              <Paper>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

                      <u> Farewell to a Legend: James Anderson Bows Out from Cricket</u>
                    </Typography>
                  </Link>

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
                      <u>  </u>
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

export default BlogContent17
