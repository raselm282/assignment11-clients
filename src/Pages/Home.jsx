import React from "react";
import { HelmetProvider,Helmet } from 'react-helmet-async';
import SwiperSlider from "../Components/SwiperSlider";
import MarathonForHome from "../Components/MarathonForHome";
import UpcomingMarathon from "../Components/UpcomingMarathon";
import SectionOne from "../Components/SectionOne";
import SectionTwo from "../Components/SectionTwo";

const Home = () => {
  const handleAlert = () => {
    toast.success("Successfully toasted!");
  };
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <SwiperSlider></SwiperSlider>      
      <MarathonForHome></MarathonForHome>
      <UpcomingMarathon></UpcomingMarathon>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
    </div>
  );
};

export default Home;
