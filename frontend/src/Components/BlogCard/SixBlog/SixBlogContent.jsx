import React from 'react'
import ShareIcons from '../../SideImagesBlog/ShareIcons'
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { Helmet } from 'react-helmet';
import '../../../App.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";


const SixBlogContent = () => {
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
        <title>KKR’s Win: A Lesson for Franchises Relying on Big Names</title>
        <meta name="description" content="The Kolkata Knight Riders (KKR) have shown the cricketing world that success in the Indian Premier League (IPL) isn't solely dependent on having big-name players. Learn about the key factors behind KKR's success and lessons for other franchises." />
        <meta name="keywords" content="KKR, Kolkata Knight Riders, Venkatesh Iyer, Rinku Singh, Gautam Gambhir, IPL, Indian Premier League, cricket, team strategy, leadership, uncapped players" />
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
                <Typography
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    color: "black",
                    fontSize: "1.799rem",
                    fontWeight: "bolder",
                    margin: "15px ",
                    whiteSpace: "pre-line",
                  }}
                >
                  KKR’s Win: A Lesson for Franchises Relying on Big Names


                </Typography>
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
                    JUNE 21, 2024
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
                <div style={{ display: "flex" }}>
                  <Typography
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      color: "blue",
                      fontSize: "1rem",
                      fontWeight: "500",
                      margin: "10px ",


                    }}
                  >
                    <u style={{ marginRight: "15px" }}> Kolkata Knight Riders (KKR)</u>
                    <u style={{ marginRight: "15px" }}>Shreyas Iyer</u>
                    <u style={{ marginRight: "15px" }}>Rinku Singh</u>
                    <u style={{ marginRight: "15px" }}>Gautam Gambhir</u>
                    <u style={{ marginRight: "15px" }}>Leadership</u>
                  </Typography>
                </div>

                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="100%"
                    height="auto"
                    image="KKR-2.jpg"
                    alt="Surya Kumar Yadav"
                  />
                </Box>
                <Typography
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontSize: "0.985rem",
                    fontWeight: "500",
                    margin: "15px 0",
                    wordSpacing: "0.10em",
                  }}
                >The Kolkata Knight Riders (KKR) have shown the cricketing world that success in the Indian Premier League (IPL) isn't solely dependent on having big-name players. Their triumph in the 2024 season serves as a masterclass for other franchises, emphasizing the importance of nurturing uncapped players and focusing on team dynamics over individual star power.
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
                  Key Factors Behind KKR’s Success
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",
                  }}
                >
                  1. Reliance on Uncapped Players:
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

                  <li>
                    <strong>Emerging Talents: </strong>
                    KKR placed significant trust in their relatively young and newly emerged players, who rose to the occasion and delivered match-winning performances. Players like Venkatesh Iyer, Varun Chakaravarthy and Harshit Rana showcased their abilities, proving that talent and determination can often outweigh the presence of big names.
                  </li>

                  <li><strong>Opportunities and Confidence: </strong> By providing ample opportunities and instilling confidence in these young players, KKR created an environment where they could thrive and contribute meaningfully to the team’s success.
                  </li>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",
                  }}
                >
                  2. Balanced Bowling Attack:
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
                  <li>  <strong>Top Performers: </strong> While KKR didn’t have the highest wicket-taker of the tournament, they had 3 bowlers in the top 10 and 5 bowlers had 17 or above wickets, Varun Chakravarthy topping the list with more than 20 wickets in his kitty. This collective effort was instrumental in their campaign, as it ensured that the team always had reliable options to turn to in crucial moments.
                  </li>
                  <li>  <strong>Depth and Versatility: </strong> The depth in their bowling lineup, with both experienced and young bowlers contributing, allowed KKR to maintain pressure on the opposition throughout this season.
                  </li>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",
                  }}
                >
                  3. Strategic Acumen:
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
                  <li>
                    <strong>Effective Leadership: </strong>
                    The leadership group, including captain Shreyas Iyer, head coach Chandrakant Pandit, batting coach Abhishek Nayar and  mentor Gautam Gambhir, displayed astute cricketing acumen. Their ability to make tactical decisions, such as effective bowling changes and batting order adjustments, played a crucial role in their success.
                  </li>
                  <li>
                    <strong>Innovative Approaches: </strong>
                    KKR wasn’t afraid to innovate and adapt their strategies based on match situations, showcasing flexibility that is vital in the dynamic T20 format.
                  </li>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",

                  }}
                >
                  4. Team Cohesion and Spirit:
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
                  <li>
                    <strong>  Strong Team Ethos: </strong>
                    The team’s cohesion and camaraderie were evident in their performances. A strong team spirit often translates to better on-field results, as players support each other and work towards a common goal.
                  </li>
                  <li>
                    <strong>Role Clarity: </strong>
                    Clear roles and responsibilities ensured that each player knew their job, which helped in executing plans efficiently.
                  </li>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",

                  }}
                >
                  5. Effective Utilization of Resources:
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
                  <li>
                    <strong> Smart Player Management: </strong>
                    KKR managed their player resources wisely, ensuring that key players were fresh and fit for crucial matches. This strategic rest and rotation policy helped maintain optimal performance levels.
                  </li>
                  <li>
                    <strong>  Maximizing Potential: </strong>
                    The franchise focused on maximizing the potential of each player, regardless of their fame or experience. This approach paid off as lesser-known players stepped up and made significant contributions.
                  </li>
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="100%"
                    height="auto"
                    image="kkr-3.jpg"
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
                  Lessons for Other Franchises
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",

                  }}
                >
                  1. Talent Over Reputation:
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
                  <li>
                    <strong>Invest in Young Talent: </strong>
                    Franchises should scout and invest in young, uncapped players who can be groomed into match-winners.
                  </li>
                  <li>
                    <strong>Reduce Over-Reliance on Stars: </strong>
                    While star players bring experience and fan following, a balanced team with contributions from all members is more sustainable for long-term success.

                  </li>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",

                  }}
                >
                  2. Building a Cohesive Unit:

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
                  <li>
                    <strong>  Foster Team Spirit: </strong>
                    Creating a positive and supportive team environment can enhance performance and help players excel under pressure.
                  </li>
                  <li>
                    <strong>Clear Role Definition: </strong>
                    Ensure that every player understands their role and is given the confidence to execute it.
                  </li>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",

                  }}
                >
                  3. Strategic Flexibility:

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
                  <li>
                    <strong> Be Adaptable: </strong>
                    Franchises should be willing to adapt their strategies based on match conditions and opposition strengths and weaknesses.
                  </li>
                  <li>
                    <strong>Innovate Constantly: </strong>
                    Continuous innovation in tactics and gameplay can give teams an edge over their competitors.
                  </li>
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",

                  }}
                >
                  4. Focus on Balanced Performances:
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
                  <li>
                    <strong> Collective Effort: </strong>
                    A team that performs collectively, with contributions from both batsmen and bowlers, is more likely to succeed than one relying on individual brilliance.
                  </li>
                  <li>
                    <strong>Depth in Squad: </strong>
                    Building a deep squad with capable backups ensures that the team can handle injuries and form slumps better.
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
                  The Role of Leadership and Mentorship

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
                  Gautam Gambhir, the former KKR captain, also deserves mention for laying a strong foundation during his tenure. His leadership and mentorship created a culture of resilience and fighting spirit, which continues to influence the team's ethos.
                  <p />
                  KKR’s victory in 2024 exemplifies that a well-rounded, strategically astute team can outperform those heavily reliant on marquee players. Other franchises can take valuable lessons from KKR’s approach, focusing on building a cohesive unit with a mix of emerging talents and experienced campaigners to achieve sustained success in the IPL.
                </Typography>
              </Paper>
              <Paper>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

                      <u> "Thala for a Reason": Examining<br/> CSK's Decline This Year</u>
                    </Typography>
                  </Link>

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
                      <u>Gautam Gambhir: The Unsung Hero of <br/>the 2007 and 2011 World Cups </u>
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

export default SixBlogContent




