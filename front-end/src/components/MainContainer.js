
import React from 'react';
// import SideNav from "./SideNav/SideNav";
import DaySelectionCalendar from "./DaySelectionCalendar";
// import HomePage from "./Home/HomePage";
// import JournalPage from "./Journal/JournalPage";
// import Moodscape from "./Moodscape/Moodscape";
import classNames from "classnames";
import '../styles/MainContainer.scss';

function MainContainer() {

  //get viewMode from somewhere
  const viewMode = 'CALENDAR';

  //potential styles
  const mainContainerClass = classNames("main-container");

  return (
    <div className={mainContainerClass}>
      {/* Always display on the left */}
      {/* <SideNav /> */}

      {/* if no daySelectionId in session or default viewMode */}
      {
        viewMode === 'CALENDAR' && (
          <DaySelectionCalendar />
        )
      }

      {/* {
        viewMode === 'HOME' && (
          <HomePage />
        )
      }

      {
        viewMode === 'JOURNAL' && (
          <JournalPage />
        )
      }

      {
        viewMode === 'MOODSCAPE' && (
          <Moodscape />
        )
      } */}

    </div>
  );
}

export default MainContainer;