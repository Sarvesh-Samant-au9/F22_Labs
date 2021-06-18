import React, { useState } from "react";
import Chapter from "../Components/ChapterPage_Components/Chapter";
import ChapterCard from "../Components/ChapterPage_Components/ChapterCards";
import Navbar from "../Components/StartPage_Components/Navbar";
import Sidebar from "../Components/StartPage_Components/Sidebar";
import Things from "../Components/Things_Component/Things_Display/Things";
import Section1 from "../Components/StartPage_Components/SectionFirst";
import Reviews from "../Components/ReviewPage_Component/Reviews";
import AboutAuthor from "../Components/AboutPage_Components/AboutAuthor";
import Book from "../Components/Things_Component/BookAdvertise/Book";
import Footer from "../Components/FooterPage_Components/Footer/Footer";
import {
  sectionData,
  chapterCardData,
  thingsData,
  ratingsData,
  reviewData,
  pricingData,
  gridData,
} from "../Components/Data/data";
import SingleReview from "../Components/StartPage_Components/SingleReview";
import Ratings from "../Components/Things_Component/Ratings/Ratings";
import Pricing from "../Components/PricingPage_Components/Pricing";
import LastStrip from "../Components/FooterPage_Components/LastStrip/LastStrip";
import StartPage from "./Start_Page";
import ChapterPage from "./ChapterPage";
import ThingsPage from "./Things_Page";
import ReviewsPage from "./Reviews_Page";
import AboutPage from "./About_Page";
import PricingPage from "./Pricing_Page";
import FooterPage from "./Footer_Page";
const Home = () => {
  return (
    <>
      <StartPage />
      <ChapterPage />
      <ThingsPage />
      <ReviewsPage />
      <AboutPage />
      <PricingPage />
      <FooterPage />
    </>
  );
};

export default Home;
