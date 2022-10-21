import React, { useEffect, useState } from "react";
import "./HomeView.scss";
import GesamtScore from "../../Components/GesamtScore/GesamtScore.js";
import TagesScore from "../../Components/TagesScore/TagesScore.js";
import Ranking from "../../Components/Ranking/Ranking.js";
import HeaderNavigation from "../../Components/HeaderNavigation/HeaderNavigation.js";
import Dailies from "../../Components/Dailies/Dailies.js";
import Weeklies from "../../Components/Weeklies/Weeklies.js";
import Blog from "../../Components/Blog/Blog.js";
import GratitudeLog from "../../Components/GratitudeLog/GratitudeLog.js";
import ReflectionLog from "../../Components/ReflectionLog/ReflectionLog.js";

import Footer from "../../Components/Footer/Footer.js";
import FooterNavigation from "../../Components/FooterNavigation/FooterNavigation.js";
import Countdown from "../../Components/Countdown/Countdown.js";
import { getRemainingTimeUntilMsTimestamp } from "../../Components/Countdown/Utils/CountdownTimer";
import axios from "axios";

function HomeView() {
  const [reload, setReload] = useState(false);
  const [reloadLeaderboard, setReloadLeaderboard] = useState(false);

  const [daysScore, setDaysScore] = useState(0);
  const [weeksScore, setWeeksScore] = useState(0);

  useEffect(() => {
    console.log("RELOAD");
  }, [reload]);

  return (
    <div className="homeview">
      <HeaderNavigation />
      <div className="homeview-background">
        <div className="homeview-score">
          <GesamtScore
            reloadLeaderboard={reloadLeaderboard}
            setReloadLeaderboard={setReloadLeaderboard}
            weeksScore={weeksScore}
            setWeeksScore={setWeeksScore}
            daysScore={daysScore}
          />
          <TagesScore
            reload={reload}
            setReload={setReload}
            daysScore={daysScore}
            setDaysScore={setDaysScore}
          />
          <Ranking />
        </div>

        <Dailies
          reload={reload}
          setReload={setReload}
          reloadLeaderboard={reloadLeaderboard}
          setReloadLeaderboard={setReloadLeaderboard}
        />
        <Weeklies
          reload={reload}
          setReload={setReload}
          reloadLeaderboard={reloadLeaderboard}
          setReloadLeaderboard={setReloadLeaderboard}
        />
      </div>
      <div className="homeview-blog-gratitude">
        <Blog />
        <ReflectionLog
          reloadLeaderboard={reloadLeaderboard}
          setReloadLeaderboard={setReloadLeaderboard}
        />
        <GratitudeLog reload={reload} setReload={setReload} />
      </div>

      <Footer />
      <FooterNavigation />
    </div>
  );
}

export default HomeView;
