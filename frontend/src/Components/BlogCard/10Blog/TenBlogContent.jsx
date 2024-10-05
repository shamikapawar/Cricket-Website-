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

const TenBlogContent = () => {
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
        <title>What is Robotic Process Automation? How it will be helpful Us</title>
        <meta name="description" content="Learn about Robotic Process Automation (RPA), its benefits, and how it can automate repetitive tasks to enhance productivity." />
        <meta name="keywords" content="Robotic Process Automation, RPA, automation, software bots, productivity" />
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
                  India Clinches Second T20 World Cup Title in a Thrilling Finale Against South Africa                </h1>
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
                    JULY 4, 2024
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
                    <u style={{ marginRight: "15px" }}>India vs South Africa</u>
                    <u style={{ marginRight: "15px" }}>Kohli innings</u>
                    <u style={{ marginRight: "15px" }}>India T20 win</u>
                    <u style={{ marginRight: "15px" }}>Bumrah bowling</u>
                    <u style={{ marginRight: "15px" }}>Rohit retirement</u>
                  </Typography>
                </div>
                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="B103.webp"
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
                  Kensington Oval, Barbados- In an exhilarating
                  showdown that had cricket fans on the edge of
                  their seats, India triumphed over South Africa
                  to secure their second ICC Men's T20 World
                  Cup title, ending a 17-year wait since their inaugural victory in 2007. The final match was a display of skill, strategy, and nerves of steel, culminating in a
                  narrow seven-run victory for the Men in Blue.
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
                  A Match for the Ages
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
                  The final match, held at the iconic Kensington Oval, was a roller-coaster of emotions. India, having set a formidable target, managed to hold their nerve in the death overs to edge out South Africa. The game swung back and forth, with both teams showcasing their prowess in all departments. India's top-order batsmen Virat and Rohit started with few boundaries but soon Rohit got out so does Risabh Pant and SKY. Then Kohli started playing with caution and consolidated india’s inning, Akshar Patel also played a crucial knock of 47 of 31, which actually accelerated india’s inning and allowed kohli to go little slow to consolidate the innings. India ended up scoring good 176/7  which gave bowlers a cushion to go and defend this score. Later indian bowlers delivered crucial performances to seal the win, namely Hardik Pandya, Bumrah and Arshdeep Singh.

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
                  Key Performances
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
                  <li>
                    <strong>Hardik Pandya : </strong>
                    Leading from the front with both bat and ball, Pandya's all-round performance was pivotal in this world cup. His quick-fire 45 runs off 24 balls provided the much-needed momentum to India's total, and his crucial overs with the ball, especially the 16th over which led the departure of dangerous looking Klasen and the ultimate over i.e. 20th which sealed india’s fate as a winner. Not to forget Surya Kumar’s Yadav exceptional catch in the Long on near the boundary rope on first ball of 20th over proved to be game changer for india. Very explosive David Miller got out there, which kind of hit the final nail in the coffin.
                  </li>
                  <li>
                    <strong>
                      Jasprit Bumrah:
                    </strong>
                    Jasprit Bumrah: Named the Player of the Tournament, Bumrah's exceptional bowling spell in the final was a masterclass in death bowling. His precise yorkers and variations stifled the South African batsmen, preventing them from reaching the target in the final overs. Bumrah's 2/18 in four overs was instrumental in India's defense of their total 176/7.
                  </li>
                  <li>
                    <strong>
                      Virat Kohli:
                    </strong>
                    The ever-reliable Kohli anchored the Indian innings with a composed and strategic knock of 76 runs off 59 balls, setting the stage for the final assault in the death overs. His experience and ability to pace the innings were critical in building a competitive total.
                  </li>
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="400"
                    image="B101.webp"
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
                  The Road to Victory
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
                  India's journey to the final was marked by consistent performances and resilience. They overcame formidable opponents like Australia and England in the knockout stages, displaying a blend of experienced leadership and youthful exuberance. The semi-final against England was particularly memorable, with Rohit Sharma's captaincy and a spectacular team effort propelling India into the final
                  <p />
                  Throughout the tournament, India demonstrated a well-rounded team effort. The young talents like Shivam Dubey and Risabh Pant shone brightly, while veterans like Rohit Sharma and india’s own Mr. 360 degree provided the much-needed stability,experience and much needed pace.The bowling attack, led by Bumrah and supported by spinners Kuldeep Yadav and Axar Patel, proved to be a formidable force, adapting well to different conditions and opposition strategies.
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
                  Rohit Sharma's Swan Song

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
                  The victory was bittersweet as captain Rohit Sharma announced his retirement from T20 internationals, choosing to bow out on a high. Sharma's leadership and tactical acumen were instrumental throughout the tournament, and his final contribution as captain added another glorious chapter to his illustrious career. His retirement marks the end of an era and leaves a legacy of excellence and inspiration for future generations
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="320"
                    image="B102.avif"
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
                  Celebrations and Reflections
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
                  The triumph sparked jubilant celebrations across India and among the Indian diaspora worldwide. The players, drenched in glory and champagne, dedicated the victory to the fans and the relentless support they received throughout the tournament. Social media was abuzz with congratulatory messages from fans, former players, and cricket pundits, all lauding India's remarkable achievement.
                  <p />
                  The victory was not just about lifting the trophy but also about the journey and the teamwork that brought them to the pinnacle. Each player's contribution, whether in runs, wickets, or fielding efforts, was crucial in piecing together this historic win.
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
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  With this victory, India has set a high benchmark for future T20 World Cup campaigns. The blend of seasoned campaigners and emerging talents promises a bright future for Indian cricket. As the team looks forward to new challenges, this victory will be remembered as a testament to their determination, skill, and unity.
                  <p />
                  In conclusion, India's T20 World Cup win in 2024 is not just a triumph of cricketing excellence but a story of resilience, leadership, and unyielding spirit. The echoes of this victory will inspire generations to come and cement India's legacy in the annals of cricket history. The celebrations will continue, but the focus will soon shift to building on this success and striving for more glory in the future.

                </Typography>
              </Paper>

              <Paper>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

                      <u> Historic Triumph: Afghanistan Reaches T20 World Cup Semi-Finals for the First Time</u>
                    </Typography>
                  </Link>

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
                      <u>Indian Women’s Cricket Team Beats SA by 10 Wickets, 2024 </u>
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

export default TenBlogContent
