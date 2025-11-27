import React from "react";
import Hero from "../components/home/Hero";
import CardsSection from "../components/home/CardsSection";

import CollegeSlider from "../components/home/CollegeSlider";
import CategoryNavbar from "../components/CategoryNavbar";
import LatestNews from "../sections/LatestNews";
import VideoSection from "../components/home/VideoSection";
import ExamTags from "../components/home/ExamTags";
import PredictCollegesSlider from "../components/home/PredictCollegesSlider";
import TrendingCourses from "../components/home/TrendingCourses";
import FeaturedArticles from "../components/home/FeaturedArticles";
import GetAppSection from "../components/home/GetAppSection";
import BoardsAndUniversities from "../components/home/BoardsAndUniversities";


export default function Home() {
  return (
    <div >
      <Hero />
      <CollegeSlider/>
   <CategoryNavbar/>
      <CardsSection/>
      <LatestNews/>
      <VideoSection/>
      <ExamTags/>
      <PredictCollegesSlider/>
      <TrendingCourses/>
      <BoardsAndUniversities/>
      <FeaturedArticles/>
      <GetAppSection/>
    </div>
  );
}
