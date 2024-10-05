import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import SideImg from "../../SideImagesBlog/SideImg";
import SideImg1 from "../../SideImagesBlog/SideImg1";
import ShareIcons from "../../SideImagesBlog/ShareIcons";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "../../../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Helmet } from "react-helmet";

const SecBlogContent = () => {
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
        <title>
          Surya Kumar Yadav's Knock Against USA | Can He Only Bat at Fast
          Pitches?
        </title>
        <meta
          name="description"
          content="Discover how Suryakumar Yadav’s performance against the USA in the T20 World Cup showcased his ability to adapt to difficult pitches. A detailed analysis of his innings and its impact on India's victory."
        />
        <meta
          name="keywords"
          content="Suryakumar Yadav, T20 World Cup, India vs USA, Cricket Analysis, Suryakumar Yadav Performance, Cricket Blog, Sports Blog, Mr. 360 degree"
        />
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
                <Link to="/">
                  <Typography
                    style={{
                      fontFamily: "DM Sans,sans-serif",
                      fontSize: "1.145rem",
                      fontWeight: "500",
                      margin: "15px ",
                      whiteSpace: "pre-line",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
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
                  Surya Kumar Yadav, can he only bat at fast pitches? Knock
                  against USA says otherwise?
                </h1>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
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
                    >
                      <span
                        style={{
                          fontFamily: "DM Sans,sans-serif",
                          fontSize: "0.985rem",
                          fontWeight: "500",

                          wordSpacing: "0.10em",
                        }}
                      >
                        Written By:
                      </span>{" "}
                      <br />
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
                      alignItems: "center",
                    }}
                  >
                    JUNE 17, 2024
                    <Typography
                      style={{
                        fontFamily: "DM Sans,sans-serif",
                        color: "red",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      3 min read
                    </Typography>
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
                      // border: "1px solid lightgray",
                      // backgroundColor: "lightgrey",
                      // borderRadius: "5px"
                    }}
                  >
                    <u style={{ marginRight: "15px" }}>Suryakumar Yadav</u>
                    <u style={{ marginRight: "15px" }}>T20 World Cup</u>
                    <u style={{ marginRight: "15px" }}>India vs. USA</u>
                    <u style={{ marginRight: "15px" }}>Rohit Sharma</u>
                    <u style={{ marginRight: "15px" }}>Virat Kohli</u>
                    <u style={{ marginRight: "15px" }}>Mr. 360 degree</u>
                  </Typography>
                </div>

                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="100%"
                    height="auto"
                    image="Surya-1.jpg"
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
                >
                  Suryakumar Yadav’s overall strike-rates in the shortest format
                  are as follows – 168.06 in T20Is and 152.05 in T20s. The same
                  explosive batter scored his runs at a strike-rate of just
                  around 100 in India’s seven-wicket win over the USA in the T20
                  World Cup. The difference here was that Suryakumar’s runs came
                  in at a pitch which can be considered as very difficult pitch
                  to bat on but his performance there was spot on.
                  <br />
                  <br />
                  Slow and Steady he built his inning and led india to a victory
                  with 7 wickets remaining. These runs came at a time when India
                  was in little distress, so It adds more value to his innings.
                  Virat Kohli got out on golden duck on first ball of the
                  inning. Rohit Sharma too got out early. And Rishabh Pant who
                  has played some good innings in this world cup also departed
                  early. After his wicket situation got little tricky as India’s
                  strike rate also was not up to the mark. Wicket was having
                  uneven bounce. Batting became little difficult there.
                  <br />
                  <br />
                  On such type of wicket you need to move forward with a bit of
                  caution. He did so most of the time and mostly dealt with
                  singles only. One six he did hit in his trending style for
                  which he is known but apart from that his inning was mostly
                  slow and steady. Then at last of the innings he did hit one
                  lofted short over the long-off which was treat to watch and
                  also one or two boundaries. Though he was dropped as well by
                  his under-15 team mate Saurabh Netravalkar. Yes, you heard it
                  right Saurabh is playing from USA but he is from India and
                  played with few Indian players in domestic game but then he
                  moved to USA to become software engineer. He is an engineer
                  and an international cricketer as well but from USA. So coming
                  back to topic, Surya and Dube good partnership of 67 led India
                  to win against USA, a team which was having 4 players from
                  India and one from New Zealand.
                  <br />
                  <br />
                  Suryakumar’s firm knock showed that along with explosion he
                  can also show his calmer and composed side when the situation
                  demands. Of course, when the situation would have been
                  different and let say India would have been batting first then
                  you would have seen his much different side for which he is
                  known to all of us, but with this different demeanour he has
                  given us a food of thought that we can also rely on him when
                  the situation is bit shaky and pitch demands are different.
                  <br />
                  <br />
                  Rohit Sharma, the India skipper, heaped praised for his Mumbai
                  Indian’s teammate, and said: “He showed he has a different
                  game to him, that’s what you expect from experienced players.
                  Credit to the way he stuck through today to take the game deep
                  and win it for us.”
                  <br />
                  <br />
                  Normally, watching Suryakumar's versatile batting is
                  mind-boggling. The incredible shots he pulls off require
                  tremendous skill. Even yesterday, his bat produced some
                  unconventional strokes and a delightful lofted shot.
                  <br />
                  <br />
                  However, his 50 runs off 49 balls will be more memorable for
                  showcasing a different side of his game: the ability to handle
                  pressure and adapt his batting to the situation. One might
                  think, in typical dramatic fashion, that Suryakumar's secret
                  twin brother had replaced him on the field in New York!
                </Typography>
              </Paper>
              <Paper>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/sachin-vs-virat-comparison-between-two"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      color: hover.nextLink ? "blue" : "red",
                      textDecoration: hover.nextLink ? "underline" : "none",
                    }}
                    onMouseEnter={() => handleMouseEnter("nextLink")}
                    onMouseLeave={() => handleMouseLeave("nextLink")}
                  >
                    <Typography
                      style={{
                        fontFamily: "DM Sans,sans-serif",
                        color: hover.previous ? "blue" : "red",
                        fontSize: "1.250rem",
                        fontWeight: "500",
                        margin: "15px",
                        display: "flex",
                        alignItems: "center",
                        // justifyContent: 'center',
                        cursor: "pointer",
                        textDecoration: hover.previous ? "underline" : "none",
                      }}
                      onMouseEnter={() => handleMouseEnter("previous")}
                      onMouseLeave={() => handleMouseLeave("previous")}
                    >
                      <ArrowBackIosIcon style={{ fontSize: "30px" }} />{" "}
                      <u style={{ textDecoration: "none" }}>Previous Blog</u>
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "DM Sans,sans-serif",
                        color: hover.newLaunch ? "blue" : "black",
                        fontSize: "1rem",
                        fontWeight: "500",
                        margin: "10px",
                        cursor: "pointer",
                        textDecoration: hover.newLaunch ? "underline" : "none",
                      }}
                      onMouseEnter={() => handleMouseEnter("newLaunch")}
                      onMouseLeave={() => handleMouseLeave("newLaunch")}
                    >
                      <u>
                        {" "}
                        Looking at the Comparison, <br />
                        Sachin vs Virat. What at the stores for indians to
                        consider ? Who is the best batsman ?
                      </u>
                    </Typography>
                  </Link>

                  <Link
                    to="/looking-at-the-usa-performance-this-world-cup"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      color: hover.nextLink ? "blue" : "red",
                      textDecoration: hover.nextLink ? "underline" : "none",
                    }}
                    onMouseEnter={() => handleMouseEnter("nextLink")}
                    onMouseLeave={() => handleMouseLeave("nextLink")}
                  >
                    <Typography
                      style={{
                        fontFamily: "DM Sans,sans-serif",
                        color: hover.next ? "blue" : "red",
                        fontSize: "1.250rem",
                        fontWeight: "500",
                        margin: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        cursor: "pointer",
                        textDecoration: hover.next ? "underline" : "none",
                      }}
                      onMouseEnter={() => handleMouseEnter("next")}
                      onMouseLeave={() => handleMouseLeave("next")}
                    >
                      <u style={{ textDecoration: "none" }}>Next Blog</u>
                      <ArrowForwardIosIcon
                        style={{ marginLeft: "10px", fontSize: "30px" }}
                      />
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "DM Sans,sans-serif",
                        color: hover.newLaunch ? "blue" : "black",
                        fontSize: "1rem",
                        fontWeight: "500",
                        margin: "6px",
                        cursor: "pointer",
                        textDecoration: hover.newLaunch ? "underline" : "none",
                      }}
                      onMouseEnter={() => handleMouseEnter("newLaunch")}
                      onMouseLeave={() => handleMouseLeave("newLaunch")}
                    >
                      <u>
                        {" "}
                        Looking at the USA’s performance this
                        <br /> t-20 world cup, a very promising and beyond
                        Satisfactory.
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
              <SideImg />
              <SideImg1 />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SecBlogContent;
