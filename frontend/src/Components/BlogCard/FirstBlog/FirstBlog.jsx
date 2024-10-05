import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import SideImg from "../../SideImagesBlog/SideImg";
import SideImg1 from "../../SideImagesBlog/SideImg1";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import ShareIcons from "../../SideImagesBlog/ShareIcons";
import Avatar from "@mui/material/Avatar";
import "../../../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Helmet } from "react-helmet";

const FirstBlog = () => {
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
        <title>
          Sachin vs Virat: Who is the Best Batsman? - Your Blog Name
        </title>
        <meta
          name="description"
          content="Explore the detailed comparison between Sachin Tendulkar and Virat Kohli. Read about their careers, statistics, and find out who is considered the best batsman in cricket history."
        />
        <meta
          name="keywords"
          content="Sachin Tendulkar, Virat Kohli, Cricket Comparison, Best Batsman, Cricket History, God of Cricket, King Kohli"
        />
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
                    fontFamily: "DM Sans,sans-serif",
                    color: "black",
                    fontSize: "1.799rem",
                    fontWeight: "bolder",
                    margin: "15px ",
                    whiteSpace: "pre-line",
                  }}
                >
                  Looking at the Comparison, Sachin vs Virat. What at the stores
                  for indians to consider ? Who is the best batsman ?
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
                      </span>
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
                    JUNE 16, 2024
                    <Typography
                      style={{
                        fontFamily: "DM Sans,sans-serif",
                        color: "red",
                        fontSize: "1.1rem",
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      4 min read
                    </Typography>
                  </Typography>
                </div>
                <div style={{ display: "flex" }}>
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
                    <u style={{ marginRight: "15px" }}>Sachin Tendulkar</u>
                    <u style={{ marginRight: "15px" }}>Virat Kohli</u>
                    <u style={{ marginRight: "15px" }}>Hardik Pandya</u>
                    <u style={{ marginRight: "15px" }}>KL Rahul</u>
                    <u style={{ marginRight: "15px" }}>God of Cricket</u>
                    <u style={{ marginRight: "15px" }}>King Kohli</u>
                  </Typography>
                </div>
                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="Sachin-Virat 1.jpeg"
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
                  There's a very known comparison between Sachin and
                  Virat.Sachin Tendulkar who is widely regarded as god of
                  cricket and Virat who is widely regarded as king kohli and a
                  chasemaster. Let me provide you with a context first.You must
                  have seen the very controversial koffee with Karan episode
                  when Hardik Pandya and his then considered very good friend KL
                  Rahul both graced the Koffee infamous couch with their
                  presence which later led to Hardik and KL being banned for few
                  matches because of their inappropriate comments made on women.
                  In that show the duo were asked about who is the best batsman,
                  Sachin or Virat ? without any ounce of hesitation, as if it is
                  a cakewalk question they picked Virat.
                  <br />
                  <br />
                  So, That is what my whole post is all about. I used to think
                  this question requires some analysis and brain mongering but
                  Hardik and KL made it feel like a no brainer question. So Lets
                  start doing some detailed analysis of who is better ?
                  <br />
                  <br />
                  Let's go through respective careers of both world cricket
                  greats. Sachin started playing the cricket at very early age
                  and he also scored a first class 100 just at 15 making him
                  youngest indian to score a century on debut in first-class
                  cricket. It was like he already knocked the door of world
                  cricket with his classic ton. Then he went on to start his
                  international career just at the age of around 16 years and
                  faced some of the world cricket greats like Wasim Akram and
                  Wakar Yunus
                  <br />
                  <br />
                  One famous incident which grabbed humongous eyeballs when
                  Sachin got hit by Wakar’s bouncer at nose and he started
                  bleeding.It was his first series only at sialkot. Imagine It
                  could have rattled someone’s confidence to the core have it
                  not been Sachin Tendulkar, but god had different plans for
                  him. He showed that day only that, what lies ahead in the
                  future for him. Coming back to that day, All were concerned
                  about Sachin that how this little boy will face such thrashing
                  bouncers and everyone thought Sachin will get retired hurt and
                  this ball might have broken his confidence to pieces but he
                  had different plans. Then, not only he went on to play that
                  match but later he and Navjot singh siddhu led india to draw
                  that match against pakistan where Sachin scored a unbeaten
                  half century as well. This small incident talks abundance
                  about Sachin’s character.
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: "500",
                    margin: "15px",
                    wordSpacing: "0.10em",
                  }}
                >
                  Now, Lets look at their carrer statistics one by one. First
                  look at the test statistics:-
                </Typography>
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",
                  }}
                >
                  Test Matches:-
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="365"
                    image="image.png"
                    alt="green iguana"
                  />
                </Box>

                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    fontSize: "1.205rem",
                    fontWeight: "500",
                    margin: "15px",
                  }}
                >
                  One-Day Internationals:-
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="365"
                    image="image (1).png"
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
                  By looking at the stats only you can conclude that Virat has
                  better stats than Sachin in one day cricket if you keep them
                  at same level in their respective careers but It can’t be said
                  about test matches.
                  <br />
                  <br />
                  This is the generalistic comparison but It is not enough.
                  Sachin played in different era and Virat played in different
                  era, of course they crossed each other paths for brief amount
                  of time for probably around 2-3 years in international
                  cricket.
                  <br />
                  <br />
                  Now coming at the impact they have left and the difficulty
                  levels they have faced. Sachin has played his most of the
                  cricket without DRS and have been given out wrongly by
                  umpires, which Virat didn’t face much. Sachin has played at
                  the time when t-20 cricket was not introduced.
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="600"
                    image="virat sachin 3.jpg"
                    alt="green iguana"
                  />
                  <Typography
                    style={{
                      fontFamily: "DM Sans,sans-serif",
                      color: "darkgray",
                      fontSize: "0.985rem",
                      fontWeight: "500",
                      margin: "15px",
                      wordSpacing: "0.10em",
                    }}
                  >
                    Image description:- Sachin’s tweet after Virat surpassed his
                    record of 49 centuries in one day cricket.
                  </Typography>
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
                  Cricket was not that fast back then, powerplay were not
                  introduced and teams have to play with the same ball
                  throughout the both innings. Ball used to reverse also even in
                  one day cricket. So, It was more challenging to play then and
                  also coming back to the quality of bowlers, Sachin has faced
                  wasim Akram, Wakar Younus, Glen Macgrath, Brett Lee, Shane
                  Warne, Murlidharan all at their peaks.
                  <br />
                  <br />
                  Coming back to Virat’s era everything was changed. Powerplays,
                  T-20s, DRS all was pretty normal and led to change in pace of
                  cricket. Bowlers were not of that level which they used to.
                  Now, we have all the analysis available through technologies
                  which makes things bit easier. And also Virat is playing in a
                  time which is most of the time No. 1 team in the world, the
                  pressure is not that much as our bench strength is so good but
                  Sachin was playing in a team which was No.4v or No.5 team in
                  the world and all eyes were only on Sachin. There was wave of
                  pressure at Sachin to carry the burden of team on his
                  shoulders most of the times. That time the means of
                  entertainment was only cricket and cinema in our country, no
                  ott was there, the barrage of channels which we can see now a
                  days It was not available back then so all eyes were glued to
                  tv screen only to watch Sachin score 100 or watch sachin make
                  their team win. The pressure which sachin handled on the
                  cricket field and off the cricket field was enormous.
                  <br />
                  <br />
                  There are so many things which can also be said about Virat
                  Kohli as well like He is one of the greatest finisher of all
                  time. Coming at No.3 and leading from the front and finishing
                  the game in difficult situations is one of the most sought
                  after quality of Virat Kohli. His aggression, his fitness
                  regime, his work ethics, his test captainacy records which
                  talks a lot about Virat Kohli as well. He has been very
                  consistent with the bat. He has led india to multiple wins
                  from difficult situations. He is called chasemaster.
                  <br />
                  <br />
                  Well, It is not a good idea to compare two of the game greats
                  but for sake of comparison we can conclude that when It comes
                  to Sachin vs Virat even Virat has always chosen Sachin over
                  him and in one of famous interview Brain Lara was quoted
                  saying, "No Indian will achieve what he has. In terms of
                  stats, you can have players with better stats in the future.
                  Virat Kohli in the one-day game is exceptional. But in sports
                  there are some individuals, no matter in which era, who can't
                  be replaced. When you speak about cricket, I will speak about
                  Sachin Tendulkar,".
                </Typography>
                <Divider />
              </Paper>
              <Paper>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/"
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
                      <u> How AI is Revolutionizing GPS Technology</u>
                    </Typography>
                  </Link>

                  <Link
                    to="/surya-kumar-yadav-can-he-only-bat-at-fast-pitches"
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
                        margin: "10px",
                        cursor: "pointer",
                        textDecoration: hover.newLaunch ? "underline" : "none",
                      }}
                      onMouseEnter={() => handleMouseEnter("newLaunch")}
                      onMouseLeave={() => handleMouseLeave("newLaunch")}
                    >
                      <u>
                        {" "}
                        Surya Kumar Yadav, can he only bat <br />
                        at fast pitches ? Knock against USA
                        <br /> says otherwise ?{" "}
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

export default FirstBlog;
