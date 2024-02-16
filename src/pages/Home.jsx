import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div
        className="bg-cover min-h-screen w-full main__bg"
        style={{
          backgroundImage:
            "url('https://wallpaper-house.com/data/out/7/wallpaper2you_193051.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 60px)",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
