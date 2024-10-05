import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Divider, Typography, Grid } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import ShareIcons from "../../SideImagesBlog/ShareIcons";
import Avatar from "@mui/material/Avatar";
import "../../../App.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Helmet } from "react-helmet";

const FifthBlogContent = () => {
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
        <meta
          name="title"
          content="Thala for a Reason: Examining CSK's Decline This Year"
        />
        <meta
          name="description"
          content="Explore the reasons behind Chennai Super Kings' (CSK) decline in the current IPL season. Discover MS Dhoni's leadership impact, factors affecting CSK's performance, and insights on adapting strategies for future success. Read more on 'Thala for a Reason'."
        />
        <meta
          name="keywords"
          content="Chennai Super Kings, CSK decline, MS Dhoni leadership, IPL 2024, CSK performance issues, T20 cricket strategies, cricket analysis, sports blog, IPL analysis, Chennai Super Kings 2024"
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
                    fontFamily: "DM Sans,sans-serif",
                    color: "black",
                    fontSize: "1.799rem",
                    fontWeight: "bolder",
                    margin: "15px ",
                    whiteSpace: "pre-line",
                  }}
                >
                  "Thala for a Reason": Examining CSK's Decline This Year
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
                    JUNE 20, 2024
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
                    }}
                  >
                    <u style={{ marginRight: "15px" }}>
                      {" "}
                      Chennai Super Kings (CSK)
                    </u>
                    <u style={{ marginRight: "15px" }}>MS Dhoni</u>
                    <u style={{ marginRight: "15px" }}>Captaincy</u>
                    <u style={{ marginRight: "15px" }}>IPL 2024</u>
                    <u style={{ marginRight: "15px" }}>Ruturaj Gaikwad</u>
                  </Typography>
                </div>

                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="Dhoni-2.jpg"
                    alt="green iguana"
                  />
                  <Typography
                    style={{
                      fontFamily: "DM Sans,sans-serif",
                      fontSize: "0.985rem",
                      fontWeight: "500",
                      margin: "15px",
                      wordSpacing: "0.10em",
                    }}
                  >
                    The phrase "Thala for a reason" has become synonymous with
                    Chennai Super Kings (CSK) and its charismatic captain, MS
                    Dhoni. His leadership and tactical acumen have been crucial
                    to CSK's success over the years. However, this season has
                    been disappointing for the team, leading to questions about
                    whether the same philosophy and leadership are contributing
                    to their decline. Let's delve into this situation from a
                    neutral perspective. Though Dhoni was not the captain this
                    season,the baton has been passed on to Ruturaj Gaikwad but
                    Dhoni was in the background for the range of affairs.
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
                    MS Dhoni's Influence
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
                    MS Dhoni, affectionately known as "Thala," has been the
                    cornerstone of CSK’s strategy and success. His calm
                    demeanor, sharp cricketing mind, and ability to handle
                    pressure have brought CSK numerous victories and four IPL
                    titles.
                    <li>
                      <strong> Leadership Quality: </strong>
                      Dhoni's leadership is often lauded for its strategic depth
                      and ability to get the best out of players. He has been
                      instrumental in nurturing young talent and maintaining a
                      balanced team.
                    </li>
                    <li>
                      <strong> Experience and Acumen: </strong>
                      His experience and tactical decisions have frequently
                      turned the tide in CSK's favor, making him one of the most
                      respected captains in IPL history.
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
                    Factors Contributing to CSK's Decline
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
                    Despite Dhoni's legendary status, this season has seen CSK
                    struggle to find their form. Several factors could be
                    contributing to their decline:
                    <p />
                    <strong> 1. Aging Squad: </strong>
                    <li>
                      CSK has traditionally relied on experienced players.
                      However, this strategy has its drawbacks, as the aging
                      squad might not match the energy and athleticism of
                      younger teams.
                    </li>
                    <li>
                      The team's over-reliance on seasoned players has led to
                      questions about the lack of fresh talent and younger
                      players in the lineup.
                    </li>
                    <p />
                    <strong>2. Injuries and Form:</strong>
                    <li>
                      Injuries to key players have hampered CSK’s performance.
                      Players such as Deepak Chahar and Moeen Ali, who were
                      expected to play crucial roles, have struggled with
                      fitness.
                    </li>
                    <li>
                      Inconsistent form of pivotal players has also been a
                      significant issue, with the batting and bowling units
                      failing to perform collectively.
                    </li>
                    <p />
                    <strong>3. Tactical Rigidness:</strong>
                    <li>
                      Dhoni's conservative and sometimes inflexible approach has
                      come under scrutiny. His decision to back experienced
                      players despite their lack of form has been questioned.
                    </li>
                    <li>
                      The reluctance to experiment with the batting order or
                      integrate younger players into key roles has also been
                      criticized.
                    </li>
                    <p />
                    <strong> 4. Pressure and Expectations: </strong>
                    <li>
                      The immense pressure and high expectations from fans and
                      management can weigh heavily on the team. CSK’s past
                      success has set a high benchmark, and any deviation from
                      it is immediately noticeable.
                    </li>
                  </Typography>
                  <Box sx={{ margin: "25px 0" }}>
                    <CardMedia
                      component="img"
                      width="40"
                      height="450"
                      image="Dhoni-3.jpg"
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
                    Evaluating "Thala for a Reason"
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
                    The mantra "Thala for a reason" underscores Dhoni's profound
                    impact on CSK. However, relying solely on past glory can
                    sometimes hinder progress. While Dhoni’s captaincy has
                    brought unparalleled success, the current decline suggests a
                    need for evolution in strategy and personnel management.
                    <p />
                    <li>
                      <strong>Adapting to Change: </strong>
                      CSK needs to adapt to the changing dynamics of T20
                      cricket, which increasingly favors younger, more agile
                      players and innovative strategies.
                    </li>
                    <li>
                      <strong>Leadership Transition: </strong>
                      since there is already a leadership transition in CSK, but
                      It should be a phased trasition of leadership where Dhoni
                      can mentor a future captain. This would ensure continuity
                      while bringing fresh ideas to the table.
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
                    As a neutral observer, it’s evident that while Dhoni's
                    leadership is integral to CSK's identity, the team’s current
                    struggles highlight the need for adaptation and
                    rejuvenation. The phrase "Thala for a reason" holds true,
                    but the challenges of modern T20 cricket demand a balanced
                    approach that combines experience with youthful exuberance.
                    <p />
                    CSK’s decline this season should be a wake-up call to
                    reassess strategies, focus on nurturing young talent, and
                    possibly redefine roles within the team. Dhoni’s legacy is
                    unquestionable, but even legends need to evolve to maintain
                    their edge in a highly competitive environment.
                  </Typography>
                </Box>
              </Paper>
              <Paper>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to="/was-hardik-pandya-right-choice-for-mumbai-indians-captaincy"
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
                        Was Hardik Pandya the Right Choice for Mumbai <br />
                        Indians Captain? An Analysis from a Die-Hard Fan
                      </u>
                    </Typography>
                  </Link>

                  <Link
                    to="/kkr's-win-a-lesson-for-franchises-relying-on-big-names"
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
                        KKR’s Win: A Lesson for Franchises <br />
                        Relying on Big Names{" "}
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
  );
};

export default FifthBlogContent;
