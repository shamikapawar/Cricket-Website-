// import React, { useRef } from "react";
// import { Grid, Typography, Box, IconButton } from "@material-ui/core";
// import FirstCard from "../Components/BlogCard/FirstBlog/FirstCard";
// import SecBlog from "../Components/BlogCard/SecBlog/SecBlog";
// import ThirdBlog from "../Components/BlogCard/ThirdBlog/ThirdBlog";
// import FourthBlog from "../Components/BlogCard/FourthBlog/FourthBlog";
// import FifthBlog from "../Components/BlogCard/FifthBlog/FifthBlog";
// import SixBlog from "../Components/BlogCard/SixBlog/SixBlog";
// import FrontCard from "../Components/FrontCard/FrontCard";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// const Blog = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // 3 seconds
//   };

//   const imgStyle = {
//     width: "100%",
//     height: "430px",
//     objectFit: "cover",
//   };

//   const overlayStyle = {
//     position: "absolute",
//     top: "95%",
//     left: "49%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 2,
//     height: "50%",
//     width: "50%",
//   };

//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, clientWidth } = scrollContainerRef.current;
//       const cardWidth = clientWidth / 3; // Each card should take up one-third of the container's width
//       const scrollAmount =
//         direction === "left" ? -cardWidth * 3 : cardWidth * 3;
//       scrollContainerRef.current.scrollTo({
//         left: scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div>
//       <Box
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "480px",
//           position: "relative",
//         }}
//       >
//         {/* Carousel */}
//         <Slider
//           {...settings}
//           style={{ width: "96%", position: "relative", zIndex: 1 }}
//         >
//           <div>
//             <img style={imgStyle} src={`Sachin-Virat 1.jpeg`} alt="image1" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`dhoni1.jpg`} alt="image2" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`Surya-1.jpg`} alt="image3" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`KKR-2.jpg`} alt="image3" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`hardik-1.jpg`} alt="image3" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`kkr-3.jpg`} alt="image3" />
//           </div>
//         </Slider>
//         <div style={overlayStyle}>
//           <FrontCard />
//         </div>
//       </Box>

//       <div
//         style={{ padding: "0px", backgroundColor: "lightgray", margin: "1px" }}
//       >
//         <Typography
//           style={{
//             fontSize: "1.820rem",
//             fontWeight: "500",
//             color: "black",
//             margin: "10px",
//           }}
//         >
//           Latest Blogs
//         </Typography>

//         <Box
//           style={{
//             display: "flex",
//             alignItems: "center",
//             position: "relative",
//           }}
//         >
//           <IconButton onClick={() => scroll("left")}>
//             <KeyboardArrowLeftIcon style={{ fontSize: "50px" }} />
//           </IconButton>
//           <div
//             ref={scrollContainerRef}
//             style={{
//               display: "flex",
//               overflowX: "hidden",
//               scrollBehavior: "smooth",
//               width: "100%",
//               gap: "10px",
//               scrollbarWidth: "none", // For Firefox
//             }}
//             className="scroll-container"
//           >
//             <Grid container spacing={1} wrap="nowrap">
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <FirstCard />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <SecBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <ThirdBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <FourthBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <FifthBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <SixBlog />
//               </Grid>
//             </Grid>
//           </div>
//           <IconButton onClick={() => scroll("right")}>
//             <KeyboardArrowRightIcon style={{ fontSize: "50px" }} />
//           </IconButton>
//         </Box>
//       </div>

//       <style jsx global>{`
//         .scroll-container {
//           -ms-overflow-style: none; /* Internet Explorer 10+ */
//         }
//         .scroll-container::-webkit-scrollbar {
//           display: none; /* Safari and Chrome */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;

// import React, { useRef } from "react";
// import { Grid, Typography, Box, IconButton } from "@material-ui/core";
// import FirstCard from "../Components/BlogCard/FirstBlog/FirstCard";
// import SecBlog from "../Components/BlogCard/SecBlog/SecBlog";
// import ThirdBlog from "../Components/BlogCard/ThirdBlog/ThirdBlog";
// import FourthBlog from "../Components/BlogCard/FourthBlog/FourthBlog";
// import FifthBlog from "../Components/BlogCard/FifthBlog/FifthBlog";
// import SixBlog from "../Components/BlogCard/SixBlog/SixBlog";
// import FrontCard from "../Components/FrontCard/FrontCard";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

// const Blog = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1900,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000, // 3 seconds
//   };

//   const imgStyle = {
//     width: "100%",
//     height: "430px",
//     objectFit: "cover",
//   };

//   const overlayStyle = {
//     position: "absolute",
//     top: "95%",
//     left: "49%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 2,
//     height: "50%",
//     width: "50%",
//   };

//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, clientWidth } = scrollContainerRef.current;
//       const cardWidth = clientWidth / 3; // Each card should take up one-third of the container's width
//       const scrollAmount = direction === "left" ? -cardWidth * 3 : cardWidth * 3;
//       scrollContainerRef.current.scrollTo({
//         left: scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div>
//       <Box
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "480px",
//           position: "relative",
//         }}
//       >
//         {/* Carousel */}
//         <Slider
//           {...settings}
//           style={{ width: "96%", position: "relative", zIndex: 1 }}
//         >
//           <div>
//             <img style={imgStyle} src={`Sachin-Virat 1.jpeg`} alt="image1" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`dhoni1.jpg`} alt="image2" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`Surya-1.jpg`} alt="image3" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`KKR-2.jpg`} alt="image3" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`hardik-1.jpg`} alt="image3" />
//           </div>
//           <div>
//             <img style={imgStyle} src={`kkr-3.jpg`} alt="image3" />
//           </div>
//         </Slider>
//         <div style={overlayStyle}>
//           <FrontCard />
//         </div>
//       </Box>

//       <div
//         style={{ padding: "0px", backgroundColor: "lightgray", margin: "1px" }}
//       >
//         <Typography
//           style={{
//             fontSize: "1.820rem",
//             fontWeight: "500",
//             color: "black",
//             margin: "10px",
//           }}
//         >
//           Latest Blogs
//         </Typography>

//         <Box
//           style={{
//             display: "flex",
//             alignItems: "center",
//             position: "relative",
//           }}
//         >
//           <IconButton onClick={() => scroll("left")}>
//             <KeyboardArrowLeftIcon style={{ fontSize: "50px" }} />
//           </IconButton>
//           <div
//             ref={scrollContainerRef}
//             style={{
//               display: "flex",
//               overflowX: "hidden",
//               scrollBehavior: "smooth",
//               width: "100%",
//               gap: "10px",
//               scrollbarWidth: "none", // For Firefox
//             }}
//             className="scroll-container"
//           >
//             <Grid container spacing={1} wrap="nowrap">
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <FirstCard />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <SecBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <ThirdBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <FourthBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <FifthBlog />
//               </Grid>
//               <Grid item style={{ flex: "0 0 33.33%" }}>
//                 <SixBlog />
//               </Grid>
//             </Grid>
//           </div>
//           <IconButton onClick={() => scroll("right")}>
//             <KeyboardArrowRightIcon style={{ fontSize: "50px" }} />
//           </IconButton>
//         </Box>
//       </div>

//       <style jsx global>{`
//         .scroll-container {
//           -ms-overflow-style: none; /* Internet Explorer 10+ */
//         }
//         .scroll-container::-webkit-scrollbar {
//           display: none; /* Safari and Chrome */
//         }

//         @media (max-width: 960px) {
//           .scroll-container > div > div > div {
//             flex: 0 0 50%; /* Show 2 cards at a time for tablet size */
//           }
//         }

//         @media (max-width: 600px) {
//           .scroll-container > div > div > div {
//             flex: 0 0 100%; /* Show 1 card at a time for mobile size */
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Blog;

import React, { useRef, useEffect } from "react";
import { Grid, Typography, Box, IconButton } from "@material-ui/core";
import FirstCard from "../Components/BlogCard/FirstBlog/FirstCard";
import SecBlog from "../Components/BlogCard/SecBlog/SecBlog";
import ThirdBlog from "../Components/BlogCard/ThirdBlog/ThirdBlog";
import FourthBlog from "../Components/BlogCard/FourthBlog/FourthBlog";
import FifthBlog from "../Components/BlogCard/FifthBlog/FifthBlog";
import SixBlog from "../Components/BlogCard/SixBlog/SixBlog";
import FrontCard from "../Components/FrontCard/FrontCard";
import TenBlog from "../Components/BlogCard/10Blog/TenBlog"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SevenBlog from "../Components/BlogCard/SevenBlog/SevenBlog";
import EightBlog from "../Components/BlogCard/EightBlog/EightBlog";
import NineBlog from "../Components/BlogCard/NineBlog/NineBlog";
import { Helmet } from "react-helmet";
import Blog11 from "../Components/BlogCard/11Blog/Blog11";
import Blog12 from "../Components/BlogCard/12Blog/Blog12";
import Blog13 from "../Components/BlogCard/13Blog/Blog13";
import Blog14 from "../Components/BlogCard/14Blog/Blog14";
import Blog15 from "../Components/BlogCard/15Blog/Blog15";
import Blog16 from "../Components/BlogCard/16Blog/Blog16";
import Blog17 from "../Components/BlogCard/17Blog/Blog17";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  const imgStyle = {
    width: "100%",
    height: "430px",
    objectFit: "cover",
    filter: "brightness(0.5)"
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  };



  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const cardWidth = clientWidth / 3; // Each card should take up one-third of the container's width
      const scrollAmount =
        direction === "left" ? -cardWidth * 3 : cardWidth * 3;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Latest Cricket Blogs | Expert Opinions & Updates on Cricket Events</title>
        <meta name="description" content="Explore the latest and most engaging cricket blogs on our site. Discover detailed articles, expert opinions, and updates on cricket events. Read about Sachin Tendulkar, MS Dhoni, and more. Stay updated with the best cricket blogs and insights from renowned bloggers." />
        <meta name="keywords" content="Cricket Blogs, Latest Cricket Updates, Cricket News, Cricket Articles, Sachin Tendulkar, MS Dhoni, Cricket Insights, Cricket Events, Cricket Analysis, Cricket Blog Posts, Top Cricket Blogs" />
      </Helmet>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "480px",
          position: "relative",
          marginTop: "0px"
        }}
      >
        {/* Carousel */}
        <Slider
          {...settings}
          style={{ width: "97%", position: "relative", zIndex: 1 }}
        >
          <div>
            <img style={imgStyle} src={`Sachin-Virat 1.jpeg`} alt="image1" />
          </div>
          <div>
            <img style={imgStyle} src={`dhoni1.jpg`} alt="image2" />
          </div>
          <div>
            <img style={imgStyle} src={`Surya-1.jpg`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`KKR-2.jpg`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`hardik-1.jpg`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`kkr-3.jpg`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`B71.jpg`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`B81.jpg`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`B9.webp`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`B10.avif`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`b11.png`} alt="image3" />
          </div>
          <div>
            <img style={imgStyle} src={`b12.webp`} alt="image3" />
          </div>
        </Slider>
        <div style={overlayStyle}>
          <FrontCard />
        </div>
      </Box>

      <div
        style={{ padding: "25px", backgroundColor: "#d3d3d363", margin: "1px" }}
      >
        <Typography
          style={{
            fontSize: "2rem",
            fontWeight: "500",
            color: "black",
            margin: "10px",
            textAlign: "center",
            // paddingTop:"20px",
            paddingBottom: "10px",
            fontFamily: "DM Sans,sans-serif",

          }}
        >
          Latest Blogs
        </Typography>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          <IconButton onClick={() => scroll("left")}>
            <KeyboardArrowLeftIcon style={{ fontSize: "50px" }} />
          </IconButton>
          <div
            ref={scrollContainerRef}
            style={{
              display: "flex",
              overflowX: "hidden",
              scrollBehavior: "smooth",
              width: "100%",
              gap: "10px",
              scrollbarWidth: "none", // For Firefox
            }}
            className="scroll-container"
          >
            <Grid container spacing={1} wrap="nowrap">
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <Blog16 />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <Blog15 />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <Blog14 />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <Blog13 />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <Blog12 />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <Blog11 />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <TenBlog />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <NineBlog />
              </Grid>
              <Grid item style={{ flex: "0 0 33.33%" }}>
                <EightBlog />
              </Grid>
              {/* <Grid item style={{ flex: "0 0 33.33%" }}>
                <SevenBlog />
              </Grid> */}
            </Grid>
          </div>
          <IconButton onClick={() => scroll("right")}>
            <KeyboardArrowRightIcon style={{ fontSize: "50px" }} />
          </IconButton>
        </Box>
      </div>
      <div style={{ margin: "5px" }}>
        <Typography
          style={{
            fontSize: "2rem",
            fontWeight: "500",
            color: "black",
            margin: "10px",
            textAlign: "center",
            // paddingTop:"20px",
            paddingBottom: "10px",
            fontFamily: "DM Sans,sans-serif",
          }}
        >
          Blogs Of Cricket
        </Typography>
        <Grid item xs={12} container spacing={0.5} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4}>
            <Blog17 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Blog16 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>

          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={0.5} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4}>
            <Blog15 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Blog14 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Blog13 />
          </Grid>
        </Grid>

        <Grid item xs={12} container spacing={0.5} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4}>
            <Blog12 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Blog11 />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TenBlog />
          </Grid>
        </Grid>

        <Grid item xs={12} container spacing={0.5} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4}>

            <NineBlog />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <EightBlog />

          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SevenBlog />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={0.5} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4}>
            <SixBlog />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FifthBlog />

          </Grid>
          <Grid item xs={12} md={6} lg={4}>

            <FourthBlog />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={0.5} style={{ marginBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4}>
            <ThirdBlog />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SecBlog />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <FirstCard />
          </Grid>
        </Grid>

      </div>

      <style jsx global>{`
        .scroll-container {
          -ms-overflow-style: none; /* Internet Explorer 10+ */
        }
        .scroll-container::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        @media (max-width: 960px) {
          .scroll-container > div > div > div {
            flex: 0 0 50%; /* Show 2 cards at a time for tablet size */
          }
        }

        @media (max-width: 600px) {
          .scroll-container > div > div > div {
            flex: 0 0 100%; /* Show 1 card at a time for mobile size */
          }
        }

      `}</style>
    </div>
  );
};

export default Blog;
