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

const ThirdBlogContent = () => {
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
        <title>
          USA's Impressive Performance in the 2024 T20 World Cup: Wins, Players,
          and Future Prospects
        </title>
        <meta
          name="description"
          content="Explore the remarkable performance of Team USA in the 2024 T20 World Cup. Discover their historic wins, standout players like Monank Patel and Ali Khan, and what the future holds for American cricket in this comprehensive blog post."
        />
        <meta
          name="keywords"
          content="USA T20 World Cup 2024, Team USA performance, Monank Patel, Ali Khan, USA cricket, 2024 T20 World Cup review, USA cricket achievements, ICC T20 World Cup 2024, Team USA key players, USA cricket future, T20 World Cup highlights"
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
                <Typography
                  style={{
                    fontFamily: "DM Sans,sans-serif",
                    color: "black",
                    fontSize: "1.799rem",
                    fontWeight: "bolder",
                    margin: "15px ",
                    whiteSpace: "pre-line",
                  }}
                >
                  Looking at the USA’s performance this t-20 world cup, a very
                  promising and beyond Satisfactory.
                </Typography>
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
                    JUNE 18, 2024
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
                      fontSize: "1rem",
                      fontWeight: "500",
                      margin: "10px ",
                    }}
                  >
                    <u style={{ marginRight: "15px" }}>USA cricket</u>
                    <u style={{ marginRight: "15px" }}>Saurabh Netravalkar</u>
                    <u style={{ marginRight: "15px" }}>Monank Patel</u>
                    <u style={{ marginRight: "15px" }}>Ali Khan</u>
                    <u style={{ marginRight: "15px" }}>
                      2024 ICC Men's T20 World Cup
                    </u>
                  </Typography>
                </div>

                <Divider variant="middle" />
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="USA-1.jpg"
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
                  As the dust settles on the thrilling matches of the 2024 ICC
                  Men's T20 World Cup, one narrative stands out amidst the usual
                  powerhouses of international cricket: the commendable
                  performance of Team USA. This tournament has not only
                  showcased the usual suspects but has also highlighted the
                  emergence of new contenders, with the United States cricket
                  team making significant strides on the global stage.
                  <p />
                  For years, cricket in the United States has been a sport
                  pursued with passion but often relegated to the sidelines of
                  mainstream American sports culture. However, the 2024 T20
                  World Cup has marked a turning point. The USA's journey in
                  this tournament is a testament to the dedication, hard work,
                  and strategic investments made in the development of the sport
                  across the country.
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
                  Let's look at their historic wins:-
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
                  The USA achieved a monumental victory over Pakistan in a Super
                  Over thriller, which is being hailed as one of the greatest
                  upsets in T20 World Cup history. This win has been a major
                  talking point, showcasing the USA's potential in the sport​.
                  <p />
                  The USA has managed to secure key victories, helping them
                  advance to the Super Eight stage. Their success against
                  established cricketing nations has surprised many and has
                  brought significant attention to cricket in the USA​.
                  <br />
                  The USA's historic T20I win against Bangladesh has been a
                  significant milestone for American cricket, marking their
                  first series victory against a full-member nation. The USA
                  clinched the three-match series 2-1, with notable performances
                  from players like Monank Patel, Harmeet Singh, and Ali Khan.
                  <br />
                  This series win must have boosted the USA's confidence as they
                  were preparing to co-host the T20 World Cup with the West
                  Indies.
                  <p />
                  In addition to these victories, the USA gave a tough fight to
                  India, one of the tournament favorites. Despite India's strong
                  lineup, the USA team held their ground, pushing the match to a
                  competitive edge. While they did not win, the narrow margin of
                  defeat against a team of India's caliber spoke volumes about
                  the progress and potential of USA cricket​.
                  <p />
                  The team's unexpected success has generated increased interest
                  and support for cricket within the USA. This could have
                  long-term benefits for the sport's development and popularity
                  in a country where cricket is not traditionally a major
                  sport​.This will lead to increase in their fan base whichin
                  turn will boost the morale of team in long run.
                  <p />
                  The victories have garnered extensive media coverage, with
                  stories highlighting the players' backgrounds and the team's
                  journey. This includes coverage of individual players like
                  Saurabh Netravalkar, who has balanced a career in technology
                  with his cricketing pursuits​.
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
                  Key Players and Memorable Performances
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
                  The success of any cricket team hinges on the performances of
                  its key players, and the USA was no exception. Monank Patel's
                  leadership and consistent batting were pivotal in anchoring
                  the team's innings. Alongside him, Steven Taylor emerged as a
                  formidable force with the bat, known for his explosive hitting
                  and ability to change the game's dynamics in a matter of
                  overs.
                  <p />
                  The bowling department, led by the experienced Ali Khan,
                  showcased discipline and effectiveness. Khan's ability to take
                  crucial wickets and maintain economical spells provided the
                  team with the breakthroughs needed at critical junctures​.
                  These individual performances, combined with a strong team
                  ethos, allowed the USA to compete fiercely against more
                  established cricketing nations.
                </Typography>
                <Box sx={{ margin: "25px 0" }}>
                  <CardMedia
                    component="img"
                    width="40"
                    height="450"
                    image="USA-2.jpg"
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
                    Image description:- Saurabh Netravalkar an oracle engineer
                    and also a star USA player now
                  </Typography>
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
                  Strategic Investments and Future Prospects
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
                  The USA's rise in international cricket can be attributed to
                  several factors, including strategic investments in grassroots
                  development, infrastructure, and coaching. The establishment
                  of cricket academies, improvement in domestic leagues, and
                  exposure to international cricket have all played a role in
                  nurturing talent and providing players with the necessary
                  platform to excel​.
                  <p />
                  Moreover, the hosting of matches across the United States as
                  part of the World Cup has sparked greater interest and
                  enthusiasm for the sport among the American public. This
                  increased visibility is crucial for the sport's growth,
                  ensuring that cricket continues to attract new fans and
                  participants.
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
                  Historic and Financial Milestones
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
                  This World Cup is historic not only for its competitive
                  matches but also for its record-breaking prize money. With a
                  total pool of $11.25 million, the stakes were high, adding an
                  extra layer of excitement and motivation for all participating
                  teams (icc)​. For the USA, advancing through the tournament
                  and securing wins has not only been a matter of pride but also
                  a financial boost that will further support the development of
                  cricket in the country.
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
                  As we reflect on the USA's performance in the 2024 T20 World
                  Cup, it is evident that this is just the beginning. The team
                  has shown that with the right combination of talent,
                  investment, and strategic planning, emerging cricketing
                  nations can compete at the highest levels. The experience
                  gained from this tournament will undoubtedly serve as a
                  foundation for future successes.
                  <p />
                  The journey ahead promises to be exciting for USA cricket.
                  With continued support and development, the dream of seeing
                  the USA as a formidable force in international cricket is no
                  longer far-fetched. The 2024 T20 World Cup has set the stage
                  for what could be a new era in American cricket, filled with
                  potential and promise.
                  <p />
                  As a cricket columnist, I am thrilled to witness and document
                  this evolution. The world of cricket is expanding, and the
                  inclusion of teams like the USA adds richness and diversity to
                  the sport we all cherish. Here's to the dawn of a new era in
                  cricket, where the USA stands ready to take on the world.
                  <p />
                </Typography>
              </Paper>
              <Paper>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                        Surya Kumar Yadav, can he only bat at fast pitches ?
                        Knock against USA says otherwise ?
                      </u>
                    </Typography>
                  </Link>

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
                        Was Hardik Pandya the Right Choice for Mumbai Indians
                        Captain? An Analysis from a Die-Hard Fan{" "}
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

export default ThirdBlogContent;
