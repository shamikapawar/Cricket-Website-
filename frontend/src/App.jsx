import { useState } from "react";
import "./App.css";
import TopNavBar from "./Components/TopNavBar/TopNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import FirstBlog from "./Components/BlogCard/FirstBlog/FirstBlog";
import SecBlogContent from "./Components/BlogCard/SecBlog/SecBlogContent";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Disclaimer from "./Pages/Disclaimer";
import ThirdBlogContent from "./Components/BlogCard/ThirdBlog/ThirdBlogContent";
import FourthBlogContent from "./Components/BlogCard/FourthBlog/FourthBlogContent";
import FifthBlogContent from "./Components/BlogCard/FifthBlog/FifthBlogContent";
import SixBlogContent from "./Components/BlogCard/SixBlog/SixBlogContent";
import Footer from "./Components/Footer/Footer";
import SevenBlogContent from "./Components/BlogCard/SevenBlog/SevenBlogContent";
import EightBlogContent from "./Components/BlogCard/EightBlog/EightBlogContent";
import NineBlogContent from "./Components/BlogCard/NineBlog/NineBlogContent";
import TenBlogContent from "./Components/BlogCard/10Blog/TenBlogContent"
import { Helmet } from "react-helmet";
import ScrollToTop from "./Components/Scroll/ScrollToTop";
import BlogContent11 from "./Components/BlogCard/11Blog/BlogContent11";
import BlogContent12 from "./Components/BlogCard/12Blog/BlogContent12";
import BlogContent13 from "./Components/BlogCard/13Blog/BlogContent13";
import BlogContent14 from "./Components/BlogCard/14Blog/BlogContent14";
import BlogContent15 from "./Components/BlogCard/15Blog/BlogContent15";
import BlogContent16 from "./Components/BlogCard/16Blog/BlogContent16";
import BlogContent17 from "./Components/BlogCard/17Blog/BlogContent17"

function App() {
  return (
    <div>
      <Helmet>
        <title>Cricket Blogs | Latest Updates and Insights</title>
        <meta name="description" content="Explore the latest and most engaging cricket blogs, including expert opinions, match analyses, and cricket news updates. Stay informed with our blog posts!" />
        <meta name="keywords" content="Cricket Blogs, Latest Cricket Updates, Cricket News, Cricket Articles, Sachin Tendulkar, MS Dhoni, Cricket Insights, Cricket Events" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <TopNavBar />
      </div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Terms-and-Conditions" element={<Disclaimer />} />

        <Route path="/sachin-vs-virat-comparison-between-two" element={<FirstBlog />} />
        <Route path="/surya-kumar-yadav-can-he-only-bat-at-fast-pitches" element={<SecBlogContent />} />
        <Route path="/looking-at-the-usa-performance-this-world-cup" element={<ThirdBlogContent />} />
        <Route path="/was-hardik-pandya-right-choice-for-mumbai-indians-captaincy" element={<FourthBlogContent />} />
        <Route path="/thala-for-a-reason-examining-csk-decline-this-year" element={<FifthBlogContent />} />
        <Route path="/kkr's-win-a-lesson-for-franchises-relying-on-big-names" element={<SixBlogContent />} />
        <Route path="/gautam-gambhir-the-unsung-hero-of-2007-and-2011-world-cups" element={<SevenBlogContent />} />
        <Route path="/A-Detailed-Analysis-of-One-of-the-Greatest-Bowlers-of-Our-Time" element={<EightBlogContent />} />
        <Route path="/afghanistan-reaches-t20-world-cup-semi-finals-first-time" element={<NineBlogContent />} />
        <Route path="/india-won-t20-world-cup-2024" element={<TenBlogContent />} />
        <Route path="/Indian-Women’s-Cricket-Team-Beats-SA-by-10-Wickets-2024" element={<BlogContent11 />} />
        <Route path="/Fans-Celebrate-India's-T20-World-Cup-Victory" element={<BlogContent12 />} />
        <Route path="/Dominant-India-Thrashes-Zimbabwe-by-100-Runs-in-Second-T20-Match" element={<BlogContent13 />} />
        <Route path="/World-Test-Championship" element={<BlogContent14 />} />
        <Route path="/Gautam-Gambhir-appointed-as-indian-cricket-team-head-coach" element={<BlogContent15 />} />
        <Route path="/Farewell-to-a-Legend-James-Anderson-Bows-Out-from-Cricket" element={<BlogContent16 />} />
        <Route path="/Suryakumar-Yadav-The-New-Captain-of-India's-T-20-Cricket-Team" element={<BlogContent17 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
