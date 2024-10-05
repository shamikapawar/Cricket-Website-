import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './About.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer} style={{ marginTop: "50px" }}>
      <Helmet>
        <title>About Us - WicketWatchers</title>
        <meta name="description" content="Learn more about WicketWatchers, a dedicated platform for cricket enthusiasts offering blogs, analysis, and the latest news about the sport." />
        <meta name="keywords" content="cricket, WicketWatchers, cricket blogs, cricket analysis, cricket news" />
        <meta name="author" content="WicketWatchers Team" />
      </Helmet>
      <h1>About Us</h1>
      <p>
        Welcome to WicketWatchers! At WicketWatchers, we are passionate about cricket and dedicated to bringing you the latest and most engaging content about the sport. Whether you’re a die-hard fan, a casual follower, or someone new to cricket, our goal is to provide you with insightful articles, up-to-date news, and in-depth analysis to enhance your understanding and enjoyment of the game.
      </p>
      
      <h2>Who We Are</h2>
      <p>
        WicketWatchers was founded by a team of cricket enthusiasts who wanted to create a space where fans could come together to share their love for the sport. Our team is made up of experienced writers, analysts, and avid cricket fans who are committed to delivering high-quality content that captures the essence of the game.
      </p>
      
      <h2>What We Offer</h2>
      <h3>Blogs</h3>
      <p>
        Our blog section features a wide range of articles covering everything from match previews and reviews to player profiles and historical pieces. We strive to offer diverse perspectives and in-depth coverage to cater to all types of cricket fans.
      </p>
      
      <h3>Analysis</h3>
      <p>
        Our analytical pieces dive deep into the strategies, statistics, and finer details of the game. Whether you’re looking for a breakdown of a recent match or an exploration of cricketing trends, our analysis will give you a comprehensive understanding.
      </p>
      
      <h2>Our Mission</h2>
      <p>
        Our mission is to be the go-to source for cricket content that is informative, engaging, and accessible to fans around the globe. We believe in the power of cricket to bring people together and aim to foster a sense of community among our readers.
      </p>
    </div>
  );
};

export default AboutUs;
