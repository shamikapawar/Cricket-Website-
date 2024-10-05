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

const EightBlogContent = () => {
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
        <title>Board of Veteran International Fast Bowlers' Commentary on Jasprit Bumrah</title>
        <meta name="description" content="Explore insights from legendary fast bowlers like Glenn McGrath, Wasim Akram, and Dale Steyn as they comment on Jasprit Bumrah's impact on modern cricket. Learn about Bumrah's unique bowling action, mastery of the yorker, and key factors contributing to his success in international cricket." />
        <meta name="keywords" content="Jasprit Bumrah, Fast Bowlers Commentary, Glenn McGrath, Wasim Akram, Dale Steyn, Cricket Analysis, Jasprit Bumrah Review, Cricket Fast Bowlers, International Cricket, Cricket Legends, Bumrah Impact, Cricket Techniques, Bowling Mastery, Cricket Skills, Cricket Legends Commentary" />
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
                  Jasprit Bumrah: A Detailed Analysis of One of the    Greatest Bowlers of Our Time
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
                    JUNE 23, 2024
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
                    <u style={{ marginRight: "15px" }}>Jasprit Bumrah</u>
                    <u style={{ marginRight: "15px" }}>Fast Bowler</u>
                    <u style={{ marginRight: "15px" }}>Cricket</u>
                    <u style={{ marginRight: "15px" }}>Fitness</u>
                    <u style={{ marginRight: "15px" }}>Innovation</u>
                  </Typography>
                </div>

                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="B81.jpg"
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
                  Unique Bowling Action and Skill Set
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
                  <strong>
                    Unique Action:
                  </strong>
                  Bumrah's unconventional bowling action has been a significant factor in his success. His short run-up and unique release point make it challenging for batsmen to pick up his deliveries early, adding an element of surprise.
                  <p />
                  <strong>
                    Skill Set:
                  </strong>
                  Bumrah combines pace, precision, and a variety of deliveries to outsmart batsmen. His ability to bowl yorkers, slower balls, and bouncers with remarkable control makes him a versatile and unpredictable bowler.

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
                  Versatility Across Formats

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


                  <strong>
                    Test Cricket:
                  </strong>
                  Bumrah's impact in Test cricket is profound. He made his Test debut in January 2018 against South Africa, and his performance in overseas tours has been particularly impressive. For instance, in the 2018-19 series against Australia, Bumrah played a crucial role in India’s historic Test series win, taking 21 wickets in four matches, including a career-best 6/33 at Melbourne.
                  <p />
                  <strong>
                    ODIs and T20Is:
                  </strong>
                  In limited-overs cricket, Bumrah's ability to bowl at any stage of the innings is invaluable. In the 2019 ICC Cricket World Cup, he was the leading wicket-taker for India, with 18 wickets in 9 matches. His economy rate of 4.41 in the tournament was exceptional, showcasing his ability to contain runs while taking wickets.
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
                  Death Bowling Specialist
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
                  Bumrah is widely regarded as one of the best death bowlers in the world. His precision with yorkers and slower deliveries makes him difficult to score off in the final overs of a match.
                  <p />
                  <strong>
                    Examples:
                  </strong>
                  <li>
                    <strong>
                      IPL Success:
                    </strong>
                    Playing for Mumbai Indians in the Indian Premier League, Bumrah has consistently been one of the top performers. His ability to deliver in crunch situations has helped Mumbai Indians win multiple IPL titles.
                  </li>
                  <li>
                    <strong>
                      Super Over Performance:
                    </strong>
                    In the 2019 IPL, Bumrah bowled a brilliant Super Over against Sunrisers Hyderabad, conceding only 8 runs and taking a wicket, leading Mumbai Indians to victory.
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
                  Wicket-Taking Ability
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
                  Bumrah has a knack for breaking crucial partnerships and taking wickets at key moments, often shifting the momentum in favor of his team.
                  <p />
                  <strong>
                    Examples:
                  </strong>
                  <li>
                    <strong>
                      Hat-Trick in Tests:
                    </strong>
                    In August 2019, during the second Test against the West Indies, Bumrah took a hat-trick, becoming only the third Indian to achieve this feat in Test cricket. His spell of 6/27 in that match was a masterclass in fast bowling.
                  </li>
                  <li>
                    <strong>
                      Decisive Spells:
                    </strong>
                    In the 2021 Test series against England, Bumrah’s spell on the final day of the Oval Test was instrumental in India’s victory, where he took two crucial wickets, helping India secure a famous win.
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
                  Consistency and Fitness
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
                  Maintaining high performance levels consistently is one of Bumrah’s significant strengths. Despite a few injury setbacks, he has managed to come back stronger each time.
                  <p />
                  <strong>
                    Examples:
                  </strong>
                  <li>
                    <strong>
                      ICC Rankings:
                    </strong>
                    Bumrah has regularly featured at the top of the ICC rankings for bowlers across formats. He was ranked the number one ODI bowler in 2018 and has often been in the top five in Test rankings.
                  </li>
                  <li>
                    <strong>
                      Return from Injury:
                    </strong>
                    After a back injury in 2019, Bumrah made a strong comeback in early 2020, continuing to be a vital cog in India’s bowling attack across formats.
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
                  Impact on Team Success
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
                  Bumrah’s contributions have been pivotal to India’s success in various tournaments and series.
                  <p />
                  <strong>
                    Examples:
                  </strong>
                  <li>
                    <strong>
                      Asia Cup 2018:
                    </strong>
                    Bumrah was the leading wicket-taker in the tournament, playing a crucial role in India’s title win.
                  </li>
                  <li>
                    <strong>
                      Test Series Wins:
                    </strong>
                    His performances in overseas Test series wins in Australia (2018-19) and England (2021) have been instrumental in India’s success.
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
                  Recognition and Awards
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
                  Bumrah’s excellence has been acknowledged with numerous awards and accolades.
                  <p />
                  <strong>
                    Examples:
                  </strong>
                  <li>
                    <strong>
                      ICC Awards:
                    </strong>
                    He has been named in ICC Teams of the Year across formats multiple times.
                  </li>
                  <li>
                    <strong>
                      Wisden Cricketer of the Year:
                    </strong>
                    Bumrah was named one of the Wisden Cricketers of the Year in 2019, recognizing his impact on the game globally.
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
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  Jasprit Bumrah's combination of unique skills, versatility, consistency, and ability to deliver in crucial moments makes him one of the greatest bowlers of our time. His contributions have significantly impacted India's success in all formats, and his performances continue to inspire cricket fans and aspiring bowlers worldwide. While the title of the "greatest" bowler is subjective and depends on various factors, Bumrah's place among the elite fast bowlers of the modern era is unquestionable.
                </Typography>
              </Paper>
              <Paper>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Link to="/gautam-gambhir-the-unsung-hero-of-2007-and-2011-world-cups"
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

                      <u>  Gautam Gambhir: The Unsung Hero of the <br />2007 and 2011 World Cups Gautam Gambhir:<br /> The Unsung Hero of the 2007 and 2011 World Cups</u>
                    </Typography>
                  </Link>

                  <Link to="/afghanistan-reaches-t20-world-cup-semi-finals-first-time"
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
                      <u>Historic Triumph: Afghanistan Reaches <br />T20 World Cup Semi-Finals for the First Time </u>
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

export default EightBlogContent
