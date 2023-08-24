import React, { useState } from "react";
import CardList from "../components/Card/CardList";
import Logo from "../components/Logo/Logo";
import data from "../components/Card/introduce.json";
import Banner from "../components/Banner/Banner";
import SideBar from "../components/SideBar/SideBar";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  const birdInfo = {
    title: "白頭翁(Chinese bulbul)",
    description:
      "又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。",
  };

  const [sidebarChecked, setSidebarChecked] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarChecked(!sidebarChecked);
  };

  return (
    <div className={styles.HomePage}>
      <div className={styles.LogoContainer}>
        <Logo />
      </div>
      <SideBar checked={sidebarChecked} onToggle={handleSidebarToggle} />
      <div
        className={styles.Content}
        style={{
          top: sidebarChecked ? "334px" : " ", // Adjusted values
        }}
      >
        <Banner title={birdInfo.title} description={birdInfo.description} />
        <CardList data={data} />
      </div>
    </div>
  );
};

export default HomePage;
